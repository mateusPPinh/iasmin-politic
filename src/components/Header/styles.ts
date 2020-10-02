import styled, { css } from 'styled-components';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: rgba(59, 28, 50, 0.5);
  top: 0;
  position: sticky;
  z-index: 10;
  overflow: hidden;
`;

export const HeaderContent = styled.div`
  padding: 10px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 80px;
    height: 80px;
    margin-top: -20px;
  }

  ul {
    display: flex;

    li {
      margin-left: 15px;
    }

    button {
      padding: 5px;
      border: 0;
      width: 80px;
      border-radius: 7px;
      background: #372B37;
      transition: background 0.2s;

      &:hover {
        background: ${shade(0.1, '#372B37')};
      }
    }
  }
`;

const iconsStyles = css`
  color: #fafafa;
`;

export const FacebookIcon = styled(FaFacebook)`
  ${iconsStyles};
`;

export const InstagramIcon = styled(FaInstagram)`
  ${iconsStyles};
`;