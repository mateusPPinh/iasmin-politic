import React from 'react';

import 
{ 
  Container, 
  HeaderContent, 
  FacebookIcon, 
  InstagramIcon 
} from './styles';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContent>
        <img src={logo} alt="Finger Logo" />

        <ul>
          <li>
            <button>
              <a href="https://www.facebook.com/roloffiasmin">
                <FacebookIcon size={30}/>
              </a>
            </button>

          </li>
          <li>
            <button>
              <a href="http://www.instagram.com/roloffiasmin">
                <InstagramIcon size={30} />
              </a>
            </button>
          </li>
        </ul>
      </HeaderContent>
    </Container>
  );
};

export default Header;
