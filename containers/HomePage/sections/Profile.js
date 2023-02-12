import { getProfile } from '@api/index';
import { memo, useMemo } from 'react';
import { useQuery } from 'react-query';
import { queryConfig } from '@configs/queryConfig';

const INIT_VALUES = {
  audio: [],
  links: [],
  links2: [],
  video: {},
};

const Profile = () => {
  const { data } = useQuery('profile', getProfile, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    initialData: INIT_VALUES,
  });
  const { audio, links, video } = data;

  const convertLink = useMemo(() => {
    if (!links.length) return [];
    let cols = new Array(Math.ceil(links.length / 2)).fill([]);
    links.forEach((item, index) => {
      let colIndex = Math.floor(index / 2);
      cols[colIndex] = [...cols[colIndex], item];
    });
    return cols;
  }, [links]);

  return (
    <>
      {/* AUDIO BLOCK */}
      <article>
        <span className="text-xl font-bold block">オーディオ</span>
        <div className="mt-5 flex flex-col space-y-5">
          {audio.map((audio, index) => (
            <div
              key={index}
              className="flex flex-row space-x-4 rounded-lg overflow-hidden"
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
      </article>
      {/* VIDEO BLOCK */}
      <article>
        <span className="block text-xl font-bold my-5">ビデオ</span>
        <div
          className="rounded-lg overflow-hidden relative w-full"
          style={{ paddingTop: '56.25%' }} //16:9 Aspect Ratio (divide 9 by 16 = 0.5625)
        >
          <iframe
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full"
            src={video.url}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </article>
      {/* CUSTOM LINK BLOCK */}
      {links.length > 2 ? (
        <article>
          <span className="block text-xl font-bold my-5">More than 2 Links</span>
          <div className="mt-5 pb-2 flex flex-nowrap space-x-5 scrollbar-custom w-full overflow-x-scroll">
            {convertLink.map((links, index) => (
              <div key={index} className="flex flex-col space-y-5">
                {links.map((link, index) => (
                  <div
                    key={index}
                    className="flex flex-row space-x-4 rounded-lg overflow-hidden"
                    style={{ backgroundColor: '#F2F4F7', width: 275 }}
                  >
                    <img src={link.thumbnail} alt={link.title} />
                    <div className="flex flex-col justify-center">
                      <span className="block text-sm font-medium">{link.title}</span>
                      <span className="text-xs">{link.subTitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </article>
      ) : (
        <article>
          <span className="block text-xl font-bold my-5">Up to 2 Links</span>
          <div className="mt-5 flex flex-col space-y-5">
            {links.map((link, index) => (
              <div
                key={index}
                className="flex flex-row space-x-4 rounded-lg overflow-hidden"
                style={{ backgroundColor: '#F2F4F7' }}
              >
                <img src={link.thumbnail} alt={link.title} />
                <div className="flex flex-col justify-center">
                  <span className="block text-sm font-medium">{link.title}</span>
                  <span className="text-xs">{link.subTitle}</span>
                </div>
              </div>
            ))}
          </div>
        </article>
      )}
    </>
  );
};

export default memo(Profile);
