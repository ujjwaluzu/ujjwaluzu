import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/project/repoteam", destination: "/project/crewlab", permanent: true }];
  },
  async headers() { return [{ source: "/", headers: [{ key: "Link", value: '</.well-known/api-catalog>; rel="api-catalog", </docs/api>; rel="service-doc", </.well-known/ai-catalog.json>; rel="describedby"; type="application/json"' }] }]; },
};
export default nextConfig;
