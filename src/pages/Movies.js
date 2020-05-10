import React, { useEffect, useState } from 'react';
import VideoCart from '../components/VideoCart';
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
    return () => {
      window.removeEventListener('scroll', onScroll, false);
    };
  }, []);
  const onScroll = (e) => ReachEnd(e) && FetchNewData();
  const ReachEnd = (e) =>
    document.body.scrollHeight - document.documentElement.scrollTop <= e.target.scrollingElement.clientHeight && !loading && steps < max;

  const FetchNewData = async () => {
    loadingSet(true);
    const newVideo = await Axios.get(`videos/${++index}`);
    steps++;
    videos.push(...newVideo.data);
    loadingSet(false);
  };

  return (
    <Layout>
      <div className='desktop-container'>
        <div className='container'>
          {videos.map((video, key) => <VideoCart video={video} key={key} />) || <h3>404 هیچ ویدیویی پیدا نشد</h3>}
          {loading && <div className='loader'></div>}
        </div>
      </div>
    </Layout>
  );
};
Movies.getInitialProps = async () => {
  const index = getRandomNumber();
  return { index, videos: await getindex(index) };
};

export default Movies;
