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
        word-wrap: break-word;
    }

    img{
        display: block;
        width: 100%;
    }

    a{
        text-decoration: none;
        display: block;
        color: #1d1d1d;
    }

    ul, li{
        list-style: none;
    }

    body, html{
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    body{
        letter-spacing: -1px;
        word-break: keep-all;
        font-family: "Noto Sans KR", sans-serif !important;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        touch-action: pan-y;
    }

`;
