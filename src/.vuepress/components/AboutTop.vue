<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
      >
        <div style="display: flex;justify-content: center;margin-top: 2rem;">
            <img
                style="width: 250px;"
                src="/assets/img/me.png"
                alt="Bastian F."
            >
        </div>
      </v-col>

      <v-col
        cols="12"
        sm="6"
      >
        <h1>👋🏻 Hallo</h1>
        <br>
          <p>
              Ich bin Bastian Fischer und ich nutze Internet-Technologie, um Menschen zu helfen, großartig zu sein und Visionen in die Realität umzusetzen. Zögern Sie nicht, mich an einer der folgenden Stellen zu kontaktieren, lesen Sie interessante Artikel oder schauen Sie sich einige meiner Projekte an.
          </p>
      </v-col>

      <v-col
        cols="12"
        sm="12"
      >
        <div style="display: flex;flex-wrap: nowrap;justify-content: center;margin: 2rem auto 1rem auto;">
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
        <br>
        <div style="display: flex;justify-content: center;">
           <v-btn color="#009688" style="color:#fff;width: 180px;" to="/articles/">Artikel →</v-btn>
           <v-btn color="#009688" style="color:#fff;margin-left: 1rem;width: 180px;" to="/projects/">Projekte →</v-btn>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>
