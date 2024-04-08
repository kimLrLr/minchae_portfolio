import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: aliceblue;
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
