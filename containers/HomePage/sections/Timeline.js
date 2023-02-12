import { getTimeline } from '@api/index';
import { queryConfig } from '@configs/queryConfig';
import { memo } from 'react';
import { useQuery } from 'react-query';

const INIT_VALUES = {
  timeline: [],
};

const Timeline = () => {
  const { data } = useQuery({
    queryKey: 'timeline',
    queryFn: getTimeline,
    initialData: INIT_VALUES,
    ...queryConfig,
  });
  const { timeline } = data;

  return (
    <article>
      <div className="flex flex-col space-y-6">
        {timeline.map((item, index) => (
          <div key={index}>
            <div className="flex space-x-2">
              <img src={item.avatar} alt={item.name} style={{ width: 38, height: 38 }} />
              <div>
                <p className="text-xs font-bold">{item.name}</p>
                <p className="text-xs" style={{ color: '#99908D' }}>
                  {item.time}
                </p>
              </div>
            </div>
            <p className="mt-2 text-xs">{item.content}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default memo(Timeline);
