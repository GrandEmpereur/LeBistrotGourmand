import { IconProps } from '../common/Icon'

export interface INav {
    Logo: NavLogo;
    menu: NavBarItem[];
    navContent: any;
}

export interface NavLogo {
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

export interface NavBarItem {
    id: number;
    Label: string;
    Slug: string;
    Icon?: IconProps['name'];
    isExternallink: boolean;
}

