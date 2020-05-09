import Axios from 'axios';

export async function getindex(id = 0) {
  const req = await Axios.get(`${process.env.RAZZLE_API}type=listing&pagenum=${id}`);
  return req.data.posts;
}
