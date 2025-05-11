module.exports = {
  // Optional: specify path matching rules
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*", // Match API paths
        destination: "/api/auth/:path*", // Allow these paths to go through
      },
    ];
  },
};
