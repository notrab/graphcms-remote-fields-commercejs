export default {
  components: true,
  buildModules: ["nuxt-graphql-request"],
  graphql: {
    clients: {
      graphcms: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
      },
    },
  },
};
