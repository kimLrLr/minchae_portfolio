import styled from "styled-components";
import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import { colors } from "../../style/GlobalStyled";

const ImgWrap = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 20vw;
    margin-bottom: 1.5vh;
  }

  h2 {
    font-size: 60px;
    text-align: center;
    font-weight: 600;
    cursor: default;
    color: ${colors.sideText};
  }

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    h2 {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 20px;
      font-weight: 500;
    }
  }
`;

export const PageNotFound = () => {
  return (
    <>
      <PageTitle titleName="404" />
      <Layout>
        <ImgWrap>
          <img
            src={process.env.PUBLIC_URL + `/img/404.png`}
            alt="404 에러 이미지"
          />
          <h2>요청하신 페이지를 찾을 수 없습니다.</h2>
        </ImgWrap>
      </Layout>
    </>
  );
};
