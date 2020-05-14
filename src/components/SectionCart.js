import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Hearth, UnHearth } from '../helpers/svgs';
import { appendItem, isExist, removeItem } from '../helpers/localStorage';
const SectionCart = ({ video }) => {
  video = {
    name: video.faname.value,
    image: video.coverimg,
    id: video.ID,
    content: video.storyplot.value,
    links: video.dllinks || false,
    art: video.backdrop_img,
    tags: video.tags.value.split('|'),
  };
  const [Islike, likedSet] = useState(isExist('favorites', video.id));
  const like = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (!isExist('favorites', video.id)) {
      appendItem('favorites', video);
    } else {
      removeItem('favorites', video);
    }
    likedSet((isVideoliked) => !isVideoliked);
  };
  const link = { pathname: `/video/${video.name}`, state: video };
  return (
    <>
      <NavLink className='vertical-section-cart' to={link}  >
        <span>
          <img src={video.image} />
          <div onClick={like}>{Islike ? <Hearth /> : <UnHearth />}</div>
        </span>

        <p>{video.name}</p>
      </NavLink>
    </>
  );
};

export default SectionCart;
