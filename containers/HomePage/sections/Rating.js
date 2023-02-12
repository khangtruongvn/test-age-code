import { getRating } from '@api/index';
import { queryConfig } from '@configs/queryConfig';
import { memo } from 'react';
import { useQuery } from 'react-query';

const INIT_VALUES = {
  rating: [],
};

const Rating = () => {
  const { data } = useQuery({
    queryKey: 'rating',
    queryFn: getRating,
    initialData: INIT_VALUES,
    ...queryConfig,
  });
  const { rating } = data;

  return (
    <article>
      <div className="flex flex-col space-y-6">
        {rating.map((rate, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <div className="space-x-2 ">
                <span className="text-xs font-bold">{rate.name}</span>
                <span className="space-x-1">
                  {new Array(5).fill([]).map((a, index) => (
                    <i
                      key={index}
                      className="fa-solid fa-star text-xs"
                      style={{ color: index + 1 <= rate.rate ? '#FFD300' : '#EBE9E9' }}
                    />
                  ))}
                </span>
              </div>
              <span className="text-xs" style={{ color: '#99908D' }}>
                {rate.time}
              </span>
            </div>
            <p className="text-xs mt-2">{rate.content}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default memo(Rating);
