import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import styled from "styled-components";
import { frontCon } from "../../data/frontCon";
import gitImg from "../../assets/gitImg.png";
import symImg from "../../assets/symImg.png";

const MainWrap = styled.div`
  background-color: gold;
`;

const Con = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40vh;
`;

const Bg = styled.div`
  img {
    width: 500px;
  }
`;

const ConWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2vw;
  background-color: salmon;
`;

const ConTitle = styled.div`
  font-weight: 900;
  font-size: 28px;
  margin-bottom: 4vh;
  width: 10vw;
`;

const ConDesc = styled.div`
  width: 50vw;
`;

const IconWrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 4vh;
  margin-left: 4vw;
  background-color: teal;
`;

const GitIcon = styled.div`
  img {
    width: 35px;
  }
`;

const LinkIcon = styled.div`
  img {
    width: 35px;
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
                  src={process.env.PUBLIC_URL + `/img/${data.img}.png`}
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
                      title={data.gitTitle}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={gitImg} alt={data.gitTitle} />
                    </a>
                  </GitIcon>
                  <LinkIcon>
                    <a
                      href={data.dep}
                      title={data.depTitle}
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
        </MainWrap>
      </Layout>
    </>
  );
};
