import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  min-height: 300px;
`;

export const Card = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  padding: 30px;
  background: #fafafa;
  border-radius: 4px;
  overflow-y: scroll;
`;

export const CardTop = styled.div``;

export const Title = styled.h2`
  font-size: 18px;
`;

export const CardDescription = styled.p`
  margin-top: 15px;
`;

export const Image = styled.img`
  margin-top: 20px;
  border-radius: 50%;
`;
