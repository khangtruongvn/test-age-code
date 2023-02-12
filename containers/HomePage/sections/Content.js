import { getProfile, getRating, getTimeline } from '@api/index';
import Tabs from '@components/Tabs';
import { queryConfig } from '@configs/queryConfig';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';

const Profile = dynamic(() => import('./Profile'), { ssr: false });
const Rating = dynamic(() => import('./Rating'), { ssr: false });
const Timeline = dynamic(() => import('./Timeline'), { ssr: false });

const INIT_VALUES = {
  profile: {
    audio: [],
    links: [],
    video: {},
  },
  rating: {
    rating: [],
  },
  timeline: {
    timeline: [],
  },
};

const TAB_KEYS = {
  profile: 'profile',
  rating: 'rating',
  timeline: 'timeline',
};

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

const Content = () => {
  const [currentTab, setCurrentTab] = useState(TAB_KEYS.profile);
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
    <section className="px-3 mt-10">
      <Tabs tabs={tabs} tabActive={currentTab} onChange={handleOnChangeTab} />
    </section>
  );
};

export default Content;
