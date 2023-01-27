import { createClient } from 'microcms-js-sdk';

export const client = createClient({
	serviceDomain: 'rroc940mds',
	apiKey: process.env.API_KEY
});