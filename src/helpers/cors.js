const express = require('express');
const app = express();
const Axios = require('axios');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/videos/:pagenumber', async (req, res) => {
  console.log(req.params);
  const url = `http://beta.minitoons.ir?api&type=listing&pagenum=${req.params.pagenumber}`;
  const post = await Axios.get(url);
  return res.send(post.data.posts);
});
app.get('/getVideo/:videoName', async (req, res) => {
  const video = await search(req.params.videoName);
  res.send(video.posts.filter((eachVideo) => eachVideo.postname == req.params.videoName) || 404);
});
app.get('/search/:videoName', async (req, res) => {
  console.log(req.params);
  const url = `http://beta.minitoons.ir/?api&type=listing&search=${req.params.videoName.replace(/ /g, '%20').trim()}&pagenum=1`;
  const post = await Axios.get(encodeURI(url));
  return res.json(post.data);
});

app.listen(1234);
