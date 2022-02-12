import styled from 'styled-components';

export const Wrapper = styled.section`
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

export const Title = styled.h2`
  margin-bottom: 30px;
  padding: 10px 0;
  border-top: 2px solid gainsboro;
  border-bottom: 2px solid gainsboro;

  font-size: 26px;
  text-align: center;
  text-transform: uppercase;
  color: dimgrey;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 100px;
`;

export const Label = styled.span`
  color: white;
  margin-bottom: 20px;
`;

export const Percentage = styled.span`
  color: white;
  font-size: 24px;
  font-weight: 700;
`;
