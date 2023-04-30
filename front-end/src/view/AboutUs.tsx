import React from 'react';
import '../scss/templates/AboutUs.scss'

interface AboutUsProps {
    item: any;
}

const SectionAboutUs: React.FC<AboutUsProps> = ({ item }) => {
    console.log(item);
    return (
        <div className="AboutUs py-8">
            <h2 className="text-2xl font-semibold mb-6">{item.Title}</h2>
            <p className="text-gray-600">{item.Content}</p>
        </div>
    );
};

export default SectionAboutUs;
