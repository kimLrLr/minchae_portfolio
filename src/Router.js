import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FrontPF } from "./pages/frontPF/FrontPF";
import { EtcPF } from "./pages/etcPF/EtcPF";
import { PageNotFound } from "./pages/pageNotFound/PageNotFound";
import { StyleSheetManager } from "styled-components";

const Router = () => {
  return (
    <HashRouter>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "imgStyle"}>
        <Header />
        <Routes>
          <Route path="/" element={<FrontPF />} />
          <Route path="/etc" element={<EtcPF />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </StyleSheetManager>
    </HashRouter>
  );
};

export default Router;
