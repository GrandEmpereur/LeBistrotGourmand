import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { getPages, getRestaurants, getNavBar } from '../services/axios';

import Page from '../components/Page';
import Loader from '../common/Loader';
import NotFound from './NotFound';
import Restaurant from './Restaurant';

import NavBar from '../common/NavBar';

import '../scss/App.scss';
import 'react-toastify/dist/ReactToastify.css';

import { INav } from '../interface/INav';
import { IPage, IPageContent } from '../interface/IPage';
import { IRestaurant } from '../interface/IRestaurant';

function App() {
    const [navContent, setNavContent] = useState<INav | null>(null);
    const [pageContent, setPageContent] = useState<IPage[] | null>(null);
    const [restaurantContent, setRestaurantContent] = useState<IRestaurant[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [navResponse, pagesResponse, restaurantsResponse] = await Promise.all([
                    getNavBar(),
                    getPages(),
                    getRestaurants(),
                ]);

                setNavContent(navResponse.data);
                setPageContent(pagesResponse.data);
                setRestaurantContent(restaurantsResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setHasError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const validSlugs = pageContent
        ? pageContent.map((page: IPage) => page.attributes.Slug).concat(['/restaurant/'])
        : [];

    const getPageContentBySlug = (slug: string): IPageContent[] | null => {
        if (!pageContent) return null;
        const page = pageContent.find((page: IPage) => page.attributes.Slug === slug);
        return page ? page.attributes.Content : null;
    };

    const getRestaurantContentById = (id: string | undefined) => {
        if (!restaurantContent || !id) return null;
        const restaurant = restaurantContent.find(
            (restaurant: IRestaurant) => restaurant.id === Number(id)
        );
        return restaurant || null;
    };

    const RestaurantWrapper = () => {
        const { id } = useParams<{ id: string }>();
        return <Restaurant restaurantContent={getRestaurantContentById(id)} id={0} />;
    };


    return (
        <Router>
            <>
                {loading ? <Loader /> : <NavBar navContent={navContent} />}
                {loading ? (
                    <Loader />
                ) : (
                    <Routes>
                        {validSlugs.map((slug: string) => (
                            <Route
                                key={slug}
                                path={slug}
                                element={<Page pageContent={getPageContentBySlug(slug)} hasError={hasError} />}
                            />
                        ))}
                        <Route
                            key="/restaurant/:id"
                            path="/restaurant/:id"
                            element={<RestaurantWrapper />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                )}
                <ToastContainer />
            </>
        </Router>
    );
}

export default App;
