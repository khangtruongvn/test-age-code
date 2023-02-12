import Tabs from '@components/Tabs';
import { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';

const Profile = dynamic(() => import('./Profile'), { ssr: false });
const Rating = dynamic(() => import('./Rating'), { ssr: false });
const Timeline = dynamic(() => import('./Timeline'), { ssr: false });

const tabs = [
  {
    title: 'プロフィール',
    key: '1',
    content: <Profile />,
  },
  {
    title: '感謝の声',
    key: '2',
    content: <Rating />,
  },
  {
    title: 'タイムライン',
    key: '3',
    content: <Timeline />,
  },
];

const Content = () => {
  const [currentTab, setCurrentTab] = useState('1');

  const handleOnChangeTab = useCallback((key) => {
    setCurrentTab(key);
  }, []);

  return (
    <section className="px-3 mt-9">
      <Tabs tabs={tabs} tabActive={currentTab} onChange={handleOnChangeTab} />
    </section>
  );
};

export default Content;
