import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { switchstatement } from './ProjectStatus';

const AddProjectForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [project, setProject] = useState({ status: 'Not Started' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addProject(project);
        } catch (error) {
            console.error('Error adding Project:', error);
        }
        setLoading(false);
    };

    return (
        <>
            <div className='w-full h-full'>
                <button
                    className="bg-gradient-to-r from-[#7DC2EF] to-[#928EF4] rounded-lg p-2 px-4 text-sm mb-5"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate('/Project');
                    }}>
                    <IoArrowBack />
                </button>
                <form onSubmit={handleSubmit} className="space-y-4 w-full h-full">
                    <input
                        type="text"
                        name="project_name"
                        placeholder="Project Name"
                        value={project.project_name}
                        onChange={(e) => setProject({ ...project, project_name: e.target.value })}
                        className="w-full p-4 rounded-lg bg-[#323A4494] text-white"
                    />

                    <div className='flex flex-row '>
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={project.price}
                            onChange={(e) => setProject({ ...project, price: e.target.value })}
                            className="w-full p-4 rounded-lg bg-[#323A4494] text-white md:mr-2"
                        />
                        <input
                            type="number"
                            name="milestones"
                            placeholder="Milestones"
                            value={project.milestones}
                            onChange={(e) => setProject({ ...project, milestones: e.target.value })}
                            className="w-full p-4 rounded-lg bg-[#323A4494] text-white md:mr-2"
                        />
                        {switchstatement(project?.status)}
                    </div>


                    <textarea
                        name="description"
                        placeholder="Description"
                        value={project.description}
                        onChange={(e) => setProject({ ...project, description: e.target.value })}
                        className="w-full p-4 rounded-lg bg-[#323A4494] text-white"
                    ></textarea>
                    <input
                        type="datetime-local"
                        name="deadline"
                        value={project.deadline}
                        onChange={(e) => setProject({ ...project, deadline: e.target.value })}
                        className="w-full p-4 rounded-lg bg-[#323A4494] text-white"
                        required
                    />
                    <input
                        type="text"
                        name="team_lead"
                        placeholder="Team Lead"
                        value={project.team_lead}
                        onChange={(e) => setProject({ ...project, team_lead: e.target.value })}
                        className="w-full p-4 rounded-lg bg-[#323A4494] text-white"
                    />


                    {/* Submit button */}
                    <button type="submit" className="w-full bg-gradient-to-r from-[#7DC2EF] to-[#928EF4] text-white py-2 px-4 rounded-lg">
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                            </div>
                        ) : "Add Project"}
                    </button>
                </form>
            </div>
        </>
    );
}

export default AddProjectForm;
