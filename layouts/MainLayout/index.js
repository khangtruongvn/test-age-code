import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@components/Header'), { ssr: false });

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="hidden md:flex">
        <span className="mx-auto">The display not support for device</span>
      </div>
      <div className="container sm:block md:hidden pb-6">
        <Header />
        {children}
      </div>
    </>
  );
};

export default MainLayout;
