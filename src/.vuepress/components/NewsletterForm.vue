<template>
  <div class="newsletter__wrapper">
  <v-form class="newsletter__form" v-model="valid">
    <v-container class="newsletter__container">
      <h3>Newsletter</h3>
      <br>
      <p>
        If you're curios about the things I write about here, you should definitly join my newsletter. It's an occassional email with interesting things I've read or found, plus new articles.
      </p>
      <v-row>
        <v-col
          cols="12"
          md="12"
        >
          <v-text-field
            class="newsletter__text-field"
            v-model="name"
            :rules="nameRules"
            :counter="20"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            class="newsletter__text-field"
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <br>
      <v-btn color="#009688" @click="onClick" style="color: #fff;">Eintragen</v-btn>
    </v-container>
  </v-form>
  </div>
</template>


<script>
import subscribeToMailchimp from "vuepress-plugin-mailchimp/src/mailchimpSubscribe";

export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Sie müssen ihren Namen eintragen',
      v => v.length <= 10 || 'Der Name darf maximal 20 Zeichen haben!',
    ],
    email: '',
    emailRules: [
      v => !!v || 'Sie müssen ihre E-mail Adresse eintragen!',
      v => /.+@.+/.test(v) || 'Keine gültige E-mail Adresse!',
    ],
  }),
  methods: {
    onClick() {
      subscribeToMailchimp(this.email, { LNAME: name }).then(res => {
        alert("Perfekt, das hat geklappt!");
      });
    }
  },
}
</script>
