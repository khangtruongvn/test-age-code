import Tabs from '@components/Tabs';

const Content = ({ tabs, currentTab, handleOnChangeTab }) => {
  return (
    <section className="px-3 mt-10">
      <Tabs tabs={tabs} tabActive={currentTab} onChange={handleOnChangeTab} />
    </section>
  );
};

export default Content;
