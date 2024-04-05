import { Helmet, HelmetProvider } from "react-helmet-async";

export const PageTitle = ({ titleName }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Portfolio | {titleName} </title>
      </Helmet>
    </HelmetProvider>
  );
};
