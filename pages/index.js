import { getUserProfile } from '@api/index';
import Head from '@components/Head';
import { queryConfig } from '@configs/queryConfig';
import MainLayout from '@layouts/MainLayout';
import dynamic from 'next/dynamic';
import { dehydrate, QueryClient, useQuery } from 'react-query';

const HomePage = dynamic(() => import('@containers/HomePage'), { ssr: false });

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('user', getUserProfile);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default function Home() {
  const { data: userData } = useQuery('user', getUserProfile, queryConfig);

  return (
    <MainLayout>
      <Head title="Profile" />
      <HomePage user={userData} />
    </MainLayout>
  );
}
