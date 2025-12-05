import { onRequest as __palette_ts_onRequest } from "E:\\github\\Solara\\functions\\palette.ts"
import { onRequest as __proxy_ts_onRequest } from "E:\\github\\Solara\\functions\\proxy.ts"

export const routes = [
    {
      routePath: "/palette",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__palette_ts_onRequest],
    },
  {
      routePath: "/proxy",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__proxy_ts_onRequest],
    },
  ]