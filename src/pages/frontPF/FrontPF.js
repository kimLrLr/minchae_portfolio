import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import styled from "styled-components";
import movieImg from "../../assets/movieImg.png";

const MainWrap = styled.div``;

const Con = styled.div``;

const Bg = styled.div`
  background-image: url();
`;

const ConTitle = styled.div``;

const ConDesc = styled.div``;

const IconWrap = styled.div``;

const GitIcon = styled.div``;

const LinkIcon = styled.div``;

export const FrontPF = () => {
  return (
    <>
      <PageTitle titleName="Front" />
      <Layout>
        <MainWrap>
          {/* 콘텐츠 시작 */}
          <Con>
            <Bg>
              <img src={movieImg} alt="영화이미지" />
            </Bg>
            <ConTitle>프로젝트 이름1</ConTitle>
            <ConDesc>
              프로젝트 내용이 적히는 부분입니다.
              <br /> 실제로는 박스 배경 색 없이 진행
            </ConDesc>
            <IconWrap>
              <GitIcon />
              <LinkIcon />
            </IconWrap>
          </Con>
          {/* 콘텐츠 끝 */}
        </MainWrap>
      </Layout>
    </>
  );
};
