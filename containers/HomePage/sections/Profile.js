import { memo } from 'react';

import { AUDIO_LIST } from '@mockup/index';

const Profile = () => {
  return (
    <>
      {/* AUDIO BLOCK */}
      <section>
        <span className="text-xl font-bold block">オーディオ</span>
        <div className="mt-5 flex flex-col space-y-5">
          {AUDIO_LIST.map((audio) => (
            <div
              className="flex flex-row space-x-4 rounded-lg"
              style={{ backgroundColor: '#F2F4F7' }}
            >
              <img src={audio.thumbnail} alt={audio.title} className="w-22 h-22" />
              <div className="pt-2 pb-1 flex flex-col">
                <span className="block text-sm font-medium">{audio.title}</span>
                <span className="block text-xs" style={{ color: '#667085' }}>
                  {audio.subTitle}
                </span>
                <button className="mt-auto text-xs font-medium px-8 py-1 border rounded-full border-black">
                  Streaming options
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* VIDEO BLOCK */}
      <section>
        <span className="block text-xl font-bold my-5">ビデオ</span>
        <div className="container-iframe">
          <iframe
            className="responsive-iframe"
            src="https://www.youtube.com/embed/H5v3kku4y6Q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      {/* CUSTOM LINK BLOCK */}
      <section className="mb-20">
        <span className="block text-xl font-bold my-5">Up to 2 Links</span>
        <div className=""></div>
      </section>
    </>
  );
};

export default memo(Profile);
