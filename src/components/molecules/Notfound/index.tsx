import { NotFoundContainer, NotFoundGif, NotFoundTitle } from './styled';



export const NotFoundPage = () => {
    return (
        <NotFoundContainer>
            <NotFoundTitle as='h1'>404 - Not Found</NotFoundTitle>
            <NotFoundGif src="/images/mew.gif" alt="Not Found GIF" />
        </NotFoundContainer>
    );
};
