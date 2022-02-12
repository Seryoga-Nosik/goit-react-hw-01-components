import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 280px;
  margin: 2rem auto;

  border-radius: 10px;

  box-shadow: 0 0 10px 5px rgb(0 0 0 / 50%);
  overflow: hidden;
`;

export const Description = styled.div`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-bottom: 10px;

  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Tag = styled.p`
  margin-bottom: 10px;

  font-size: 14px;
  font-style: normal;
  color: dimgray;
`;

export const Location = styled.p`
  font-size: 16px;
  color: dimgray;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  border-top: 1px solid lightgray;
  background-color: ghostwhite;

  > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;

    width: 100%;
  }

  > li:not(:last-child) {
    border-right: 1px solid lightgray;
  }
`;

export const Label = styled.span`
  margin-bottom: 5px;

  color: dimgray;
`;

export const Quantity = styled.span`
  display: block;
  text-align: center;
  font-weight: 700;
`;
