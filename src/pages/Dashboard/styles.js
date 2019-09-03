import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      width: 172px;
      height: 45px;
      border: 0;
      border-radius: 4px;
      background: #FFF;
      font-size: 16px;
      font-weight: bold;
      color: #666;
      transition: background 0.5s;

      &:hover {
        background: rgba(255, 255, 255, 0.6);
        color: #000;
      }
    }

    strong {
      color: rgba(0, 0, 0, 0.8);
      font-size: 24px;
      margin: 0 15px;
    }
  }

  ul {
    margin-top: 30px;
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Person = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin-top: 10px;
  transition: background 0.3s;

  strong {
    display: block;
    color: #f2709c;
    font-size: 22px;
    font-weight: normal;
  }

  span {
    display: block;
    margin-top: 3px;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.7);
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 5px;
    font-size: 20px;
    font-weight: bold;
  }
`;
