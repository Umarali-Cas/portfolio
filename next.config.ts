/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  productionBrowserSourceMaps: false,

};

const withNextIntl = require("next-intl/plugin")("./src/lib/i18n/request.ts");
module.exports = withNextIntl(nextConfig);

