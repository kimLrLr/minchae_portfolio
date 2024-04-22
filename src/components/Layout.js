import styled from "styled-components";
import { basic } from "../style/GlobalStyled";

const Container = styled.div`
  padding: ${basic.basePadding};
`;

export const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};
