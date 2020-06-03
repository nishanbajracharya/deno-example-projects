import { Router } from './deps.ts';

import { getAppInfoRoute } from './handler/appInfo.ts';

const router = new Router();

router.get('/api/v1', getAppInfoRoute);

export default router;