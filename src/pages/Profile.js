import React from 'react';
import Layout from '../components/Layout';
import VideoCard from '../components/VideoCard';
import { getItem } from '../helpers/localStorage';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  const imageSrc = 'https://lh3.googleusercontent.com/-7fMzrATHVVI/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnMzrS3w3qv8PdhVoQL_JLZGinmPQ/photo.jpg?sz=100';
  const noImageSrc = 'https://teamapp.app/static/avatars/m/3.png';
  const videos = typeof window == 'object' && [...getItem('favorites')];
  typeof window == 'object' && (document.title = 'پروفایل');
  const Video = () => {
    if (videos.length > 0) {
      return videos.map((video, key) => {
        video = JSON.parse(video);
        return <VideoCard video={video} key={key} />;
      });
    } else {
      return <div>هیچ ویدیویی موجود نیست</div>;
    }
  };
  return (
    <Layout>
      <div>
        <div className='side-profile-panel'>Side Panel</div>
        <div className='profile-detail'>
          <div className='user-section'>
            <img className='user-image' src={imageSrc} />
            <div>
              <h5>نام و نام خانوادگی</h5>
              <h5>علی شیرزاده</h5>
            </div>
            <Link to='/profile'>
              <h5>اعتبار باقی مانده</h5>
              <h5>12 روز</h5>
            </Link>
            <Link to='/profile'>
              <h5>کیف پول</h5>
              <h5>8600 تومان</h5>
            </Link>
          </div>
          <h4 style={{ textAlign: 'right' }}>ویدیو های ذخیره شده:</h4>
          <div className='card-container'>
            <Video />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
