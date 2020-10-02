import React from 'react';

import 
{ 
  Container,
  Footer,
  FooterItensOne,
  FooterTitle,
  RightsFooterContent 
} from './styles';

const FooterComponent: React.FC = () => {
  return (
    <Container>
      <Footer>
        <FooterItensOne>
          <FooterTitle>Contato</FooterTitle>
          <a href="#">Facebook</a>
            
          <a href="#">Instagram</a>
          
          <a href="#">E-mail</a>  
        </FooterItensOne>

        <FooterItensOne>
          <FooterTitle>Assine new-slatter</FooterTitle>
          <a href="#">Facebook</a>
            
          <a href="#">Instagram</a>
          
          <a href="#">Email</a>  
        </FooterItensOne>

        <FooterItensOne>
          <FooterTitle>Assessoria especializada</FooterTitle>
          <a href="#">Facebook</a>
            
          <a href="#">Instagram</a>
          
          <a href="#">E-mail</a>  
        </FooterItensOne>
      </Footer>

      <RightsFooterContent>
          <small>Iasmin Roloff - &copy; 2020 Todos os Direitos Reservados</small>
          <small>Made by:
            <a href="mailto:mateusrpinheiro.contato@outlook.com">Mateus P</a>
          </small>
        </RightsFooterContent>
    </Container>
  );
};

export default FooterComponent;
