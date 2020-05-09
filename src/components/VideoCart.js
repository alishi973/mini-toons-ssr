import React from 'react';
import { Link } from 'react-router-dom';

const VideoCart = ({ video }) => {
  const name = video.postname.split('-')[0].trim() || video.postname;
  const image = video.coverimg;
  //   const content = video.storyplot.value.slice(0, 100) + '...';
  const content = video.storyplot.value;
  return (
    <Link to="/" >
      <div className='movie-cart'>
        <div className='movie-cart-image'>
          <img src={image} />
        </div>

        <div className='movie-cart-left'>
          <div className='movie-cart-info'>
            <div className='movie-cart-title'>
              <h3>{name}</h3>
            </div>

            <div className='movie-cart-content'>
              <p>{content}</p>
            </div>
          </div>
          <div className='movie-cart-footer'>
            <p>kjagshjd</p>
            <p>kjagshjd</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCart;
