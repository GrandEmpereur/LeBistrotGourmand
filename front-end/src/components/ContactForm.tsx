import React, { useState } from 'react';
import { createRequest } from '../services/axios';
import { FormProps } from '../interface/IForm';
import { toast } from 'react-toastify';

const Form: React.FC<FormProps> = ({ formFields }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        people: '',
        date: '',
        restauraunts: ''
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.currentTarget;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const requestData = {
            data: {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
            }
        };
        try {
            await createRequest(requestData);
            toast.success('Votre message a été envoyé avec succès!');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
                people: '',
                date: '',
                restauraunts: ''
            });
        } catch (error) {
            toast.error('Une erreur s\'est produite lors de l\'envoi de votre message.');
            console.error('Error submitting the contact form:', error);
        }
    };
    


    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-semibold mb-8">{formFields.Title}</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="flex flex-wrap">
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <input
                                type="text"
                                name="name"
                                placeholder={formFields.name}
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded mb-4"
                            />
                        </div>
                        <div className="w-full">
                            <input
                                type="email"
                                name="email"
                                placeholder={formFields.email}
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded mb-4"
                            />
                        </div>
                        <div className="w-full">
                            <input
                                type="text"
                                name="subject"
                                placeholder={formFields.subject}
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded mb-4"
                            />
                        </div>
                        <div className="w-full">
                            <textarea
                                name="message"
                                placeholder={formFields.message}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded mb-4"
                            />
                        </div>
                        <div className="w-full">
                            <button
                                type="submit"
                                className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
                            >
                                Envoyer
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
