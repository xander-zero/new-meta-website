import Head from "next/head";

const HeadTitle = ({ title, content, lng }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={content} key={title} />
      <meta property="og:url" content="http://www.yourwonderfulsite.com" />
      <link rel="alternate" href="http://example.com" hrefLang={lng} />
    </Head>
  );
};
export default HeadTitle;
