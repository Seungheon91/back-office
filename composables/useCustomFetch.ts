import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export function useCustomFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
  const config = useRuntimeConfig();
  const auth: any = useCookie("token");
  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.apiBase,
    key: url,

    // set user token
    headers:
      auth.value !== undefined
        ? { Authorization: `Bearer ${auth.value.accessToken}` }
        : {},

    onRequest(_ctx) {},

    onRequestError(_ctx) {},

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
