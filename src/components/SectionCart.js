import React from 'react';
import { Link } from 'react-router-dom';
import { Hearth, UnHearth } from '../helpers/svgs';
import { setItem } from '../helpers/localStorage';
const SectionCart = ({ video, liked }) => {
  video = {
    name: video.faname.value,
    image: video.coverimg,
    id: video.ID,
    content: video.storyplot.value,
    links: video.dllinks || false,
    art: video.backdrop_img,
    tags: video.tags.value.split('|'),
  };
  const like = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setItem('favorites', video);
  };
  const link = { pathname: `/video/${video.name}`, state: video };
  return (
    <>
      <Link className='vertical-section-cart' to={link}>
        <span>
          <img src={video.image} />
          <div onClick={like}>{liked ? <Hearth /> : <UnHearth />}</div>
        </span>

        <p>{video.name}</p>
      </Link>
    </>
  );
};

export default SectionCart;
