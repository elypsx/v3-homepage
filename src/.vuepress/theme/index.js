module.exports = {
  extend: '@vuepress/theme-default',
  data() { 
    return { 
        url: process.env.VUE_APP_URL, 
        title: process.env.VUE_APP_TITLE 
    }
},
  }
