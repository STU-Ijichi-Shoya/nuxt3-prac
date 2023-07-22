// how to marge object in typescript
//write code 
// const a = {h:{s:1}}
// const b = {h:{a:2}}
// correct {h:{s:1,a:2}}
// code: 

export const useAuthFetch = (url: string, options?:any) => {
    console.log("useAuthFetch",url,options);
    
    !useLoginStore().state.value.isLogin&&console.warn("[useAuthFetch]:TOKEN IS EMPTY")
    return useFetch(url, {
        ...options,
        headers:{
            ...options?.headers,
            'Authorization': useLoginStore().state.value.token||'empty token...',
        },
    //   async onResponse({ request, response, options }) {
    //     console.log('[fetch response]')
    //   },
    //   async onResponseError({ request, response, options }) {
    //     console.log('[fetch response error]')
    //   },
  
    //   async onRequest({ request, options }) {
    //     console.log('[fetch request]')
    //   },
    //   async onRequestError({ request, options, error }) {
    //     console.log('[fetch request error]')
    //   }
    })
  }