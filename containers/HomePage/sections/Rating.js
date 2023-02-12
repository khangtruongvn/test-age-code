import { memo } from 'react';

const Rating = ({ data }) => {
  const { rating } = data;

  return (
    <article>
      <div className="flex flex-col space-y-6">
        {rating.map((rate, index) => (
          <div key={index}>
            <div className="flex justify-between items-center">
              <div className="space-x-2 ">
                <span className="text-xs font-bold text-black">{rate.name}</span>
                <span className="space-x-1">
                  {new Array(5).fill([]).map((a, index) => (
                    <i
                      key={index}
                      className={`fa-solid fa-star text-xs ${
                        index + 1 <= rate.rate ? 'text-yellow' : 'text-grey-2'
                      }`}
                    />
                  ))}
                </span>
              </div>
              <span className="text-xs text-grey">{rate.time}</span>
            </div>
            <p className="text-xs mt-2 text-black">{rate.content}</p>
          </div>
        ))}
      </div>
    </article>
  );
};

export default memo(Rating);
