<template lang="html">
  <div>
    <router-link
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      class="tags"
      :class="tag"
      :to="{ path: `/tags/#${tag}`}">
      {{tag}}
    </router-link>
  </div>
</template>
