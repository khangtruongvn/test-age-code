const Tabs = ({ tabs, tabActive, onChange }) => {
  return (
    <div>
      <ul className="grid grid-cols-3 rounded-full p-0.5 bg-grey-2">
        {tabs?.map((tab) => (
          <li
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`rounded-full flex justify-center cursor-pointer ${
              tab.key == tabActive ? 'bg-white' : ''
            } `}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="container mt-4">
        {tabs.map((tab) => tab.key == tabActive && <div key={tab.key}>{tab.content}</div>)}
      </div>
    </div>
  );
};

export default Tabs;
