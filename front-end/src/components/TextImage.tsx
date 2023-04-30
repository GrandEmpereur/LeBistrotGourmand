import React from 'react';

interface TextAndImageProps {
    item: any;
}

const TextAndImage: React.FC<TextAndImageProps> = ({ item }) => {
    const hasImage = item.IsImage;

    return (
        <div className="TextAndImage">
            <div className={`TextAndImage__content flex flex-col items-center ${!hasImage ? 'items-center' : ''} ${hasImage ? 'md:flex-row' : ''}`}>
                {hasImage && (
                    <img
                        src={`http://localhost:1337${item.Picture.data.attributes.url}`}
                        alt={item.Picture.data.attributes.alternativeText}
                        loading="lazy"
                        className="w-full md:w-1/2 md:mr-6 h-520 object-cover"
                    />
                )}
                <div className={`TextAndImage__item ${hasImage ? 'w-full md:w-1/2' : 'text-center'}`} key={`${item.__component}`}>
                    {item.Title && <h2 className="text-2xl font-semibold mb-4">{item.Title}</h2>}
                    {item.Content && <p className="text-gray-600 mb-4">{item.Content}</p>}
                    {item.IsButton && (
                        <button className="button bg-blue-500 text-white px-4 py-2 rounded-md">
                            {item.ButtonText}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
    
};

export default TextAndImage;
