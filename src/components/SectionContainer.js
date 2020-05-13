import React, { useEffect, useState } from 'react';
import SectionCart from './SectionCart';
import { getTag } from '../helpers/Request';
import { getItem } from '../helpers/localStorage';

const getRandomNumber = Math.floor(Math.random() * 6);

const SectionContainer = ({ tag }) => {
  let favoritedVideo = getItem('favorites');
  const isLiked = (id) => {
    const cond = favoritedVideo.filter((favVideo) => favVideo.id === id);
    console.log(cond);
    return cond.length === 0 ? false : true;
  };
  const [videos, videosSet] = useState([]);
  useEffect(() => {
    getTag({ tagname: tag, pagenum: getRandomNumber }).then(({ posts }) => {
      videosSet(posts);
    });
  }, []);
  return (
    <div className='section-container'>
      <span>
        <h3>{tag} ها</h3>
        <a href={`/tag/${tag}`}>بیشتر</a>
      </span>
      {videos.length !== 0 ? (
        <div style={{ display: 'flex' }}>
          <span className='vertical-section-blur'>&nbsp;</span>
          <div className='vertical-section'>
            {videos.map((video, index) => (
              <SectionCart video={video} key={index} liked={isLiked(video.ID)} />
            ))}
          </div>
          <span className='vertical-section-blur'>&nbsp;</span>
        </div>
      ) : (
        <div className='loader red'></div>
      )}
    </div>
  );
};

export default SectionContainer;
