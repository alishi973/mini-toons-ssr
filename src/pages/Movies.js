import React, { useEffect, useState } from 'react';
import VideoCart from '../components/VideoCart';
import { withRouter } from 'react-router-dom';
import { getindex } from '../helpers/Request';

import Layout from '../components/Layout';

const getRandomNumber = Math.floor(Math.random() * 296);
let index = getRandomNumber;
const Movies = () => {
  const [videos, videosSet] = useState(false);
  const [loading, loadingSet] = useState(false);
  const [steps, stepsSet] = useState(0);
  const [max, maxSet] = useState(5);

  useEffect(() => {
    loadingSet(true);
    getindex(index).then((videos) => {
      videosSet(videos);
      loadingSet(false);
    });
    /* window.addEventListener('scroll', onScroll, false);
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    }; */
  }, []);
  const onScroll = (e) => ReachEnd(e) && !loading && FetchNewData();
  const ReachEnd = (e) => document.body.scrollHeight - document.documentElement.scrollTop < e.target.scrollingElement.clientHeight && steps <= max;

  const FetchNewData = async () => {
    loadingSet(true);
    console.log(steps, max);
    index++;
    const newVideo = await getindex(index);
    stepsSet((lastStep) => lastStep + 1);
    // steps += 1;
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
        <div className='container'>
          <Video />
          {loading && <div className='loader'></div>}
          {videos.length > 4 && !loading && <div onClick={FetchNewData}>صفحه بعدی؟</div>}
        </div>
      </Layout>
    </>
  );
};

export default withRouter(Movies);
