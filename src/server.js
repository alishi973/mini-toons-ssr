import express from 'express';
import { render } from '@jaredpalmer/after';
import routes from './routes';
import Axios from 'axios';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const chunks = require(process.env.RAZZLE_CHUNKS_MANIFEST);

const server = express();

server.get('/videos/:pagenumber', async (req, res) => {
  console.log(req.params);
  const url = `http://beta.minitoons.ir?api&type=listing&pagenum=${req.params.pagenumber}`;
  const post = await Axios.get(url);
  console.log('omad');
  return res.send(post.data.posts);
});
server.get('/search/:videoName', async (req, res) => {
  console.log(req.params);
  const url = `http://beta.minitoons.ir/?api&type=listing&search=${req.params.videoName.replace(/ /g, '%20').trim()}&pagenum=1`;
  const post = await Axios.get(encodeURI(url));
  console.log('omad');
  return res.json(post.data);
});
server.get('/tag/:tag/:pagenum', async (req, res) => {
  console.log(req.params);
  const url = `http://beta.minitoons.ir/?api&type=listing&tag=${req.params.tag}&pagenum=${req.params.pagenum || 1}`;
  const post = await Axios.get(encodeURI(url));
  console.log('omad');  
  return res.json(post.data);
});

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    try {
      const html = await render({
        req,
        res,
        routes,
        assets,
        chunks,
      });
      res.send(html);
    } catch (error) {
      // console.error(error);
      res.json({ message: error.message, stack: error.stack });
    }
  });

export default server;
