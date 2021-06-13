<template>
<div class="v-card-wrapper">
    <router-link v-for="page in pages" :to="page.path">
  <v-card
    class="v-card"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4 pdate">
          {{ page.frontmatter.date }}
        </div>

        <v-list-item-title class="headline mb-1 title">
          {{ page.title }}
        </v-list-item-title>

        <v-list-item-subtitle class="tags-wrapper">
          <router-link
            v-for="tag in pageTags(page)"
            :key="tag"
            :to="{ path: `/tags.html#${tag}`}"
            >
            <span class="tags">
              <!-- <span :class=tag>{{tag}}</span> -->
              <v-chip
                :class="tag"
                label
              >
                <span>{{tag}}</span>
              </v-chip>
            </span>
          </router-link>
        </v-list-item-subtitle>

        <v-list-item-subtitle class="descriptionText" v-html="pageDescription(page)"></v-list-item-subtitle>
        <v-list-item-subtitle class="readingTime" v-html="pageReadingTime(page)"></v-list-item-subtitle>

      </v-list-item-content>

      <span>
      <img
        :src="$withBase(page.frontmatter.image)"
        alt="Image lost"
        width="50px"
        style="position: static;margin-top: 2px;padding: 0px;"
      >
      </span>
    </v-list-item>

    <!-- <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Read more..
      </v-btn>
    </v-card-actions> -->
  </v-card>
  </router-link>
  </div>
</template>


<script>
export default {
  data() {
    return {
      pages: []
    }
  },
  mounted() {
    this.$site.pages.forEach(page => {
      if (page.frontmatter.type === 'post') {
        this.pages.push(page)
      }
    }
    )
  },
  methods: {
    pageDescription(page) {
      if (page.excerpt) {
        return page.excerpt;
      } else {
        return page.frontmatter.description;
      }
    },
    pageTags(page) {
      if (page.frontmatter.tags) {
        return page.frontmatter.tags;
      } else {
        return page.frontmatter.tags;
      }
    },
    pageReadingTime(page) {
      if (page.readingTime) {
        return page.readingTime.text + " | " + page.readingTime.words + " Words";
      } else {
        return page.readingTime;
      }
    },
  },
}
</script>
