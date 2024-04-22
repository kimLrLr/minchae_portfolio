import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import styled from "styled-components";
import { frontCon } from "../../data/frontCon";
import youtubeImg from "../../assets/youtubeImg.png";
import { colors } from "../../style/GlobalStyled";
import { etcCon } from "../../data/etcCon";

const MainWrap = styled.div``;

const Con = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40vh;
  max-width: 100vw;
  margin-bottom: 5vh;
  /* background-color: salmon; */

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 250px;
  }
`;

const Bg = styled.div`
  width: 680px;
  height: 350px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    font-size: 15px;
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

const YoutubeIcon = styled.div`
  img {
    width: 30px;
  }
`;

export const EtcPF = () => {
  return (
    <>
      <PageTitle titleName="Etc" />
      <Layout>
        <MainWrap>
          {/* 콘텐츠 시작 */}
          {etcCon.map((data) => (
            <Con key={data.id}>
              <Bg>
                <img
                  src={process.env.PUBLIC_URL + `/img/etc/${data.img}`}
                  alt={data.imgTitle}
                />
              </Bg>
              <ConWrap>
                <TextWrap>
                  <ConTitle>{data.title}</ConTitle>
                  <ConDesc>{data.desc}</ConDesc>
                </TextWrap>
                <IconWrap>
                  <YoutubeIcon>
                    <a
                      href={data.youtube}
                      title="유튜브로 이동"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={youtubeImg} alt={data.gitTitle} />
                    </a>
                  </YoutubeIcon>
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
