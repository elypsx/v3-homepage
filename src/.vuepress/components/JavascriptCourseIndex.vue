<template>
<div class="v-card-wrapper">

  <div style="margin: 10px 0 20px 0;color: #888;display: flex;font-size: 14px;">
    <p><<&ensp;<strong>{{ posts.length }}</strong>&ensp;>>&ensp;Artikel in der Datenbank</p>
  </div>

    <v-container fluid>
      <v-row dense>

        <v-col
          v-for="post in posts"
          :key="post.key"
          cols="12"
          sm="12"
        >
          <router-link :to="post.path">
          <v-card>
               <v-list-item three-line>
                <img
                :src='post.frontmatter.image'
                class="white--text align-end"
                height="50px"
                style="margin-right: 1rem;"
                />
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1 title">
                    {{ post.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
          </v-card>
        </router-link>
        </v-col>


      </v-row>
    </v-container>


</div>
</template>


<script>
export default {
  computed: {
    posts() {
      return this.$site.pages
        .filter(page => page.path.startsWith('/courses/javascript-course/'))
        .map(this.convertPageDate)
        .sort(this.dateCompare());
    }
  },
  methods: {
    convertPageDate(page) {
      return { ...page, date: new Date(page.frontmatter.date) };
    },
    dateCompare(asc = true) {
      let multiplier = asc ? -1 : 1;
      return function(a, b) {
        return multiplier * (b.date - a.date);
      };
    }
  },
}
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
