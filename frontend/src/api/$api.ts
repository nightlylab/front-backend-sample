import type { AspidaClient } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './user'
import type { Methods as Methods1 } from './user/new'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/user'
  const PATH1 = '/user/new'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'

  return {
    user: {
      new: {
        post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['post']['resBody']>(prefix, PATH1, POST, option).json(),
        $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods1['post']['resBody']>(prefix, PATH1, POST, option).json().then(r => r.body),
        $path: () => `${prefix}${PATH1}`
      },
      get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option: { query: Methods0['get']['query'], config?: T | undefined }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json(),
      $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
      delete: (option: { body: Methods0['delete']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['delete']['resBody']>(prefix, PATH0, DELETE, option).json(),
      $delete: (option: { body: Methods0['delete']['reqBody'], config?: T | undefined }) =>
        fetch<Methods0['delete']['resBody']>(prefix, PATH0, DELETE, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
