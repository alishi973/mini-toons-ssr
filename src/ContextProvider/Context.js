import React, { createContext, useState } from 'react';

const initialValue = {
  video_name: null,
  video_link: null,
  video_image: null,
  video_description: null,
  show: false,
};
export const VideoInfo = createContext(initialValue);
const VideoProvider = ({ children }) => {
  const [video, videoSet] = useState(initialValue);

  return <VideoInfo.Provider value={{ video, videoSet }}>{children}</VideoInfo.Provider>;
};
export default VideoProvider;
