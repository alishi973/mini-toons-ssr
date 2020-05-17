import React, { useEffect, useState } from 'react';
import { getTag } from '../helpers/Request';
import { tags } from '../tags';
import VideoCard from '../components/VideoCard';
import Layout from '../components/Layout';
import { Redirect } from 'react-router-dom';

const Tag = ({ tagName }) => {
  const [page, pageSet] = useState(1);
  const [videos, videosSet] = useState([]);
  const [isEnd, isEndSet] = useState(false);
  const [loading, loadingSet] = useState(false);
  useEffect(() => {
    loadingSet(true);
    getTag({ tagname: tagName, pagenum: page })
      .then((newVideo) => {
        if (newVideo.totalpages == page) isEndSet(true);
        if (newVideo.posts.length > 0) videosSet((lastVideo) => [...lastVideo, ...newVideo.posts]);
        else {
          alert('error');
        }
        loadingSet(false);
      })
      .catch((err) => {
        loadingSet(false);
        alert(JSON.stringify(err));
      });
  }, [page]);

  const Video = () => {
    if (videos && videos.length > 0) {
      return videos.map((video, key) => <VideoCard video={video} key={key} />);
    } else {
      // TODO: Add Skeleton
      return <></>;
    }
  };
  const nextPage = () => pageSet((lastPage) => lastPage + 1);
  if (!tagName) return <Redirect to={'/'} />;
  return (
    <Layout header={'برچسب ' + tagName + ' ها'}>
      <div className='card-container'>
        <Video />
        {videos.length != 0 && !loading && !isEnd && (
          <div onClick={nextPage} style={{ placeSelf: 'center', margin: '0 auto' }}>
            &darr;
          </div>
        )}
        {loading && <div style={{ marginTop: '20px' }} className='loader'></div>}
      </div>
    </Layout>
  );
};
Tag.getInitialProps = async (props) => {
  if (tags.indexOf(decodeURI(props.match.params.tagName)) !== -1) return { tagName: decodeURI(props.match.params.tagName) };
  else return { tagName: false };
};

export default Tag;
