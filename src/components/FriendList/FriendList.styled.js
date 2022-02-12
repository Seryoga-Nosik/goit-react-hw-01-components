import styled from 'styled-components';

export const List = styled.ul`
  width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 30px 0;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 20px 0px rgb(0 0 0 / 50%);

  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 400px;
  min-height: 100px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px rgb(0 0 0 / 50%);

  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Status = styled.span`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? `mediumseagreen` : `indianred`)};
`;

export const Avatar = styled.img`
  width: 100px;
  margin-right: 20px;

  border-radius: 10px;
`;

export const Name = styled.p`
  font-size: 26px;
  font-weight: 700;
`;
