import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { getMember ,deleteMember} from '../Integeration/Members'
import Loading from '../Components/Shared/Loading'
import { MdDelete } from "react-icons/md";
import { AiOutlineLoading } from "react-icons/ai";

import ConfirmationModal from '../Components/Shared/Confirmation';

const ProjectDetails = ({ projects }) => {
    return (<>
        {
            projects?.length > 0 ? <><div className="bg-[#323A4494] text-white p-4 rounded-lg m-2">
                <h2 className="text-lg font-bold mb-4 ">Project Details</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-center">
                        <thead>
                            <tr>
                                <th className="p-2">Project Name</th>
                                <th className="p-2">Deadline</th>
                                <th className="p-2">Milestones</th>
                                <th className="p-2">Team Lead</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects?.map((project, index) => (
                                <tr key={index}>
                                    <td className="p-2">{project.projects.name}</td>
                                    <td className="p-2">{project.projects.deadline}</td>
                                    <td className="p-2">{project.projects.milestones}</td>
                                    <td className="p-2">{project.projects.team_lead}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div></> : <></>
        }

    </>
    );
};

const LinkedServicesDetails = ({ service }) => {
    return (<>
        {
            service?.length > 0 ? <><div className="bg-[#323A4494] text-white p-4 rounded-lg m-2">
                <h2 className="text-lg font-bold mb-4">Services Details</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-center">
                        <thead>
                            <tr>
                                <th className="p-2">Service Name</th>
                                <th className="p-2">Status</th>
                                <th className="p-2">Type</th>
                                <th className="p-2">Rule Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {service.map((project, index) => (
                                <tr key={index}>
                                    <td className="p-2">{project.service}</td>
                                    <td className="p-2">{project.status}</td>
                                    <td className="p-2">{project.type}</td>
                                    <td className="p-2">{project.data?.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div></> : <></>
        }

    </>
    );
};

const ViewMemberForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const param = useParams();
    const [DeleteLoading, setDeleteLoading] = useState(false);
    const [ConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
    const [member, setMember] = useState();

    useEffect(() => {
        async function getDetails() {
            setLoading(true);
            try {
                setMember(await getMember(param.id));
            } catch (error) {
                console.error('Error adding member:', error);
            }
            setLoading(false);
        }
        getDetails();
    }, []);

    async function deleteMemberfromDB() {
        console.log('Deleting member');
        setDeleteLoading(true);
        try {
            await deleteMember(param.id);
        } catch (error) {
            console.error('Error Deleting member:', error);
        }
        setDeleteLoading(false);
    }

    return (
        <>
            {
                loading ? <Loading /> :
                    <div className='w-full h-full'>
                        <div className="flex flex-row justify-between items-center">
                            <button className="bg-gradient-to-r from-[#7DC2EF] to-[#928EF4] rounded-lg p-2 px-4 text-2xl mb-5" onClick={(e) => {
                                e.preventDefault();
                                navigate('/member');
                            }}>
                                <IoArrowBack />
                            </button>

                            <button className="bg-gradient-to-r from-[#7DC2EF] to-[#928EF4] rounded-lg p-2 px-4 mb-5 text-red-600 text-2xl " onClick={(e) => {
                                e.preventDefault();
                                setConfirmationModalOpen(true);
                            }}>
                                {DeleteLoading ? <AiOutlineLoading className="animate-spin" /> :  <MdDelete />}
                            </button>

                            <ConfirmationModal isOpen={ConfirmationModalOpen} onClose={() => { setConfirmationModalOpen(false) }} 
                            onConfirm={async () => { 
                                deleteMemberfromDB();
                                setConfirmationModalOpen(false);
                            }} />
                        </div>
                            
                        {
                            member === undefined ? <></> :<div className="bg-[#323A4494] text-white p-4 rounded-lg m-2 ">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className="p-2">Name</td>
                                            <td className="p-2">{member?.name}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">Personal Email</td>
                                            <td className="p-2">{member?.personal_email}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">Company Email</td>
                                            <td className="p-2">{member?.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">Github Username</td>
                                            <td className="p-2">{member?.github_username}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">Joining Date</td>
                                            <td className="p-2">{member?.joining_date}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">Role</td>
                                            <td className="p-2">{member?.role}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">Position</td>
                                            <td className="p-2">{member?.position}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">Assigned Projects</td>
                                            <td className="p-2">{member?.assigned_projects?.length}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        }

                        
                        <ProjectDetails projects={member?.assigned_projects} />
                        <LinkedServicesDetails service={member?.user_linking_data} />
                    </div>
            }
        </>
    );
}

export default ViewMemberForm;