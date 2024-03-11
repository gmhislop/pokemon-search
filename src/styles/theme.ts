import { Roboto } from 'next/font/google';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['500', '700'],
    display: 'swap',
});

export const theme = {
    colors: {
        primary: '#4360b8',
        secondary: '#fc0000',
        tertiary: '#d2d2d2',
        text: '#FFFFFF',
        textSecondary: '#000000',
        link: '#FFCB05',
        linkSecondary: '#383838',
        linkHover: '#F5D780',
        buttonBackground: '#FFCB05',
        buttonText: '#000000',
        buttonBorder: '#FFCB05',
        buttonOutlineBorder: '#FFFFFF',
        buttonOutlineText: '#FFFFFF',
        buttonHoverBackground: '#F5D780',
        buttonHoverOutlineText: '#F5D780',
        cardBorder: '#d1d3d4',
    },
    fonts: {
        roboto: `${roboto.style.fontFamily}, ui-sans-serif, system-ui, -apple-system`,
    },
} as const;

export default theme;