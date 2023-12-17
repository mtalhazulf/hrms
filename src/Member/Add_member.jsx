import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { addMember } from '../Integeration/Members'

const AddMemberForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [member, setMember] = useState({
        personal_email: 'l202177@lhr.nu.edu.pk',
        email: 'mtalhazulf@texagon.io',
        name: 'Muahmmad Talha',
        joining_date: '2023-12-05T18:38', // format should be 'YYYY-MM-DDTHH:mm:ss'
        role: 'f6cb451b-43c5-4950-819a-877540e96135', // This should be a UUID, ensure to handle it accordingly
        position: 'Full Stack Developer',
        github_username: 'AbdurehmanSaleemi',
    });

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            await addMember(member);
        } catch (error) {
            console.error('Error adding member:', error);
        }
        setLoading(false);
    }

    return (<>
        <div className='w-full h-full'>

            <button className="bg-gradient-to-r from-[#7DC2EF] to-[#928EF4] rounded-lg p-2 px-4 text-sm mb-5" onClick={(e) => {
                e.preventDefault();
                navigate('/member');
            }}>
                <IoArrowBack />
            </button>
            <form onSubmit={handleSubmit} className="space-y-4 w-full h-full ">
                <input
                    type="email"
                    name="personal_email"
                    placeholder="Personal Email"
                    value={member.personal_email}
                    onChange={(e) => {
                        setMember({ ...member, personal_email: e.target.value })
                    }}
                    className="w-full p-4 rounded-lg bg-[#323A4494] text-white"
                    required
                />
                <input
                    type="email"
                    name="Company User"
                    placeholder="Company Username"
                    value={member.email}
                    onChange={(e) => {
                        setMember({ ...member, email: e.target.value })
                    }}
                    className="w-full p-4  rounded-lg bg-[#323A4494] text-white"
                    required
                />
                <input
                    type="text"
                    name="Github"
                    placeholder="Github Username"
                    value={member.github_username}
                    onChange={(e) => {
                        setMember({ ...member, github_username: e.target.value })
                    }}
                    className="w-full p-4  rounded-lg bg-[#323A4494] text-white"
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={member.name}
                    onChange={(e) => {
                        setMember({ ...member, name: e.target.value })
                    }}
                    className="w-full p-4  rounded-lg bg-[#323A4494] text-white"
                    required
                />
                <input
                    type="datetime-local"
                    name="joining_date"
                    placeholder="Joining Date"
                    value={member.joining_date}
                    onChange={(e) => {
                        setMember({ ...member, joining_date: e.target.value })
                    }} className="w-full p-4  rounded-lg bg-[#323A4494] text-white bg-red-200  "
                    required
                />
                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={member.role}
                    onChange={(e) => {
                        setMember({ ...member, role: e.target.value })
                    }}
                    className="w-full p-4  rounded-lg bg-[#323A4494] text-white"
                    required
                />
                <input
                    type="text"
                    name="position"
                    placeholder="Position"
                    value={member.position}
                    onChange={(e) => {
                        setMember({ ...member, position: e.target.value })
                    }}
                    className="w-full p-4  rounded-lg bg-[#323A4494] text-white"
                    required
                />
                <button type="submit" className="w-full bg-gradient-to-r from-[#7DC2EF] to-[#928EF4] text-white py-2 px-4 rounded-lg">
                    {
                        loading ? <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                        </div> : "Add Member"
                    }

                </button>
            </form>

        </div>
    </>
    );
}

export default AddMemberForm;