import styled from "styled-components";

const SFooter = styled.footer`
  width: 100vw;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  color: #666;

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    padding: 30px;
  }
  @media screen and (max-width: 768px) {
    padding: 28px;
  }
`;

export const Footer = () => {
  return <SFooter>&copy; 2024 kimLrLr</SFooter>;
};
