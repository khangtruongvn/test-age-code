import Head from '@components/Head';
import MainLayout from '@layouts/MainLayout';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@containers/HomePage'), { ssr: false });

export default function Home() {
  return (
    <MainLayout>
      <Head title="Profile" />
      <HomePage />
    </MainLayout>
  );
}
