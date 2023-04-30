import React, { useState, FormEvent, ChangeEvent } from 'react';
import { createReservation } from '../services/axios';
import { FormProps } from '../interface/IForm';
import { IRestaurant } from '../interface/IRestaurant';
import { toast } from 'react-toastify';

const ReservationForm: React.FC<FormProps> = ({ formFields }) => {
    const [formData, setFormData] = useState({
        name: '',
        numberOfPeople: '',
        restaurantId: '',
        reservationDateTime: '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        try {
            const reservationData = {
                data: {
                    reservationName: formData.name,
                    numberOfPeople: formData.numberOfPeople,
                    restaurent: formData.restaurantId,
                    reservationDate: formData.reservationDateTime,
                },
            };
            await createReservation(reservationData);
            toast.success('Réservation créée avec succès!');
            setFormData({
                name: '',
                numberOfPeople: '',
                restaurantId: '',
                reservationDateTime: '',
            });
        } catch (error) {
            toast.error('Une erreur s\'est produite lors de la création de la réservation.');
            console.error('Error submitting the reservation form:', error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl font-semibold mb-8">{formFields.Title}</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nom"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />
                    </div>
                    <div className="w-full">
                        <input
                            type="number"
                            name="numberOfPeople"
                            placeholder="Nombre de personnes"
                            value={formData.numberOfPeople}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        />
                    </div>
                    <div className="w-full">
                        <select
                            name="restaurantId"
                            value={formData.restaurantId}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                        >
                            <option value="">Sélectionnez un restaurant</option>
                            {formFields.restaurants?.data.map((restaurant: IRestaurant) => (
                                <option key={restaurant.id} value={restaurant.id}>{restaurant.attributes.name}</option>
                            ))}
                        </select>

                    </div>
                    <div className="w-full">
                        <input
                            type="datetime-local"
                            name="reservationDateTime"
                            placeholder="Date et heure de réservation"
                            value={formData.reservationDateTime}
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
                            Réserver
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ReservationForm;
