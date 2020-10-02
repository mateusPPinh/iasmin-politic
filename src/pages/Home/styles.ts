import styled from 'styled-components';
import { FaLightbulb } from 'react-icons/fa';

export const Container = styled.div`
  padding: 30px 70px;
`;

export const SectionOne = styled.section`
  margin-top: 45px;
  max-width: 1200px;
  justify-content: space-between;
  display: flex;
  background: #372B37;
  max-height: 570px;

  img {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    border: 2px solid #fafafa;
    margin-top: 20px;
    transition: border-radius 0.2s;

    &:hover {
      border-radius: 48.5%;
    }
  }
`;

export const Title = styled.h1`
  font-size: 100px;
  color: #FECE00;
`;

export const Subtitle = styled.h2`
  font-size: 100px;
  color: #FFE985;
`;

export const PreFinalText = styled.h2`
  font-size: 100px;
  color: #F0544F;
`;

export const FinalText = styled.h4`
  font-size: 100px;
  color: #128E33;
`;

export const SectionTwo = styled.div`
  margin-top: 150px;
  background: rgba(59, 28, 50, 0.2);
  width: 100%;
  padding: 30px 70px;
  height: 470px;
`;

export const SectionTitle = styled.h2`
  font-size: 60px;
  color: #fafafa;
`;

export const Description = styled.p`
  color: #fafafa;
  margin-top: 40px;
  font-size: 20px;
  line-height: 1.5;
`; 

export const SectionThree = styled.section``;

export const SectionThreeTitle = styled.h2`
  font-size: 45px;
  color: #FFE985;
`;

export const IdeaIcon = styled(FaLightbulb)`
  color: #FFE985;
  margin-right: 15px;
`;
