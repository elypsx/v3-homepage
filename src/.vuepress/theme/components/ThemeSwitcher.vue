<template>
  <a role="button" @click.prevent="switchTheme()" :aria-label="'Switch to ' + nextTheme + ' mode'" class="nav-link">
      <span key="dark" v-if="theme === 'dark'" style="display: flex;">
          <Fa-Sun color="#fff" size="1x" />
          <span class="themeBtnText">Light Mode</span>
      </span>
      <span key="light" v-else-if="theme === 'light'" style="display: flex;">
          <Fa-Moon color="#000" size="1x" />
          <span class="themeBtnText">Dark Mode</span>
      </span>
    <span key="light" v-else>Switch theme</span>
  </a>
</template>

<script>
const themes = ['light', 'dark']

export default {
  name: 'ThemeSwitcher',

  data () {
    return {
      theme: ''
    }
  },

  computed: {
    nextTheme () {
      const currentIndex = themes.indexOf(this.theme)
      const nextIndex = (currentIndex + 1) % themes.length
      return themes[nextIndex]
    }
  },

  methods: {
    switchTheme () {
      const currentIndex = themes.indexOf(this.theme)
      const nextIndex = (currentIndex + 1) % themes.length
      window.__setPreferredTheme(themes[nextIndex])
      this.theme = themes[nextIndex]
    }
  },

  async mounted () {
    // set default
    if (typeof window.__theme !== 'undefined') {
      this.theme = window.__theme
    }
  }
}
</script>
