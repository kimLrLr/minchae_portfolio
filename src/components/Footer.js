import styled from "styled-components";

const SFooter = styled.footer`
  width: 100vw;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  color: #666;
  line-height: 15px;
  p {
    margin-top: 5px;
    color: #666;
  }

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    padding: 30px;
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    padding: 28px;
    font-size: 13px;
  }
`;

export const Footer = () => {
  return (
    <SFooter>
      &copy; 2024 kimLrLr
      <p>minchae9708@gmail.com</p>
    </SFooter>
  );
};
