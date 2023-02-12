import NextHead from 'next/head';

const Head = ({ title }) => {
  return (
    <NextHead>
      <title>{title || 'Test AgeCode'}</title>
    </NextHead>
  );
};

export default Head;
