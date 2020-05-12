import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../components/Layout';
const Movie = (props) => {
  console.log(props);
  const [state, stateSet] = useState({ ...props.location.state, currentLink: null });
  const { id } = props.match.params;
  const changeResolution = (e) => {
    window.open(e.target.value);
  };

  if (!state.name) return <Redirect to='/' />;
  document.title = state.name;
  return (
    <Layout>
      <div className='container'>
        <h3 className='rtl'>{state.name}</h3>
        <div className='video-player'>
          <video width='100%' controls poster={state.art} playsInline>
            {state.links.map(({ filelink, key }) => (
              <source key={key} src={filelink} type='video/mp4' />
            ))}
            {/* <source src={state.currentLink || state.links[0].filelink} type='video/mp4' /> */}
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
/* Movie.getInitialProps = async ({ req, res, match, history, location, ...ctx }) => {
  return { whatever: 'stuff' };
}; */
export default Movie;
