import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { getMember, deleteMember } from '../Integeration/Members'
import Loading from '../Components/Shared/Loading'
import { MdDelete } from "react-icons/md";
import { AiOutlineLoading } from "react-icons/ai";
import { switchstatement } from './ProjectStatus';
import ConfirmationModal from '../Components/Shared/Confirmation';
import ShowInfo from '../Components/Shared/ShowInfo';
import { getProject } from '../Integeration/Projects';

const ProjectDetails = ({ projects }) => {
    const [ConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

    return (<>
        {
            projects?.length > 0 ? <><div className="bg-[#323A4494] text-white p-4 rounded-lg m-2">
                <h2 className="text-lg font-bold mb-4 ">Project Details</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-center">
                        <thead>
                            <tr>
                                <th className="p-2">No</th>
                                <th className="p-2">Name</th>
                                <th className="p-2">Deadline</th>
                                <th className="p-2">Status</th>
                                <th className="p-2">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project, index) => (
                                <tr key={index}>
                                    <td className="p-2">{project?.milestone_no}</td>
                                    <td className="p-2">{project?.Name}</td>
                                    <td className="p-2">{project?.deadline}</td>
                                    <td className="p-2">
                                        {switchstatement(project?.status)}
                                    </td>
                                    <td className="p-2">
                                        <button className="bg-gradient-to-r from-[#7DC2EF] to-[#928EF4] rounded-lg p-2 text-white text-xl " onClick={(e) => {
                                            e.preventDefault();
                                            setConfirmationModalOpen(true);
                                        }} >
                                            Show Info
                                        </button>

                                        <ShowInfo isOpen={ConfirmationModalOpen} onClose={() => { setConfirmationModalOpen(false) }}
                                            description={project?.Descriptions}
                                            onConfirm={async () => {
                                                setConfirmationModalOpen(false);
                                            }} />
                                    </td>
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

const MemberDetails = ({ member,navigate }) => {

    return (<>
        {
            member?.length > 0 ? <><div className="bg-[#323A4494] text-white p-4 rounded-lg m-2">
                <h2 className="text-lg font-bold mb-4 ">Member Details</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-center">
                        <thead>
                            <tr>
                                <th className="p-2">Name</th>
                                <th className="p-2">Role</th>
                                <th className="p-2">Show Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {member.map((project, index) => (
                                <tr key={index}>
                                    <td className="p-2">{project?.members.name}</td>
                                    <td className="p-2">{project?.role}</td>
                                    <td className="p-2">
                                        <button className="bg-gradient-to-r from-[#7DC2EF] to-[#928EF4] rounded-lg p-2 text-white text-xl " onClick={(e) => {
                                            e.preventDefault();
                                            navigate(`/view_member/${project?.member_id}`);
                                        } } >
                                            Show Info
                                        </button>
                                    </td>
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

const ViewProjectForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const param = useParams();
    const [DeleteLoading, setDeleteLoading] = useState(false);
    const [ConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
    const [project, setProject] = useState();

    console.log(param);

    useEffect(() => {
        async function getDetails() {
            setLoading(true);
            try {
                setProject(await getProject(param.id));
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
                                navigate('/projects');
                            }}>
                                <IoArrowBack />
                            </button>

                            <button className="bg-gradient-to-r from-[#7DC2EF] to-[#928EF4] rounded-lg p-2 px-4 mb-5 text-red-600 text-2xl " onClick={(e) => {
                                e.preventDefault();
                                setConfirmationModalOpen(true);
                            }}>
                                {DeleteLoading ? <AiOutlineLoading className="animate-spin" /> : <MdDelete />}
                            </button>

                            <ConfirmationModal isOpen={ConfirmationModalOpen} onClose={() => { setConfirmationModalOpen(false) }}
                                onConfirm={async () => {
                                    deleteMemberfromDB();
                                    setConfirmationModalOpen(false);
                                }} />
                        </div>
                        <div className="bg-[#323A4494] text-white p-4 rounded-lg m-2 ">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td className="p-2">Name</td>
                                            <td className="p-2">{project?.name}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">Assigned</td>
                                            <td className="p-2">{project?.assigned_projects?.length}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">deadline</td>
                                            <td className="p-2">{project?.deadline}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">Created at</td>
                                            <td className="p-2">{project?.created_at}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">Team Lead</td>
                                            <td className="p-2">{project?.team_lead}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <ProjectDetails projects={project?.milestones} />
                        <MemberDetails member={project?.assigned_projects} navigate={navigate}/>
                    </div>
            }
        </>
    );
}

export default ViewProjectForm;