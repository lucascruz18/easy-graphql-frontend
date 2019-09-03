import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Text } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <Text>Easy</Text>
        </Link>
      </Content>
    </Container>
  );
}
