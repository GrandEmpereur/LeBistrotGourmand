import React from 'react';
import TextAndImage from './TextImage';
import SectionRestaurant from './ListRestaurant';
import SectionAboutUs from '../view/AboutUs';
import Form from './ContactForm';
import Slider from './Slider';
import { PageProps } from '../interface/IPage';
import ReservationForm from './ReservationForm';

const ErrorMessage: React.FC = () => (
    <div className="error-message">
        <h1>Une erreur est survenue</h1>
        <p>Veuillez réessayer plus tard.</p>
    </div>
);

const Page: React.FC<PageProps> = ({ pageContent, hasError }) => {
    console.log(pageContent)
    if (hasError) {
        return <ErrorMessage />;
    }

    return (
        <div className="page mt-12">
            <div className="page__content space-y-24">
                {pageContent &&
                    pageContent.map((item: any) => (
                        <div className="page__content" key={`${item.__component}-${item.id}`}>
                            {item.__component === 'enriched-content.text-and-image' && (
                                <TextAndImage item={item} />
                            )}
                            {item.__component === 'block.restaurent' && <SectionRestaurant item={item} />}
                            {item.__component === 'block.about-us' && <SectionAboutUs item={item} />}
                            {item.__component === 'block.form' && <Form formFields={item} />}
                            {item.__component === 'block.reservation-form' && (
                                <ReservationForm formFields={item} />
                            )}
                            {item.__component === 'enriched-content.slider' && (
                                <Slider
                                    slides={[
                                        ...(item.Picture?.data || []).map((picture: any) => ({
                                            id: picture.id,
                                            type: 'image',
                                            src: `http://localhost:1337${picture.attributes.url}`,
                                            alt: picture.attributes.alternativeText || '',
                                        })),
                                        ...(item.Video?.data || []).map((video: any) => ({
                                            id: video.id,
                                            type: 'video',
                                            src: `http://localhost:1337${video.attributes.url}`,
                                        })),
                                    ]}
                                />
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Page;
