<template>
  <div>
      <br>
      <p class="share-text">Teilen Sie diesen Artikel</p>
      <div class="social-share-module">
        <social-share :networks="['facebook', 'twitter', 'reddit' ]"/>
      </div>
      <br />
      <Vssue :title="$title" style="max-width: 930px;margin: auto;" />
  </div>
</template>
