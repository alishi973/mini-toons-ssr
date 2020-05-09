import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const VideoCart = ({ video }) => {
  const currentVideo = {
    name: video.postname.split('-')[0].trim() || video.postname,
    image: video.coverimg,
    id: video.ID,
    content: video.storyplot.value,
    links: video.dllinks,
    art: video.backdrop_img,
  };

  //   const content = video.storyplot.value.slice(0, 100) + '...';
  return (
    <div className='movie-cart'>
      <div className='movie-cart-image'>
        <img src={currentVideo.image} />
      </div>
      <div className='movie-cart-left'>
        <div className='movie-cart-info'>
          <div className='movie-cart-title'>
            <h3>{currentVideo.name}</h3>
          </div>

          <div className='movie-cart-content'>
            <p>{currentVideo.content}</p>
          </div>
        </div>
        <div className='movie-cart-footer'>
          <Link to={{ pathname: '/show', state: currentVideo }}>جزئیات پخش</Link>
          <p className='icon unfav'>&#10084;</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCart;
