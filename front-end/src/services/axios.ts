import axios, { AxiosInstance } from 'axios';

/* Creating an instance of axios and then calling the updateAxiosInstance function. */
let instance: AxiosInstance
updateAxiosInstance()

export async function getNavBar() {
    try {
        const response = await instance.get("nav-bar?populate=deep,2")
        return { data: response.data.data.attributes, error: null };
    } catch (error) {
        return { data: null, error };
    }
}

export async function getPages() {
    try {
        const response = await instance.get("pages?populate=deep")
        return { data: response.data.data, error: null };
    } catch (error) {
        return { data: null, error };
    }
}

export async function getRestaurants() {
    try {
        const response = await instance.get("restaurants?populate=deep")
        return { data: response.data.data, error: null };
    } catch (error) {
        return { data: null, error };
    }
}

export async function createRequest(requestData: unknown) {
    try {
        const response = await instance.post("requests", requestData)
        return { data: response.data.data, error: null };
    } catch (error) {
        return { data: null, error };
    }
}

export async function createReservation(reservationData: unknown) {
    try {
        const response = await instance.post("reservations", reservationData);
        return { data: response.data.data, error: null };
    } catch (error) {
        return { data: null, error };
    }
}

/**
 * This function creates a new axios instance with a new baseURL and assigns it to the instance
 * variable.
 */
export async function updateAxiosInstance() {
    const key = import.meta.env.VITE_STRAPI_API;

    instance = axios.create({
        baseURL: 'http://localhost:1337/api/',
        headers: {
            'Authorization': 'Bearer ' + key
        }
    });
}
