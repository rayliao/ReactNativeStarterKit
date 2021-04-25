/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import Axios, {AxiosRequestConfig} from 'axios';
import {makeUseAxios, Options} from 'axios-hooks';
export type AxiosHookConfig = AxiosRequestConfig;
export type AxiosHookOptions = Options;
export const axios = Axios.create();

export const hookAxios = Axios.create();

/**
 * 创建一个新的useAxios 实例，多个API就不会冲突
 */
const useAxios = makeUseAxios({
  axios: hookAxios,
  cache: false,
});

export interface IClientResp<T = any> {
  code: number;
  body: T;
  msg: string;
}

/**
 * use request
 * @param config
 * @param options
 */
export function useRequest<T>(
  config: AxiosHookConfig | string,
  options?: AxiosHookOptions,
) {
  return useAxios<T>(config, options);
}