import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const basic = {
  basePadding: "20px 5%",
};

export const GlobalStyled = createGlobalStyle`

    ${reset}

    *{
        box-sizing: border-box;
        color: #1d1d1d;
    }

    a{
        text-decoration: none;
        display: block;
        color: #1d1d1d;
    }

    ul, li{
        list-style: none;
    }

    body{
        letter-spacing: -1px;
        word-break: break-all;
        font-family: "Noto Sans KR", sans-serif !important;
        overflow-x: hidden;
    }

`;
