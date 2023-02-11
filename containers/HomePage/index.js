import dynamic from 'next/dynamic';

const Banner = dynamic(() => import('./sections/Banner'), { ssr: false });
const Content = dynamic(() => import('./sections/Content'), { ssr: false });

const HomePage = () => {
  return (
    <>
      <Banner />
      <Content />
    </>
  );
};

export default HomePage;
