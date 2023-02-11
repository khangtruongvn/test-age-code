import { memo } from 'react';

const Banner = () => {
  return (
    <>
      <div className="relative">
        <div
          style={{ backgroundImage: "url('/images/banner.png')", paddingTop: '30%' }}
          className="bg-no-repeat bg-center bg-cover"
        ></div>
        <div className="absolute -bottom-8 px-3">
          <img src="/images/avatar.png" alt="avatar" />
        </div>
      </div>
      <div className="px-3 mt-11">
        <span className="mt-3 block">梅村 さおり</span>
        <span className="mt-1 block text-sm">最終ログイン：55分前</span>
      </div>
    </>
  );
};

export default memo(Banner);
