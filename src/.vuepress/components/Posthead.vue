<template>
  <div style="margin: 4rem 0  -2rem 0;">
    <br />

    <h1 style="text-align: center;">{{ $page.frontmatter.title }}</h1>

    <span class="postDetails-wrapper" style="display: flex;justify-content: center;">
        <TagLinks />
    </span>
    
    <span class="postDetails-wrapper" style="display: flex;justify-content: center;">
      
      <span>Aktualisiert: {{ $page.frontmatter.date }}</span>&emsp;
      <span>{{ $page.readingTime.text }} | {{ $page.readingTime.words }} Words</span>&emsp;
      <span>Author: {{ $page.frontmatter.author }}</span>
      <span>&ensp;from&ensp;{{ $page.frontmatter.location }}</span>
    </span>
    <br />
    <br />
    <div class="toc">
      <u>Table of content</u>
      <TOC />
    </div>
    <br />
  </div>
</template>
