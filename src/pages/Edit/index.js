import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

import Header from '../../components/Header';

const updateUserMutation = gql`
  mutation updateUser($id: String!,$name: String, $lastname: String, $email: String) {
    updateUser(id: $id,name: $name, lastname: $lastname, email: $email) {
      id,
      name,
      lastname,
      email
    }
  }
`;

const userQuery = gql`
  query user($id: String!){
    user(id: $id) {
      id,
      name,
      lastname,
      email
    }
  }
`;

export default function Edit({ match }) {
  const id = match.params.id;

  const [updateUser] = useMutation(updateUserMutation);

  function handleSubmit(data) {
    const id = match.params.id;
    const { name, lastname, email } = data;

    updateUser({variables: {id, name, lastname, email}})
  }

  const { loading, error, data } = useQuery(userQuery, {
    variables: { id: id }
  })

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro :(</p>;

  return (
    <>
      <Header />

      {data.user.map(u => (
        <Container key={u.id}>
          <Form initialData={u} onSubmit={handleSubmit}>
            <Input name="name" placeholder="Digite seu nome" />
            <Input
              name="lastname"
              placeholder="Digite seu sobrenome"
            />

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
      ))}
    </>
  );
}
