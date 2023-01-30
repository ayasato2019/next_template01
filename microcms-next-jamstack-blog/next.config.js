/** @type {import('next').NextConfig} */
const nextConfig = {
reactStrictMode: true,
}

module.exports = {
env: {
	TEST_VAR_FOR_BROWSER: process.env.API_KEY,
},
};
