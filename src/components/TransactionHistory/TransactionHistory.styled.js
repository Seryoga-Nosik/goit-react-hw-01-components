import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 30px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 20px 0px rgb(0 0 0 / 50%);

  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const History = styled.table`
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid dimgray;
  border-collapse: collapse;
  text-transform: capitalize;
`;

export const Thead = styled.thead`
  height: 40px;
  border-radius: 10px;
  color: #fff;
  background-color: dimgray;

  th {
    padding: 20px;
  }
`;

export const Tbody = styled.tbody`
  text-align: center;
  border: 2px solid dimgray;

  td {
    padding: 20px;
  }

  td:not(:last-child) {
    border-right: 2px solid dimgray;
  }

  tr:nth-child(even) {
    background-color: #e9ecef;
  }
`;
