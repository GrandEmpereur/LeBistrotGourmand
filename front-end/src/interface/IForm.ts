import { IRestaurant } from "./IRestaurant";

export interface FormProps {
    formFields: {
        Title: string;
        name: string;
        email: string;
        subject: string;
        message: string;
        people?: string;
        date?: string;
        restaurants?: {
            data: IRestaurant[];
        }
        restaurents?: {
            data: string[];
            id: number;
        }
    }
}