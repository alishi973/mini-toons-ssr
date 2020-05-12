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
  const url = `${process.env.RAZZLE_CORSAPI}search/${param}`;
  try {
    const req = await Axios.get(url);
    const { totalpages = 0, totalcount = 0, posts = [] } = req.data;
    return { totalcount, totalpages, posts };
  } catch (err) {
    return { totalcount: 0, totalpages: [], err };
  }
}
