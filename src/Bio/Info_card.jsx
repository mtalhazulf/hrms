import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ProfilePage = () => {
    const [profile, setProfile] = React.useState([{
        name: 'Muhammad Talha',
        email: 'l202XXX@lhr.nu.edu.pk',
        phone: '+923*********',
        rollNumber: '20L-2177',
        profilePicture: 'https://lh3.googleusercontent.com/ogw/ANLem4Z2lkZ_99RL_ZIigAUqvRq4otzBsX9aepS40oV3lQ=s512-c-mo',
    },
    {
        name: 'Abdur Rehman',
        email: 'l202XXX@lhr.nu.edu.pk',
        phone: '+923*********',
        rollNumber: '20L-XXXX',
        profilePicture: 'https://lh3.googleusercontent.com/ogw/ANLem4Z2lkZ_99RL_ZIigAUqvRq4otzBsX9aepS40oV3lQ=s512-c-mo',
    },
    {
        name: 'Hassan Jawad',
        email: 'l202XXX@lhr.nu.edu.pk',
        phone: '+923*********',
        rollNumber: '20L-2177',
        profilePicture: 'https://lh3.googleusercontent.com/ogw/ANLem4Z2lkZ_99RL_ZIigAUqvRq4otzBsX9aepS40oV3lQ=s512-c-mo',
    }
    ]);

    return (
        <>
            <div className='bg-gray-800 text-white h-screen items-center justify-center'>
                <h1 className="text-4xl font-bold mb-4 text-center  text-white rounded-2xl p-4">Our Team</h1>
                <div className=" flex flex-wrap overflow-auto items-center justify-center w-full h-full">
                    {profile.map((info, index) => (
                        <div className="max-w-sm bg-gray-900 rounded-lg shadow-md p-6 m-4 ">
                            <div className="flex flex-col items-center" key={index}>
                                <img className="w-24 h-24 rounded-full mb-4 mt-2" src={info.profilePicture} alt="Profile" />
                                <h2 className="text-xl font-semibold">{info.name}</h2>
                                <p className="text-gray-400">{info.email}</p>
                                <p className="text-gray-400">{info.phone}</p>
                                <p className="text-gray-400">{info.rollNumber}</p>
                                <div className="flex mt-4">
                                    <a href="https://facebook.com" className="text-blue-600 mx-2"><FaFacebook size={24} /></a>
                                    <a href="https://twitter.com" className="text-blue-300 mx-2"><FaTwitter size={24} /></a>
                                    <a href="https://linkedin.com" className="text-blue-500 mx-2"><FaLinkedin size={24} /></a>
                                    <a href="https://instagram.com" className="text-pink-600 mx-2"><FaInstagram size={24} /></a>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
        </>
    );
};

export default ProfilePage;
