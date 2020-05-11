import Axios from 'axios';

export async function getindex(id = 0) {
  try {
    const req = await Axios.get(`${process.env.RAZZLE_CORSAPI}videos/${id}`);
    return req.data;
  } catch (err) {
    return { status: 'err' };
  }
}

export async function search(param) {
  const req = await Axios.get(`${process.env.RAZZLE_CORSAPI}/search/${param}`);
  const { totalpages, totalcount, posts } = req.data;
  return { totalcount, totalpages, posts };
}
