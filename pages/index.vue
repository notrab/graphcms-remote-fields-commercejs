<template>
  <div>
    <h1>Pages</h1>

    <page-list :pages="pages"></page-list>
  </div>
</template>

<script>
import { gql } from "nuxt-graphql-request";

export default {
  async asyncData({ $graphql }) {
    const query = gql`
      {
        pages {
          id
          title
        }
      }
    `;

    const { pages } = await $graphql.graphcms.request(query);
    return { pages };
  },
};
</script>
