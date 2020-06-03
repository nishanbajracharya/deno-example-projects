import { getAppInfo } from "../domain/appInfo.ts";

function getAppInfoRoute({ response }: { response: any }) {
  response.body = getAppInfo();
}

export { getAppInfoRoute };
