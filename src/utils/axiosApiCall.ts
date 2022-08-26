import axios from 'axios';

export async function axiosGET(path: string) {
  return axios.get(path);
}
