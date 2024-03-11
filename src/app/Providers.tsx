'use client';

import * as React from 'react';
import GlobalStyle from '@/styles';
import { ThemeProvider } from 'styled-components';

import { StyledComponentsRegistry } from 'styles/registry';
import theme from 'styles/theme';

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </StyledComponentsRegistry>
    );
};

type ProvidersProps = {
    children: React.ReactNode;
};
