import React, { useEffect, useState } from 'react';
import SectionCard from './SectionCard';
import { getTag } from '../helpers/Request';
import { Link } from 'react-router-dom';

const SectionContainer = ({ tag, pagenumber, header }) => {
  const [videos, videosSet] = useState([]);
  useEffect(() => {
    getTag({ tagname: tag, pagenum: pagenumber }).then(({ posts }) => {
      videosSet(posts);
    });
  }, []);
  return (
    <div className='section-container'>
      <span>
        <h3>{header ? header : `${tag} ها`}</h3>
        <Link to={`/tag/${tag}`}>بیشتر</Link>
      </span>
      {videos.length !== 0 ? (
        <div style={{ display: 'flex' }}>
          <span className='vertical-section-blur'>&nbsp;</span>
          <div className='vertical-section'>
            {videos.map((video, index) => video.dllinks.length !== 0 && <SectionCard video={video} key={index} />)}
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
