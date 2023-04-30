export interface IPage {
    id: number;
    attributes: {
        Content: IPageContent[];
        Name: string;
        Slug: string;
        createdAt: string;
        updatedAt: string;
    };
    pageContent: IPageContent[] | null;
}

export interface PageProps {
    pageContent: IPageContent[] | null;
    hasError: boolean;
}


export interface IPageContent {
    id: number;
    title: string;
    content: string;
    picture: pageImage;
    __component: string;
}

export interface pageImage {
    data: {
        attributes: {
            url: string;
            width: number;
            height: number;
        };
        id: number;
    };
}
