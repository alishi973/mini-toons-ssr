import React, { useState, useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Layout from '../components/Layout';
const Movie = (props) => {
  const [state, stateSet] = useState({ ...props.location.state, currentLink: null });
  const { id } = props.match.params;

  useEffect(() => {
    return () => {
      // props.history.goBack();
      // window.history.pushState('/');
    };
  });
  const changeResolution = (e) => {
    window.open(e.target.value);
  };
  document.title = state.name;
  if (!state.name) return <Redirect to='/' />;

  return (
    <Layout>
      <div className='container'>
        <h3 className='header'>{state.name}</h3>
        <div className='video-player'>
          <video width='80%' controls={true} poster={state.art} playsInline>
            <source src={state.currentLink || state.links[0].filelink} type='video/mp4' />
          </video>
        </div>
        <div>
          <select onChange={changeResolution}>
            {state.links.map((link, index) => (
              <option key={index} value={link.filelink}>
                دانلود فیلم با کیفیت {link.resolution}
              </option>
            ))}
          </select>
        </div>
        <h4 className='content'>{state.content}</h4>
      </div>
    </Layout>
  );
};

export default withRouter(Movie);
