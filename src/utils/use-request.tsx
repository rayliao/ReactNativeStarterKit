import Axios, {AxiosRequestConfig} from 'axios';
import {makeUseAxios, Options} from 'axios-hooks';

export const hookAxios = Axios.create({
  baseURL: 'url',
});

const useAxios = makeUseAxios({
  axios: hookAxios,
  cache: false,
});

/**
 * use request
 * @param config
 * @param options
 */
export function useRequest<T>(
  config: AxiosRequestConfig | string,
  options?: Options,
) {
  return useAxios<T>(config, options);
}
