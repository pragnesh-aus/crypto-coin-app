import { Ping } from './api';

export const APIUrl = Ping();
export const pingUrl = APIUrl;
export const polling = { enabled: true, url: pingUrl, interval: 10000 };
export const OfflineText = 'Offline';
