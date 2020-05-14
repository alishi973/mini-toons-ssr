import React, { useEffect, useState } from 'react';
import SectionCart from './SectionCart';
import { getTag } from '../helpers/Request';

const SectionContainer = ({ tag, pagenumber }) => {
  const [videos, videosSet] = useState([]);
  useEffect(() => {
    getTag({ tagname: tag, pagenum: pagenumber }).then(({ posts }) => {
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
              <SectionCart video={video} key={index} />
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
