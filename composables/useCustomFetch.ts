import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export function useCustomFetch<T>(
  url: string,
  options: UseFetchOptions<T> = {}
) {
  const config = useRuntimeConfig();
  const authStore = useAuthStore();
  const tokenInfo: any = useCookie("token");
  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.apiBase,
    key: url,
    server: false,
    retry: 1,
    retryStatusCodes: [401],
    retryDelay: 500,

    // set user token
    headers:
      tokenInfo.value !== undefined
        ? { Authorization: `Bearer ${tokenInfo.value.accessToken}` }
        : {},

    onRequest({ options }) {},

    onRequestError(_ctx) {},

    onResponse(_ctx) {
      // _ctx.response._data = new myBusinessResponse(_ctx.response._data)
    },

    async onResponseError({ response }) {
      if (response.status === 401) {
        await useFetch("/api/reissue", {
          method: "POST",
          baseURL: config.public.apiBase,
          body: tokenInfo.value,
          onResponse({ response }) {
            console.log(response);
            if (response.status === 401) {
              authStore.signOut();
            } else {
              authStore.setTokenInfo(response._data);
            }
          },
        });
      }
    },
  };

  const params = defu(options, defaults);

  return useFetch(url, params);
}
