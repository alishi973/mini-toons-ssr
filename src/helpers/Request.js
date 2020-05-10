import Axios from 'axios';

export async function getindex(id = 0) {
  const req = await Axios.get(`${process.env.RAZZLE_API}type=listing&pagenum=${id}` /* , { headers: { Origin: 'minitoons.ir' } } */);
  return req.data.posts;
}

export async function search(param) {
  const req = await Axios.get(`${process.env.RAZZLE_API}type=listing&search=${param}&pagenum=1`);
  const { totalpages, totalcount, posts } = req.data;
  return { totalcount, totalpages, posts };
}
