import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import styled from "styled-components";
import { frontCon } from "../../data/frontCon";
import gitImg from "../../assets/gitImg.png";
import symImg from "../../assets/symImg.png";

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
          {frontCon.map((data) => (
            <Con key={data.id}>
              <Bg>
                <img
                  src={process.env.PUBLIC_URL + `/img/${data.img}.png`}
                  alt={data.imgTitle}
                />
              </Bg>
              <ConTitle>{data.title}</ConTitle>
              <ConDesc>{data.desc}</ConDesc>
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
            </Con>
          ))}
          {/* 콘텐츠 끝 */}
        </MainWrap>
      </Layout>
    </>
  );
};
