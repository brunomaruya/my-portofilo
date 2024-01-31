/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    domains: ["media.giphy.com", "images.unsplash.com", "icons8.com"],
  },
};

export default withNextIntl(nextConfig);
