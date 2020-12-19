import React from 'react';

import { Container } from './styles';

export default function DefaultLayout({ children }: any) {
  return (
    <Container>
        {children}
    </Container>
  );
}
