import React from "react";
import { Helmet } from "react-helmet";

const ReactHelmet = () => {
  return (
    <Helmet>
      <title>Skill Tree</title>
      <meta name='description' content='Study & Project Matching Community!' />
      <meta property='og:title' content='Skill Tree' />
      <meta property='og:site_name' content='Skill Tree' />
      <meta
        property='og:ddescription'
        content='Study & Project Matching Community!'
      />
      <meta name='twitter:title' content='Skill Tree' />
      <meta
        name='twitter:description'
        content='Study & Project Matching Community!'
      />
      <meta name='twitter:card' content='Study & Project Matching Community!' />
    </Helmet>
  );
};

export default ReactHelmet;
