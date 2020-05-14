import React from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../components/Layout';
import SectionContainer from '../components/SectionContainer';

const getRandomNumber = (maxNum) => Math.floor(Math.random() * maxNum);
const Movie = (props) => {
  const state = { ...props.location.state, currentLink: null };
  const { id } = props.match.params;
  const changeResolution = (e) => {
    window.open(e.target.value);
  };
  if (!state.name) return <Redirect to='/' />;
  document.title = state.name;
  return (
    <Layout>
      <div>
        <h3 className='rtl'>{state.name}</h3>
        <div className='video-player'>
          <video width='100%' controls poster={state.art} playsInline>
            {state.links.map(({ filelink, index }) => (
              <source autoSave="false" key={index} src={filelink} type='video/mp4' />
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
      {state.tags.map((eachTag, index) => {
        return <SectionContainer key={index} tag={eachTag} header={`فیلم های ${eachTag} بیشتر`} pagenumber={getRandomNumber(1)} />;
      })}
    </Layout>
  );
};
/* Movie.getInitialProps = async ({ req, res, match, history, location, ...ctx }) => {
  return { whatever: 'stuff' };
}; */
export default Movie;
