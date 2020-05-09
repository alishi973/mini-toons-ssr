import React, { useEffect } from 'react';
import VideoCart from '../components/VideoCart';
import { getindex } from '../helpers/Request';
import Layout from '../components/Layout';

const Movies = ({ videos }) => {
  useEffect(() => {}, [videos]);
  return (
    <Layout>
      <div className='container'>
        {videos.map((video, key) => (
          <VideoCart video={video} key={key} />
        ))}
      </div>
    </Layout>
  );
};
Movies.getInitialProps = async () => ({ videos: await getindex() });

export default Movies;
