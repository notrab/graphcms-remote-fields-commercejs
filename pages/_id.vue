<template>
  <div>
    <h3>"title", content, etc. from GraphCMS</h3>

    <p>{{ page.title }}</p>

    <h3>Product data, price, images, etc. Commerce.js API:</h3>

    <ul>
      <li>Product name: {{ page.checProduct.name }}</li>
      <li>
        Product price: {{ page.checProduct.price.formatted_with_symbol }} (raw:
        {{ page.checProduct.price.raw }})
      </li>
    </ul>

    <img
      :src="page.checProduct.media.source"
      :at="page.checProduct.name"
      width="250"
    />
  </div>
</template>

<script>
import { gql } from "nuxt-graphql-request";

export default {
  async asyncData({ $graphql, params }) {
    const { id } = params;

    const query = gql`
      query GetPageById($id: ID!) {
        page(where: { id: $id }) {
          title
          checProduct {
            name
            media {
              source
            }
            price {
              raw
              formatted_with_symbol
            }
          }
        }
      }
    `;

    const { page } = await $graphql.graphcms.request(query, {
      id,
    });

    return { page };
  },
};
</script>
