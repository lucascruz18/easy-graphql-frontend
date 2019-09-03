import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

import Header from '../../components/Header';

const createUserMutation = gql`
  mutation createUser($name: String!, $lastname: String!, $email: String!) {
    createUser(name: $name, lastname: $lastname, email: $email) {
      name,
      lastname,
      email
    }
  }
`;

export default function Edit() {
  const [createUser] = useMutation(createUserMutation);

  function handleSubmit(data) {
    const { name, lastname, email } = data;

    createUser({variables: {name, lastname, email}})
  }

  return (
    <>
      <Header />

      <Container>
        <Form onSubmit={handleSubmit}>
          <Input name="name" placeholder="Digite seu nome" />
          <Input name="lastname" placeholder="Digite seu sobrenome" />

          <hr />

          <Input
            name="email"
            type="email"
            placeholder="Digite seu email"
          />

          <div>
            <button type="submit">Salvar</button>
          </div>
        </Form>
      </Container>
    </>
  );
}
