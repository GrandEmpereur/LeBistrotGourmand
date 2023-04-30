import React from 'react';
import { Link } from 'react-router-dom';
import { RestaurantProps } from '../interface/IRestaurant';

const SectionRestaurant: React.FC<RestaurantProps> = ({ item }) => {
    return (
        <div className="restaurant">
            <div className="restaurant__content max-w-1440 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {item.restaurants.data.map((restaurant: any) => (
                    <div className="restaurant__item bg-white rounded-lg shadow-md p-6" key={restaurant.id}>
                        <img
                            src={`http://localhost:1337${restaurant.attributes.picture.data.attributes.url}`}
                            alt={restaurant.attributes.picture.data.attributes.name}
                            loading="lazy"
                            className="w-full h-auto object-cover rounded-md mb-4"
                        />

                        <h3 className="text-xl text-gray-800 only:font-semibold mb-2">{restaurant.attributes.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">{restaurant.attributes.adresse}</p>
                        <p className="text-sm text-gray-600">Téléphone : {restaurant.attributes.phone}</p>

                        <Link
                            to={`/restaurant/${restaurant.id}`}
                            className="inline-block px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
                        >
                            Voir détails
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SectionRestaurant;
