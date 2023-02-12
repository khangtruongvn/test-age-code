import { memo } from 'react';

const Timeline = ({ data }) => {
  const { timeline } = data;

  return (
    <article>
      <div className="flex flex-col space-y-6">
        {timeline.map((item, index) => (
          <div key={index}>
            <div className="flex space-x-2">
              <img src={item.avatar} alt={item.name} style={{ width: 38, height: 38 }} />
              <div>
                <p className="text-xs font-bold text-black">{item.name}</p>
                <p className="text-xs text-grey">{item.time}</p>
              </div>
            </div>
            <p className="mt-2 text-xs text-black">{item.content}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default memo(Timeline);
