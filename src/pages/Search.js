import React, { useState } from 'react';
import Layout from '../components/Layout';
import VideoCart from '../components/VideoCart';
import SearchInput from '../components/InputField';
import { search as searchFunction } from '../helpers/Request';
import { Search as SearchSVG } from '../helpers/svgs';

const Search = (props) => {
  const [loading, loadingSet] = useState(false);
  // TODO: Add Loader Data Fetch in bottom of page
  const [search_items, search_itemsSet] = useState({ posts: [], totalpages: 0, totalcount: 0 });
  const [search_param, search_paramSet] = useState('');

  const onChange = (value) => {
    search_paramSet(value);
    if (value.length < 1) return loadingSet(false);
    loadingSet(true);
  };
  const onFinished = () => {
    sendRequest();
  };

  function sendRequest() {
    searchFunction(search_param)
      .then((posts) => {
        search_itemsSet(posts);
        loadingSet(false);
      })
      .catch((err) => {
        search_itemsSet([]);
        loadingSet(false);
      });
  }
  const Video = () => {
    if (loading) return <></>;
    if (search_param.length < 1 && !loading) {
      return (
        <div>
          <div>
            <SearchSVG />
          </div>
          <span>خب یک چیزی سرچ کن!</span>
        </div>
      );
    }
    if (search_items.posts.length > 0) {
      return search_items.posts.map((video, key) => <VideoCart video={video} key={key} />);
    } else {
      return <h4>جستجو شما نتیجه ای در بر نداشت :(</h4>;
    }
  };
  return (
    <Layout>
      <div className='container'>
        <SearchInput onChange={onChange} onFinished={onFinished} className='search-bar' placeholder='جستجو فیلم: بتمن...' />
        <div className='container' style={{ marginTop: '0px', marginBottom: '0px', paddingLeft: '0px', paddingRight: '0px' }}>
          <Video />
        </div>
        {loading && <div className='loader'></div>}
      </div>
    </Layout>
  );
};

export default Search;
{
  /* <input className='search-bar' placeholder='جستجو فیلم: بتمن...' onKeyDown={keyDown} value={search_param}  /> */
}

/* place-self: center;
align-self: center;
justify-self: center; */
