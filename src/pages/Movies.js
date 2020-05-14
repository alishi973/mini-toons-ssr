import React, { useEffect, useState } from 'react';
import VideoCart from '../components/VideoCart';
import { getindex } from '../helpers/Request';
import tags from '../tags';

import SectionContainer from '../components/SectionContainer';

import Layout from '../components/Layout';

const getRandomNumber = (maxNum) => Math.floor(Math.random() * maxNum);
let index = getRandomNumber(296);
const Movies = ({ tag, tagNumber }) => {
  const [videos, videosSet] = useState(false);
  const [loading, loadingSet] = useState(false);
  // const [steps, stepsSet] = useState(0);
  // const [max, maxSet] = useState(5);
  useEffect(() => {
    loadingSet(true);
    document.title = 'خانه';
    getindex(index).then((videos) => {
      videosSet(videos);
      loadingSet(false);
    });
  }, []);

  const FetchNewData = async () => {
    loadingSet(true);
    index++;
    const newVideo = await getindex(index);
    // stepsSet((lastStep) => lastStep + 1);
    if (newVideo.length > 0) videosSet((lastVideo) => [...lastVideo, ...newVideo]);
    else {
      alert('error');
    }
    loadingSet(false);
  };

  const Video = () => {
    if (videos && videos.length > 0) {
      return videos.map((video, key) => <VideoCart video={video} key={key} />);
    } else {
      // TODO: Add Skeleton
      return <></>;
    }
  };

  return (
    <>
      <Layout>
        <SectionContainer tag={tag} pagenumber={tagNumber} />
        <div style={{ marginTop: '50px' }} className='card-container'>
          <Video />
          {videos.length != 0 && !loading && (
            <div onClick={FetchNewData} style={{ placeSelf: 'center', margin: '0 auto' }}>
              &darr;
            </div>
          )}
          {loading && <div style={{ marginTop: '20px' }} className='loader'></div>}
        </div>
      </Layout>
    </>
  );
};
Movies.getInitialProps = () => {
  return { tag: tags(), tagNumber: getRandomNumber(1) };
};

export default Movies;
