import React from 'react';
import { Link } from 'react-router-dom';

const VideoCart = ({ video }) => {
  const currentVideo = {
    name: video.postname.split('-')[0].trim() || video.postname,
    image: video.coverimg,
    id: video.ID,
    content: video.storyplot.value,
    links: video.dllinks || false,
    art: video.backdrop_img,
  };
  const addToFavorites = (e) => {
    //TODO:Add to Favorites
    e.stopPropagation();
    e.preventDefault();
    alert('انشالله اد میکنم');
  };
  const CartContent = () => (
    <>
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
          <p className='icon unfav' onClick={addToFavorites}>&#10084;</p>
        </div>
      </div>
    </>
  );

  if (currentVideo.links.length < 1) {
    return (
      <a className={`movie-cart cart-disabled`} href={`http://www.minitoons.ir/p/${currentVideo.id}`}>
        <CartContent />
        {currentVideo.links.length < 1 && (
          <div className='overlay'>
            <h1>فیلم فقط در مینی تونز</h1>
          </div>
        )}
      </a>
    );
  } else
    return (
      <Link className={`movie-cart `} to={{ pathname: `/video/${currentVideo.id}`, state: currentVideo }}>
        <CartContent />
      </Link>
    );
};

export default VideoCart;
