import React, { useEffect, useState } from 'react';
import VideoCart from '../components/VideoCart';
import { withRouter } from 'react-router-dom';
import { getindex } from '../helpers/Request';
import Axios from 'axios';

import Layout from '../components/Layout';

const getRandomNumber = () => Math.floor(Math.random() * 10);

const Movies = ({ videos, index }) => {
  const [loading, loadingSet] = useState(false);
  const [max, maxSet] = useState(5);
  let steps = 0;
  useEffect(() => {
    window.addEventListener('scroll', onScroll, false);
    console.log('re-render');
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);
  const onScroll = (e) => ReachEnd(e) && FetchNewData();
  const ReachEnd = (e) =>
    document.body.scrollHeight - document.documentElement.scrollTop <= e.target.scrollingElement.clientHeight && !loading && steps < max;

  const FetchNewData = async () => {
    loadingSet(true);
    const newVideo = await getindex(++index);
    steps++;
    if (newVideo.length > 0) videos.push(...newVideo);
    loadingSet(false);
  };

  const Video = () => {
    if (videos && !videos.status) {
      return videos.map((video, key) => <VideoCart video={video} key={key} />);
    } else {
      return <h2>ارتباط برقرار نشد</h2>;
    }
  };
  return (
    <>
      <Layout>
        <div className='desktop-container'>
          <div className='container'>
            <Video />
            {loading && <div className='loader'></div>}
          </div>
        </div>
      </Layout>
    </>
  );
};
Movies.getInitialProps = async () => {
  const index = getRandomNumber();
  return { index, videos: await getindex(index) };
};
export default withRouter(Movies);
