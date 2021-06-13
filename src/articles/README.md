---
date: 2021-4-22
sidebar: false
type: page
title: Artikel
description: Interesseante Artikel von A bis Z
permalink: /articles/
---
<div id="listings-page">
<div style="display: flex;">
<img :src="$withBase('/assets/img/doodlefolder_99344-512.png')" alt="Folder Image" width="50px" height="50px" style="margin: -10px 20px 0 0;">
<h2>{{ $page.frontmatter.title }}</h2>
</div>
<br>
<h5>{{ $page.frontmatter.description }}</h5>


<ArticlesIndex />
</div>
