export interface IRestaurant {
    id: number;
    attributes: {
        name: string;
        adresse: string;
        hours: string;
        phone: string;
        picture: IRestaurantImage;
    };
    restaurantContent?: IRestaurant | null | undefined;
}

export interface RestaurantProps  {
    restaurantContent?: IRestaurant ;
    item: any;
}

export interface IRestaurantImage {
    data: {
        attributes: {
            url: string;
            width: number;
            height: number;
            name: string;
        };
        id: number;
    };
}
