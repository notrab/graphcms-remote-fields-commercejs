<template>
  <ul>
    <li v-for="page in pages" :key="page.id">
      <n-link
        :to="{
          name: 'id',
          params: { id: page.id },
        }"
      >
        <page-list-item :page="page"></page-list-item>
      </n-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["pages"],
};
</script>
