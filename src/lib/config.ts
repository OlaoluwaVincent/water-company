import PocketBase from 'pocketbase';

import type { TypedPocketBase } from './types/pocketbase-types';
import { env } from '$env/dynamic/public';

const url =
	env.PUBLIC_ENVIRONMENT == 'DEVELOPMENT' ? env.PUBLIC_LOCALPOCKET_URL : env.PUBLIC_POCKETHOST_UTL;

const pb = new PocketBase(url) as TypedPocketBase;

export default pb;
