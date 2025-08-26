import axios, { AxiosResponse } from 'axios';

export const getRequest = async (url: string): Promise<AxiosResponse> => {
  try {
    return await axios.get(url);
  } catch (error: any) {
    return error.response;
  }
};
