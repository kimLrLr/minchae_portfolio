import { Layout } from "../../components/Layout";
import { PageTitle } from "../../components/PageTitle";
import styled from "styled-components";
import gitImg from "../../assets/gitImg.png";
import youtubeImg from "../../assets/youtubeImg.png";
import pdfImg from "../../assets/pdfImg.png";
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 250px;
  }
`;

const Bg = styled.div`
  width: 680px;
  height: 350px;
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
    height: 300px;
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
  p {
    font-size: 15px;
    font-weight: 400;
    color: #ff00009c;
    margin-top: 20px;
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    width: 65%;
    font-size: 14px;
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 15px;
    p {
      font-size: 13px;
    }
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
    justify-content: center;
  }
`;

const GitIcon = styled.div`
  display: ${(props) => props.imgStyle};
  /* 각 프로젝트 별로 올린 플랫폼이 다르기 때문에 props를 이용하여 display로 처리 */
  img {
    width: 30px;
  }

  @media screen and (max-width: 768px) {
    margin: 0 10px;
  }
`;

const YoutubeIcon = styled.div`
  display: ${(props) => props.imgStyle};
  img {
    width: 30px;
  }

  @media screen and (max-width: 768px) {
    margin: 0 10px;
  }
`;

const PdfIcon = styled.div`
  display: ${(props) => props.imgStyle};

  img {
    width: 30px;
  }

  @media screen and (max-width: 768px) {
    margin: 0 10px;
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
                  <ConDesc>
                    {data.desc}
                    <br />
                    <p>{data.pTag}</p>
                  </ConDesc>
                </TextWrap>
                <IconWrap>
                  <GitIcon imgStyle={data.gitIcon}>
                    <a
                      href={data.gitLinkText}
                      title="GitHub로 이동"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={gitImg} alt="GitHub" />
                    </a>
                  </GitIcon>
                  <YoutubeIcon imgStyle={data.youtubeIcon}>
                    <a
                      href={data.linkText}
                      title="YouTube로 이동"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={youtubeImg} alt="유튜브" />
                    </a>
                  </YoutubeIcon>
                  <PdfIcon imgStyle={data.pdfIcon}>
                    <a
                      href={data.linkText}
                      title="PDF 열기"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img src={pdfImg} alt="PDF" />
                    </a>
                  </PdfIcon>
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
