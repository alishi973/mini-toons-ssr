import express from 'express';
import { render } from '@jaredpalmer/after';
import routes from './routes';
import { getindex, search } from './helpers/Request';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const chunks = require(process.env.RAZZLE_CHUNKS_MANIFEST);

const server = express();
server.get('/videos/:pagenumber', async (req, res) => {
  res.send(await getindex(req.params.pagenumber));
});
server.get('/getVideo/:videoName', async (req, res) => {
  const video = await search(req.params.videoName);
  res.send(video.posts.filter((eachVideo) => eachVideo.postname == req.params.videoName) || 404);
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
