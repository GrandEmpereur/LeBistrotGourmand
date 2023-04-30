import React from 'react';
import * as Icons from 'react-feather';

export interface IconProps {
    name: keyof typeof Icons;
    className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
    const formatName = (iconName: string): keyof typeof Icons => {
        const formattedName = iconName.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
        return formattedName as keyof typeof Icons;
    };

    const formattedName = formatName(name);
    const IconComponent = Icons[formattedName];

    return (
        <IconComponent className={className} />
    );
};

export default Icon;
