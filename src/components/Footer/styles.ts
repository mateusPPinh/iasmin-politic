import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 30px 70px;
  background: rgba(59, 28, 50, 0.5);
  margin-top: 45px;
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const FooterItensOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    margin-bottom: 5px;
    margin-top: 10px;
    color: #f3f3f3;
    font-size: 13px;
    font-weight: bold;
  }
`;

export const FooterTitle = styled.h1`
  color: #fafafa;
  font-size: 18px;
  font-weight: 300;
`;

export const RightsFooterContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;

  small {
    color: #f3f3f3;
    font-weight: normal;
    margin-bottom: 15px;

    a {
      color: #f3f3f3;
      margin-left: 5px;
    }
  }
`;