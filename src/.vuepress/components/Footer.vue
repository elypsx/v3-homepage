<template>
<div id="footer-page">
    <div class="footer-main">
        <p class="footer-wrapper line">
            <span class="footer-links">© 2021 Bastian Fischer.
            <span class="line-break"><br><br></span>
            All rights reserved.</span>

            <v-spacer></v-spacer>
            <a class="footer-links" href="/privacy-police/">Twitter</a>
            <a class="footer-links" href="/impressum/">Github</a>
            <router-link to="/privacy-police/" class="footer-links-right" >Datenschutz</router-link>
            <router-link to="/impressum/" class="footer-links-right" >Impressum</router-link>
        </p>
        <br>
    </div>
    <span class="footer-main"> Erstellt mit <a href="https://vuejs.com">Vue.js</a>, viel Kaffee und ♥</span>
    <div class="mobile-footer-wrapper">
    <table class="mobile-footer">
        <tr class="mobile-footer-tr">
            <td class="mobile-footer-td-left" colspan="4">
                © 2021 Bastian Fischer. All rights reserved.
            </td>
        </tr>
        <tr class="">
            <td class="mobile-footer-td" colspan="1">
                <router-link to="/impressum/" class="footer-links-right" >Impressum</router-link>
            </td>
            <td class="mobile-footer-td" colspan="1">
                <router-link to="/privacy-police/" class="footer-links-right" >Datenschutz</router-link>
            </td>
            <td class="mobile-footer-td" colspan="1">
                <a class="footer-links-mobile" href="/impressum/">Github</a>
            </td>
            <td class="mobile-footer-td" colspan="1">
                <a class="footer-links-mobile" href="/privacy-police/">Twitter</a>
            </td>
        </tr>
        <tr class="">
            <td class="mobile-footer-td" colspan="4">
                <br>
                Erstellt mit <a href="https://vuejs.com">Vue.js</a>, viel Kaffee und ♥
            </td>
        </tr>
    </table>
    </div>
</div>
</template>
