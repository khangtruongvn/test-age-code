import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@components/Header'), { ssr: false });

const MainLayout = ({ children }) => {
  return (
    <div className="pb-6 mx-auto max-w-lg">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
