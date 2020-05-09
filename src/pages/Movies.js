import React from 'react';
import VideoCart from '../components/VideoCart';
import { getindex } from '../helpers/Request';

import Layout from '../components/Layout';

const Movies = ({ videos }) => {
  return (
    <Layout>
      <div className='container'>{videos.map((video, key) => <VideoCart video={video} key={key} />) || <h3>404 هیچ ویدیویی پیدا نشد</h3>}</div>
    </Layout>
  );
};
Movies.getInitialProps = async () => ({ videos: await getindex() });

export default Movies;
