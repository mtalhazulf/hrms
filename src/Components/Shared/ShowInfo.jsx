import React from 'react';
import { useEffect, useRef } from 'react';
import { AiOutlineLoading } from "react-icons/ai";
import { Navigate } from 'react-router-dom';

const ShowInfo = ({ isOpen, onClose, description }) => {
    if (!isOpen) return null;

    const modalRef = useRef();

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onClose();
        } else if (event.key === 'Delete') {
            onDelete && onDelete();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    console.log(description);

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" >
            <div className="bg-white p-4 rounded-lg shadow-md" ref={modalRef}>
                <h1 className='text-black font-bold text-2xl'> MileStone Description</h1>
                <br />
                <span className="text-black">
                {
                    description
                }
                </span>
                
            </div>
        </div>
    );
};

export default ShowInfo;