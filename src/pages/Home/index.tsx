import React from 'react';

import {
Container,
SectionOne,
Title,
Subtitle,
PreFinalText,
FinalText,
SectionTwo,
SectionTitle,
Description,
SectionThree,
SectionThreeTitle,
IdeaIcon,
} from './styles';
import Header from '../../components/Header';
import iasmin from '../../assets/site2.jpg';
import Cards from '../../components/Cards';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <SectionOne>
          <div className="column_group">
            <Title>#agricultora,</Title>
            <Subtitle>#jovem,</Subtitle>
            <PreFinalText>#mulher,</PreFinalText>
            <FinalText>#trabalhadora.</FinalText>
          </div>
          <img src={iasmin} alt="Iasmin Roloff Thumbnail" />
        </SectionOne>
      </Container>

      <SectionTwo>
        <SectionTitle>Quem é a Iasmin?</SectionTitle>
        <Description>
        Sou agricultora, trabalho na produção de morangos sem veneno, formada em 
        Agroecologia, estudante de Ciência Política, organizadora e 
        feirante nas feiras “Sabores da Terra” e 
        “Feira Virtual Girassol”. 
        Sou filha da Eliane e do Renato. 
        Meus irmãos, meus pais e eu Minha família e eu sempre 
        trabalhamos na lida do campo. A fumicultura 
        e a agricultura familiar são nossa realidade. 
        Desde criança vivenciando este contexto, 
        me inteirei das dificuldades enfrentadas no meio rural e percebi 
        que nós agricultores somos o sustento e parte vital 
        da nossa cidade! Porém, precisamos de melhorias 
        e políticas que facilitem nossa vida e trabalho no campo.
        </Description>

          <Description>
          Na infância tinha o Sempre tive o sonho de mudar o mundo, mas conforme fui crescendo, percebi que mudar o mundo é difícil e entendi que posso começar fazendo a diferença no lugar onde vivo. Assim, decidi colocar meu nome à disposição da comunidade, enquanto jovem do campo, mulher e agricultora honesta que conhece a realidade daqueles que tem a terra como sustento. Quero representá-los e fazer a 
          diferença na vida da comunidade canguçuense.
          </Description>
      </SectionTwo>

      <SectionThree>
        <SectionThreeTitle>
          <IdeaIcon size={45} />
          Agricultura
        </SectionThreeTitle>
        <Cards />
      </SectionThree>

      <SectionThree>
        <SectionThreeTitle>
          <IdeaIcon size={45} />
          Ideais
        </SectionThreeTitle>
        <Cards />
      </SectionThree>

      <SectionThree>
        <SectionThreeTitle>
          <IdeaIcon size={45} />
          Ideais
        </SectionThreeTitle>
        <Cards />
      </SectionThree>

      <SectionThree>
        <SectionThreeTitle>
          <IdeaIcon size={45} />
          Ideais
        </SectionThreeTitle>
        <Cards />
      </SectionThree>

      <SectionThree>
        <SectionThreeTitle>
          <IdeaIcon size={45} />
          Ideais
        </SectionThreeTitle>
        <Cards />
      </SectionThree>

      <Footer />
    </>
  );
};

export default Home;
