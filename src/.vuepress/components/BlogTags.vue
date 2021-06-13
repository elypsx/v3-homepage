<template>
  <div
    shadow="hover"
    :body-style="{ padding: '1rem' }"
  >
    <ul class="list-unstyled">
      <li
        v-for="tag in $page.frontmatter.tags"
        :key="tag"
        class="d-inline-block mx-2 my-2"
      >
          <router-link
            :to="{ path: tag }"
            :key="tag"
            class="el-button el-button--small text-decoration-none"
          >
            {{ tag }}
          </router-link>
        
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
      let tags = {}
      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index]
          if (tag in tags) {
            tags[tag].push(page)
          } else {
            tags[tag] = [page]
          }
        }
      }
      return tags
    }
  }
}
</script>

<style lang="stylus">
.el-badge__content {
  z-index: 10;
}
</style>
