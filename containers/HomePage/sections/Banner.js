import { memo } from 'react';

const Banner = ({ user }) => {
  return (
    <section>
      <div className="relative">
        <div
          style={{ backgroundImage: `url(${user.cover})`, paddingTop: '30%' }}
          className="bg-no-repeat bg-center bg-cover"
        ></div>
        <div className="absolute -bottom-8 px-3">
          <img src={user.avatar} alt="avatar" />
        </div>
      </div>
      <div className="px-3 mt-11">
        <span className="mt-3 block">{user.name}</span>
        <span className="mt-1 block text-sm">{user.lastLogin}</span>
      </div>
    </section>
  );
};

export default memo(Banner);
