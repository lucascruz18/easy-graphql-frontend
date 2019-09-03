import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import { MdAddCircleOutline } from 'react-icons/md';

import Header from '../../components/Header';

import { Container, Content, Person } from './styles'

export const usersQuery = gql`
  query {
    users {
      id,
      name,
      lastname,
      email
    }
  }
`;

export default function Dashboard() {
  return (
    <>
     <Header />

     <Container>
       <header>
        <strong>USERS</strong>
        <Link to="/new">
          <button>Criar</button>
        </Link>
       </header>

      <Content>
        <Query query={usersQuery}>
          {({ loading, error, data }) => {
            if (loading) return <p>Carregando...</p>;
            if (error) return <p>Erro :(</p>;

            return (
              <ul>
                {data.users.map(user => (
                  <Person key={user.id}>
                    <div>
                      <strong>{user.name+' '+user.lastname}</strong>
                      <span>{user.email}</span>
                    </div>
                    <div>
                      <Link to={`/edit/${user.id}`}>
                        <MdAddCircleOutline size={25} color="#333" />
                      </Link>
                    </div>
                  </Person>
                ))}
              </ul>
            );
          }}
        </Query>
      </Content>
     </Container>
    </>
  );
}
