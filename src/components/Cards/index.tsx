import React from 'react';

import 
{ 
  Container,
  Card,
  CardTop,
  Title,
  CardDescription,
  Image 
} from './styles';

const Cards: React.FC = () => {
  return (
    <Container>
      <Card>
        <CardTop>
          <Title>Por todos</Title>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur.
          </CardDescription>

          <Image 
            src="https://api.adorable.io/avatars/185/abott@adorable.png"
            alt="Provisory Avatar"
          />  

          <strong>
            Lorem ipsum dolor sit amet consectetur.
            Lorem ipsum dolor sit amet consectetur.
            Lorem ipsum dolor sit amet consectetur.
            Lorem ipsum dolor sit amet consectetur.
          </strong>
        </CardTop>
      </Card>

      <Card>
        <CardTop>
          <Title>Sustentabilidade</Title>
          <CardDescription>
            Lorem ipsum dolor sit amet.
          </CardDescription>

          <Image 
            src="https://api.adorable.io/avatars/185/abott@adorable.png"
            alt="Provisory Avatar"
          />  
        </CardTop>
      </Card>

      <Card>
        <CardTop>
          <Title>Unificação</Title>
          <CardDescription>
            Lorem ipsum dolor sit amet.
          </CardDescription>

          <Image 
            src="https://api.adorable.io/avatars/185/abott@adorable.png"
            alt="Provisory Avatar"
          />  
        </CardTop>
      </Card>
    </Container>
  );
};

export default Cards;
