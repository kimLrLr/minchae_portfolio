import { Link } from "react-router-dom";
import styled from "styled-components";
import { basic } from "../style/GlobalStyled";

const SHeader = styled.div`
  width: 100vw;
  padding: ${basic.basePadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  background-color: #eee;
`;

const Logo = styled.div`
  h4 {
    font-weight: 500;
    color: #666;
  }
`;

const Menu = styled.ul`
  width: 8vw;
  display: flex;
  justify-content: space-between;

  h2 {
    font-weight: 900;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={"/"}>
          <h2>김민채</h2>
          <h4>PORTFOLIO</h4>
        </Link>
      </Logo>

      <Menu>
        <li>
          <Link to={"/etc"}>etc</Link>
        </li>
        <h2>/</h2>
        <li>
          <Link to={"/"}>FrontEnd</Link>
        </li>
      </Menu>
    </SHeader>
  );
};
