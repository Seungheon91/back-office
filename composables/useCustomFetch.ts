import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export function useCustomFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
  const config = useRuntimeConfig();
  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.apiBase,
    key: url,

    // set user token
    // headers: userAuth.value
    //   ? { Authorization: `Bearer ${userAuth.value}` }
    //   : {},

    onResponse(_ctx) {
      // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
    },

    onResponseError(_ctx) {
      // throw new myBusinessError()
    },
  };

  const params = defu(options, defaults);

  return useFetch(url, params);
}
