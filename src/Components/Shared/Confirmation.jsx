import React from 'react';
import { useEffect, useRef } from 'react';
import { AiOutlineLoading } from "react-icons/ai";
import { Navigate } from 'react-router-dom';

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    const modalRef = useRef();
    const [onDelete, setOnDelete] = React.useState(false);

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


    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center" >
            <div className="bg-white p-4 rounded-lg shadow-md" ref={modalRef}>
                <h2 className="text-lg font-semibold">Confirm Delete</h2>
                <p>Are you sure you want to delete this item?</p>
                <div className="flex justify-end space-x-2 mt-4">
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                        onClick={onConfirm}
                        disabled={onDelete}
                    >
                        {
                            onDelete ?  <AiOutlineLoading className="animate-spin" />:'Delete' 
                        }
                    </button>
                    <button
                        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                        onClick={onClose}
                        disabled={onDelete}
                        >
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;