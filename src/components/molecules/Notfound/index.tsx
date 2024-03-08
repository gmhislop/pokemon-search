import React from 'react';
import { NotFoundContainer, NotFoundGif, NotFoundTitle } from './styled';
import { Button } from '@/components/atoms';



export const NotFoundPage = () => {
    return (
        <NotFoundContainer>
            <NotFoundTitle as='h1'>404 - Not Found</NotFoundTitle>
            <NotFoundGif src="/images/mew.gif" alt="Not Found GIF" />
        </NotFoundContainer>
    );
};

export default NotFoundPage;
