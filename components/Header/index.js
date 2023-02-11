import { memo } from 'react';

const Header = () => {
  return (
    <header className="pt-3 pb-5 flex">
      <span className="mx-auto text-base">カウンセラー</span>
    </header>
  );
};

export default memo(Header);
