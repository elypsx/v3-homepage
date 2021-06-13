<template>
<div>
    <p>Zögern Sie nicht, sich an einem dieser Orte unten zu melden.</p>
    <div style="display: flex;flex-wrap: nowrap;justify-content: center;width: 370px;margin: 2rem auto 1rem auto;">
            <a href="https://twitter.com/elypsx">
            <img src="/assets/img/brands/twitter.svg" onerror="this.onerror=null; this.src='/assets/img/brands/twitter.png'" style="filter: invert(1);">
            </a>

            <a href="https://linkedin.com/bastian-fischer">
            <img src="/assets/img/brands/linkedin.svg" onerror="this.onerror=null; this.src='/assets/img/brands/linkedin.png'" style="filter: invert(1);margin-left: 4rem;">
            </a>

            <a href="https://github.com/elypsx">
            <img src="/assets/img/brands/github.svg" onerror="this.onerror=null; this.src='/assets/img/brands/github.png'" style="filter: invert(1);margin-left: 4rem;">
            </a>

            <a href="https://facebook.com/elypsx">
            <img src="/assets/img/brands/facebook.svg" onerror="this.onerror=null; this.src='/assets/img/brands/facebook.png'" style="filter: invert(1);margin-left: 4rem;">
            </a>

            <a href="mailto:kontakt@bastian-fischer.dev">
            <img src="/assets/img/brands/email.svg" onerror="this.onerror=null; this.src='/assets/img/brands/email.png'" style="filter: invert(1);margin-left: 4rem;">
            </a>
        </div>
        <br><br>
        <!-- <v-form>
            <v-text-field type="text" id="subject" placeholder="Subject"> </v-text-field> <br />
            <v-text-field type="email" id="email" placeholder="Receiver email"> </v-text-field> <br />
            <v-text-field name="text" id="text" cols="30" rows="10"></v-text-field> <br />
            <v-btn type="submit">Submit</v-btn>
        </v-form> -->
</div>
</template>

<script>
// import {submitForm} from '../public/assets/scripts/submitForm.js'

export default {
    name: 'contact',
    components: {
    },
    mounted() {
          // submitForm()
    }
}
</script>
