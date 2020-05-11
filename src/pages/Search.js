import React, { useState } from 'react';
import Layout from '../components/Layout';
import VideoCart from '../components/VideoCart';
import { search as searchFunction } from '../helpers/Request';
import { Search as SearchSVG } from '../helpers/svgs';

const Search = (props) => {
  const [loading, loadingSet] = useState(false);
  const [search_items, search_itemsSet] = useState([]);
  const [search_param, search_paramSet] = useState('');

  var timer = null;
  function keyDown(e) {
    console.log(e.target.value);
    search_paramSet(e.target.value);
    if (e.target.value.length < 1) return clearTimeout(timer);
    loadingSet(true);
    clearTimeout(timer);
    timer = setTimeout(sendRequest, 2000);
  }
  function sendRequest() {
    clearTimeout(timer);
    searchFunction(search_param)
      .then((posts) => {
        clearTimeout(timer);
        search_itemsSet(...posts);
        loadingSet(false);
      })
      .catch((err) => {
        clearTimeout(timer);
        search_itemsSet([]);
        loadingSet(false);
      });
  }
  const Video = () => {
    if (loading) return <></>;
    if (search_param.length < 1 && !loading) {
      return (
        <>
          <div>
            <SearchSVG />
          </div>
          <span>خب یک چیزی سرچ کن!</span>
        </>
      );
    }
    if (search_items.length > 0) {
      return search_items.map((video, key) => <VideoCart video={video} key={key} />);
    } else {
      return <h4>جستجو شما نتیجه ای در بر نداشت :(</h4>;
    }
  };
  return (
    <Layout>
      <div className='container'>
        <input className='search-bar' placeholder='جستجو فیلم: بتمن...' onChange={keyDown} value={search_param} />
        <div className='container'>
          <Video />
        </div>
        {loading && <div className='loader'></div>}
      </div>
    </Layout>
  );
};

export default Search;
