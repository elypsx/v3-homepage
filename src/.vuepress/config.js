const { description } = require('../../package')
const path = require('path')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')
global.fetch = require('node-fetch');
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// require("dotenv").config({
//  path: `.env.${process.env.NODE_ENV}`,
// })
// const webpack = require('webpack')
require('dotenv').config()
const webpack = require('webpack')

  module.exports = {
  configureWebpack: (config) => {
      return { plugins: [
        new webpack.EnvironmentPlugin({ ...process.env })
      ]}
    },
   /*  configureWebpack: (config) => {
      return { plugins: [
        new webpack.EnvironmentPlugin({ ...process.env })
      ]}
    }, */

  mode: 'production',
      // runtimeCompiler: true,
  // chainWebpack(config, isServer) {
  //   config.output.globalObject('this');
  //   config.resolve.alias.set('mainFields','main');
  //   config.output.libraryTarget('commonjs2');
  // },
  // theme: '@vuepress/blog',
  
  globalUIComponents: [
    'ThemeManager'
  ],

  /** permalink: '/:year/:month/:day/:slug', **/

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Bastian Fischer',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  // Third Party Components
  thirdPartyComponents: {


    // configureWebpack: (config, isServer) => {
    //   if (!isServer) {
    //     config.resolve.mainFields = ['main','browser'];
    //     config.output.globalObject = 'this';
    //     config.output.libraryTarget = 'commonjs2';
    //     config.externals = ['firebase','firebase'];
    //   }
    // },
   		fontAwesomeIcons:{
      regular:['sun'],      // Regular Font - one must included
			solid:[               // Solid font awesome icon keys here
        'sun',
        'moon',
        'stream',
        'user-graduate',
        'graduation-cap',
        'angle-double-right',
        'angle-right',
        'arrow-alt-circle-right',
        'unlock',
        'lock',
        'universal-access',
        'certificate',
        'stamp'
      ]
		}
	},

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', type:'image/png', sizes:'32x32', href: '/assets/icons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type:'image/png', sizes:'16x16', href: '/assets/icons/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', sizes:'180x180', href: '/assets/icons/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/assets/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/assets/icons/mstile-150x150.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    /** ['script', { src: 'https://code.jquery.com/jquery-3.5.1.min.js', type: 'text/javascript'}], **/
  ],
  
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    cookies: {
      theme: 'dark-lime',
      buttonText: 'OK',
      closeButtonText: 'Schliessen',
      message: 'Diese Webapp verwendet Cookies, um seine Dienste bereitzustellen, Werbung zu personalisieren und Traffic zu analysieren.',
    },
    repo: '',
    editLinks: false,
    docsDir: ['articles/_articles','projects/_projects'],
    editLinkText: '',
    logo: './assets/img/me.png',
    displayAllHeaders: true,
    activeHeaderLinks: false,
    searchPlaceholder: 'Durchsuchen...',
    lastUpdated: 'Letzte Aktualisierung: ', // string | boolean
    smoothScroll: true,
    dateFormat: 'YYYY-MM-DD',
    next: true,
    prev: true,
    nextText: 'Next',
    prevText: 'Prev',
    sidebarDepth: 2,
    nav: [
      {
        text: 'Startseite',
        link: '/',
      },
      {
        text: 'Über Mich',
        link: '/about/',
      },
      {
        text: 'Artikel',
        link: '/articles/',
      },
      {
        text: 'Kurse',
        link: '/courses/',
      },
      {
        text: 'Projekte',
        link: '/projects/',
      },
      {
        text: 'Kontakt',
        link: '/contact/',
      },
      /* {
        text: 'Tags',
        link: '/tags/',
      }, */
      // {
      //   text: 'Login',
      //   link: '/login/',
      //   component: () => import('../components/Login.vue')
      // },
      // {
      //   text: 'Forgot Password',
      //   link: '/forgot-password/',
      //   component: () => import('../component/ForgotPassword.vue')
      // },
      /* {
        text: '',
        link: '/user-account/',
        component: () => import('/components/UserAccount.vue'),
      }, */
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
      '/test/': [
        {
          title: 'Test',
          collapsable: false,
          children: [
            '',
            'using-vue-2',
          ]
        }
      ],
    },
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/ulivz',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/_ulivz',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      '@vssue/vuepress-plugin-vssue', {
        platform: 'github',
        owner: 'elypsx',
        repo: 'v3-homepage',
        clientId: process.env.VUE_APP_VSSUE_CLIENT_ID,
        clientSecret: process.env.VUE_APP_VSSUE_CLIENT_SECRET,
        autoCreateIssue: true,
      },
    ],
    [
    'vuepress-plugin-auto-sidebar', {
      sort: {
        mode: "asc",
        readmeFirst: true,
      },
      Title: {
        mode: "titlecase",
        map: {}
      },
      sidebarDepth: 2,
      collapse: {
        open: false,
        collapseList: [],
        uncollapseList: []
      },
      ignore: []
    }],
    /* ['last-reading', {
      popupConfig: {
        message: 'Go back',
        buttonText: 'ok'
      },
    }], */
    [
      'vuepress-plugin-right-anchor',
      {
        showDepth: 2,
        ignore: [
          '/',
          '/api/'
          // more...
        ],
        expand: {
          trigger: 'click',
          clickModeDefaultOpen: true
        },
        // customClass: 'your-customClass',
        disableGlobalUI: false,
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://bastian-fischer.web.app'
      }
    ],
    [
      "vuepress-plugin-mailchimp",
      {
        // You need to provide this plugin with your Mailchimp endpoint in order for it
        // to know where to save the email address. See more detail in Config section.
        // UI Customization https://vuepress-plugin-mailchimp.billyyyyy3320.com/#:~:text=Also%20see%3A-,UI%20Customization,-%23
        endpoint: "https://us6.api.mailchimp.com/3.0/",
        title: "SupX Learning Updates",
        content: "Subscribe to get the latest updates. No spam or what ever...",
        submitText: "Subscribe Me",
        popupConfig: {
          timeout: 2000,
          enabled: true,
          popupComponent: "Popup",
        },
      }
    ],
    ['demo-code',
     {
      jsLibs: [
        // umd
        'https://unpkg.com/tua-storage/dist/TuaStorage.umd.js',
      ],
      cssLibs: [
        'https://unpkg.com/animate.css@3.7.0/animate.min.css',
      ],
      showText: 'show code',
      hideText: 'hide code',
      styleStr: '',
      minHeight: 100,
      onlineBtns: {
        codepen: true,
        jsfiddle: true,
        codesandbox: true,
      },
      codesandbox: {
        deps: { 'lodash': 'latest' },
        json: '',
        query: '',
        embed: '',
      },
      demoCodeMark: 'demo-code',
      copyOptions: {},
     }
    ],
    [
      'seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
        customMeta: (add, context) => {

          const {
              $site, // Site configs provided by Vuepress
              $page, // Page configs provided by Vuepress

              // All the computed options from above:
              siteTitle, title, description, author, tags,
              twitterCard, type, url, image, publishedAt, modifiedAt,
          } = context

          add('twitter:site', $site.themeConfig.twitter)
          // -> <meta name="twitter:site" content="@github"></meta>

          // add('book:isbn', '9780091929114', 'property')
          // -> <meta property="book:isbn" content="9780091929114"></meta>
        },
      }
    ],
    '@vuepress/back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      'social-share',
      {
        networks: ['twitter', 'facebook', 'reddit' ]
      }
    ],
    ['@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'post',
            // directory with markdown files for posts
            dirname: '/articles/r/',
            // directory with result index.html and page/
            // path: '/blog',
            // path to post
            itemPermalink: 'articles/:slug',
            // layout for index page
            // layout: 'index',
            // itemLayout: 'Post',
            Pagination: {
              lengthPerPage: 10,
              // layout for index page when page != 1
              // layout: 'Index'
            }
          },
           {
            // Unique ID of current classification
            id: 'serie',
            // directory with markdown files for posts
            dirname: '/series/r/',
            // directory with result index.html and page/
            // path: '/blog',
            // path to post
            itemPermalink: 'series/:slug',
            // layout for index page
            // layout: 'index',
            // itemLayout: 'Post',
            pagination: {
              lengthPerPage: 10,
              // layout for index page when page != 1
              // layout: 'Index'
            }
          },
          {
            // Unique ID of current classification
            id: 'project',
            // directory with markdown files for posts
            dirname: '/projects/r/',
            // directory with result index.html and page/
            // path: '/projects',
            // path to post
            itemPermalink: 'project/:slug',
            // layout for index page
            // layout: 'index',
            // itemLayout: 'Post',
            pagination: {
              lengthPerPage: 10,
              // layout for index page when page != 1
              // layout: 'Index'
            }
          },
        ],
       /*  frontmatters: [
          {
            // Unique ID of current classification
            id: 'tags',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['tags','tag'],
            // Path of the `entry page` (or `list page`)
            path: '/tags/',
            // Layout of the `entry page` (list of tags)
            layout: 'Post',
            // Layout of the `scope page` (lsit of posts with this tag)
             scopeLayout: 'Post'
          },
        ], */
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': '' // UA-00000000-0
      }
    ],
    [
      '@vuepress/medium-zoom',
      {
        selector: 'img.zoom-custom-imgs',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
          margin: 16
        }
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        popupComponent: 'CSWUpdatePopup',
        updatePopup: {
           '/': {
            message: "Neue Version verfügbar!",
            buttonText: "Aktualisieren"
           },
        }
      }
    ],
    [
      'vuepress-plugin-rss',
      {
        base_url: '/', // required
        site_url: 'https://bastian-fischer.web.app', // required
        copyright: '2021 Bastian Fischer', // optional
        // filter some post
        filter: (frontmatter) => { return [true|false] },
        // How much articles
        count: 20
      }
    ],
    'vuepress-plugin-reading-time',
    'vuepress-plugin-table-of-contents',
    [
      'vuepress-plugin-git-log',
      {
        additionalArgs: '--no-merge',
        onlyFirstAndLastCommit: true,
      }
    ],
     [
      'reading-progress',
      {
        // readingDir: 'posts'
        // or
        // readingDir: ['posts1', 'posts2', 'posts3']
        // or { dir: fixed }
        // readingDir: {
        //  posts1: 'top',
        //  posts2: 'bottom',
        //  posts3: 'left'
        // }
        // or RegExp
        readingDir: /[^/]+$/ // exclude regularPath end with `/`
        // or
        // readingDir: new RegExp('[^/]+$')
      }
    ],
  ],

}
