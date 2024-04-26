import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import styled from "styled-components";
import { frontCon } from "../../data/frontCon";
import gitImg from "../../assets/gitImg.png";
import symImg from "../../assets/symImg.png";
import { colors } from "../../style/GlobalStyled";
import { TopButton } from "../../components/TopButton";

const MainWrap = styled.div``;

const Con = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 100vw;
  margin-bottom: 15vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 8vh;
  }
`;

const Bg = styled.div`
  img {
    width: 500px;
  }

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    img {
      width: 450px;
    }
  }

  @media screen and (max-width: 768px) {
    img {
      width: 80vw;
    }
  }
`;

const ConWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-left: 2vw;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

const ConTitle = styled.div`
  font-weight: 900;
  font-size: 28px;
  margin-bottom: 4vh;
  width: 50vw;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    text-align: center;
    width: 80vw;
    font-size: 20px;
  }
`;

const ConDesc = styled.div`
  width: 80%;
  line-height: 22px;
  font-weight: 500;
  color: ${colors.sideText};
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    width: 65%;
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 80px;
  margin-top: 2.5vh;
  @media screen and (max-width: 768px) {
    margin: 30px auto;
  }
`;

const GitIcon = styled.div`
  img {
    width: 30px;
  }
`;

const LinkIcon = styled.div`
  img {
    width: 30px;
  }
`;

export const FrontPF = () => {
  return (
    <>
      <PageTitle titleName="Front" />
      <Layout>
        <MainWrap>
          {/* 콘텐츠 시작 */}
          {frontCon.map((data) => (
            <Con key={data.id}>
              <Bg>
                <img
                  src={process.env.PUBLIC_URL + `/img/front/${data.img}.png`}
                  alt={data.imgTitle}
                />
              </Bg>
              <ConWrap>
                <TextWrap>
                  <ConTitle>{data.title}</ConTitle>
                  <ConDesc>{data.desc}</ConDesc>
                </TextWrap>
                <IconWrap>
                  <GitIcon>
                    <a
                      href={data.git}
                      title="GitHub로 이동"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={gitImg} alt={data.gitTitle} />
                    </a>
                  </GitIcon>
                  <LinkIcon>
                    <a
                      href={data.dep}
                      title="배포 사이트로 이동"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={symImg} alt={data.depTitle} />
                    </a>
                  </LinkIcon>
                </IconWrap>
              </ConWrap>
            </Con>
          ))}
          {/* 콘텐츠 끝 */}
          <TopButton />
        </MainWrap>
      </Layout>
    </>
  );
};
