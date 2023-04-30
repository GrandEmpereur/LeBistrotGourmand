import React from 'react';
import { IRestaurant } from '../interface/IRestaurant';
import '../scss/templates/Restaurant.scss';
import { Link } from 'react-router-dom';

const Restaurant: React.FC<IRestaurant> = ({ restaurantContent }) => {
    if (!restaurantContent) {
        return (
            <div style={{ textAlign: 'center' }}>
                <p>
                    Ce restaurant n'a pas de contenu ou vous vous êtes trompé de
                    restaurant.
                </p>
                <Link to="/">
                    <button>Retour à la page d'accueil</button>
                </Link>
            </div>
        );
    }

    const { name, adresse, hours, phone, picture } = restaurantContent.attributes;
    const imageSrc = picture ? "http://localhost:1337" + picture.data.attributes.url : '';
    const imageAlt = picture ? picture.data.attributes.name : '';

    const horaireList = `<ul>${hours.split('\n').map((line: any) => `<li>${line}</li>`).join('')}</ul>`;

    return (
        <div className="restaurant">
            <div className="restaurant__image-container">
                <img className="restaurant__image" src={imageSrc} alt={imageAlt} style={{ height: '520px', objectFit: 'cover' }} />
            </div>
            <div className="restaurant__info">
                <div className="restaurant__text">
                    <h1 className="restaurant__name">{name}</h1>
                    <p className="restaurant__address">{adresse}</p>
                    <p className="restaurant__phone">Téléphone : {phone}</p>
                    <div className="restaurant__hours">
                        <span>Horaires :</span>
                        <div
                            dangerouslySetInnerHTML={{ __html: horaireList }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Restaurant;
