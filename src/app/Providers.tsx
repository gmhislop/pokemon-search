'use client';

import * as React from 'react';
import GlobalStyle from '@/styles';
import { ThemeProvider } from 'styled-components';

import { StyledComponentsRegistry } from 'styles/registry';
import theme from 'styles/theme';
import { ApolloProvider } from '@apollo/client';
import client from '@/services/graphql';

export const Providers = ({ children }: ProvidersProps) => {
    return (
        <StyledComponentsRegistry>
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    {children}
                </ThemeProvider>
            </ApolloProvider>
        </StyledComponentsRegistry>
    );
};

type ProvidersProps = {
    children: React.ReactNode;
};
