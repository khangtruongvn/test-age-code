import { getProfile, getRating, getTimeline, getUserProfile } from '@api/index';
import { INIT_VALUES, TAB_KEYS } from '@configs/home';
import { queryConfig } from '@configs/queryConfig';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';

const Banner = dynamic(() => import('./sections/Banner'), { ssr: false });
const Content = dynamic(() => import('./sections/Content'), { ssr: false });
const Profile = dynamic(() => import('./sections/Profile'), { ssr: false });
const Rating = dynamic(() => import('./sections/Rating'), { ssr: false });
const Timeline = dynamic(() => import('./sections/Timeline'), { ssr: false });

const fetchData = (key) => {
  switch (key.queryKey[0]) {
    case TAB_KEYS.profile:
      return getProfile();
    case TAB_KEYS.rating:
      return getRating();
    case TAB_KEYS.timeline:
      return getTimeline();
  }
};

const HomePage = () => {
  const [currentTab, setCurrentTab] = useState(TAB_KEYS.profile);
  const { data: userData } = useQuery('user', getUserProfile, queryConfig);
  const { data = INIT_VALUES[currentTab] } = useQuery(currentTab, fetchData, queryConfig);

  const handleOnChangeTab = useCallback((key) => {
    setCurrentTab(key);
  }, []);

  const tabs = [
    {
      title: 'プロフィール',
      key: TAB_KEYS.profile,
      content: <Profile data={data} />,
    },
    {
      title: '感謝の声',
      key: TAB_KEYS.rating,
      content: <Rating data={data} />,
    },
    {
      title: 'タイムライン',
      key: TAB_KEYS.timeline,
      content: <Timeline data={data} />,
    },
  ];

  return (
    <>
      <Banner user={userData} />
      <Content tabs={tabs} currentTab={currentTab} handleOnChangeTab={handleOnChangeTab} />
    </>
  );
};

export default HomePage;
