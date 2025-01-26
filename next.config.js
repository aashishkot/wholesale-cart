module.exports = {
  images: {
    domains: ["fakestoreapi.com"],
  },
  async redirects() {
    return [
      {
        source: "/old-path",
        destination: "/not-found", // Or any custom page
        permanent: true,
      },
    ];
  },
};
