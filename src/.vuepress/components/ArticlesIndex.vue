<template>
<div class="v-card-wrapper">

  <div style="margin: 10px 0 20px 0;color: #888;display: flex;font-size: 14px;">
    <p><<&ensp;<strong>{{ posts.length }}</strong>&ensp;>>&ensp;Artikel in der Datenbank</p>
  </div

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
              <!-- gradient="to bottom, rgba(20,20,20,.1), rgba(20,20,20,.5)" -->

              <v-list-item three-line>
                <img
                :src='post.frontmatter.image'
                class="white--text align-end"
                height="50px"
                style="margin-right: 1rem;"
                />
                <v-list-item-content>
                  <!-- <div class="overline mb-4 pdate">
                       {{ post.frontmatter.date }}
                       </div>
                  -->
                  <v-list-item-title class="mb-1 headline">
                      {{ post.title }}
                  </v-list-item-title>

                  <!-- <v-list-item-subtitle class="descriptionText" v-html="pageDescription(page)"></v-list-item-subtitle> -->


                </v-list-item-content>
              </v-list-item>



              <!-- <v-card-actions>
                <Fa-UniversalAccess size="1x" color="#39a172" />&ensp;
                <Fa-Certificate size="1x" color="#ffc107" />
                <!-- <Fa-Stamp size="1x" color="#39a172" /> -->

                <!-- <v-spacer></v-spacer> -->

                <!-- <v-btn  color="#009688" :to="page.path" style="color:#fff;">
                  <!--  <Fa-GraduationCap size="1x" color="#009688" /> -->
                  <!-- &ensp; Start &ensp;
                  <!-- <Fa-AngleRight size="1x" color="#009688" /> -->
                <!-- </v-btn>
              </v-card-actions> -->
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
        .filter(page => page.path.startsWith('/articles/r/'))
        .map(this.convertPageDate)
        .sort(this.dateCompare());
    }
  },
  methods: {
    convertPageDate(page) {
      return { ...page, date: new Date(page.frontmatter.date) };
    },
    dateCompare(desc = true) {
      let multiplier = desc ? -1 : 1;
      return function(a, b) {
        return multiplier * (a.date - b.date);
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
