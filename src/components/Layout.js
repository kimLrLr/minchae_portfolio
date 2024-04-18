import styled from "styled-components";
import { basic } from "../style/GlobalStyled";

const Container = styled.div`
  /* background-color: aliceblue; */
  padding: ${basic.basePadding};
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
