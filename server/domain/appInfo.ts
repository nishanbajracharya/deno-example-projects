import { IAppInfo } from "../types.ts";

function getAppInfo(): IAppInfo {
  return { name: "App Server", version: "1.0.0" };
}

export { getAppInfo };
