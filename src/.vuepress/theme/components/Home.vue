<template>

  <main
    class="home" id="home-page"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
  
    <header class="hero">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <h1
        v-if="data.heroText !== null"
        id="main-title"
      >
        {{ data.heroText || $title || 'Hello' }}
      </h1>


      <p
        v-if="data.taglineSecond !== null"
        class="description"
      >
        {{ data.taglineSecond || 'This is my awesome Blog' }}
      </p>

      <p
        v-if="data.tagline !== null"
        class="description"
      >
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>


      <div style="display: flex;flex-wrap: nowrap;justify-content: center;margin: -2rem auto 1rem auto;">
        <a href="https://twitter.com/elypsx">
          <img src="/assets/img/brands/twitter.svg" onerror="this.onerror=null; this.src='/assets/img/brands/twitter.png'" style="filter: invert(1);">
        </a>

        <a href="https://linkedin.com/bastian-fischer">
          <img src="/assets/img/brands/linkedin.svg" onerror="this.onerror=null; this.src='/assets/img/brands/linkedin.png'" style="filter: invert(1);margin-left: 2rem;">
        </a>

        <a href="https://github.com/elypsx">
          <img src="/assets/img/brands/github.svg" onerror="this.onerror=null; this.src='/assets/img/brands/github.png'" style="filter: invert(1);margin-left: 2rem;">
        </a>

        <a href="https://facebook.com/elypsx">
          <img src="/assets/img/brands/facebook.svg" onerror="this.onerror=null; this.src='/assets/img/brands/facebook.png'" style="filter: invert(1);margin-left: 2rem;">
        </a>

        <a href="mailto:kontakt@bastian-fischer.dev">
          <img src="/assets/img/brands/email.svg" onerror="this.onerror=null; this.src='/assets/img/brands/email.png'" style="filter: invert(1);margin-left: 2rem;">
        </a>
      </div>

      <div style="display: flex;justify-content: center;">
      <span
        v-if="data.actionText && data.actionLink"
        class="action"
      >
        <v-btn color="#009688" :item="actionLink" style="color:#fff;width:180px;" to="/articles/">
        Artikel →
        </v-btn>
      </span>

      <span
        v-if="data.actionTextSecond && data.actionLinkSecond"
        class="action"
        style="margin-left: 1rem;"
      >
      <v-btn color="#009688" :item="actionLinkSecond" style="color:#fff;width:180px;" to="/projects/">Projekte →</v-btn>
      </span>
      </div>

    </header>

    <div
      v-if="data.features && data.features.length"
      class="features"
    >
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <h2>{{ feature.title }}</h2>
        <p>{{ feature.details }}</p>
      </div>
    </div>
    
    

    <Content class="theme-succinct-content custom" />

  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Home',

  components: { NavLink },

  computed: {

    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      }
    },

    actionLinkSecond () {
      return {
        link: this.data.actionLinkSecond,
        text: this.data.actionTextSecond
      }
    },
  }
}
</script>

<style lang="stylus">
@require '../styles/config'
@require '../styles/fallback'

.home
  padding $navbarHeight 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 2rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 40rem
      font-size 1.3rem
      line-height 1.3
      text $descriptionColorDefault var(--descriptionColor)
    .action-button
      display inline-block
      font-size 1.2rem
      text $bodyBgColorDefault var(--bodyBgColor)
      bgColor $accentColorDefault var(--accentColor)
      padding 0.6rem 1.4rem
      border-radius 40px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid
      borderBottomColor $actionBtnBorderColorDefault var(--actionBtnBorderColor)
      &:hover
        bgColor $actionBtnHoverBorderColorDefault var(--actionBtnHoverBorderColor)
  .features
    border-top 1px solid
    borderTopColor $borderColorDefault var(--borderColor)
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      text $headerColorDefault var(--headerColor)
    p
      text $textMutedColorDefault var(--textMutedColor)
  .footer
    padding 2.5rem
    border-top 1px solid
    borderTopColor $borderColorDefault var(--borderColor)
    text-align center
    text $textMutedColorDefault var(--textMutedColor)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 1rem 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
