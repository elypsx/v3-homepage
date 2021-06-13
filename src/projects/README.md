---
date: 2021-4-22
sidebar: false
type: page
title: Projekte
description: Einige interessante Projekte aus meiner Arbeit
permalink: /projects/
---
<div id="projects-page">
<div style="display: flex;">
<img :src="$withBase('/assets/img/codefolder_99364-512.png')" alt="Folder Image" width="50px" height="50px" style="margin: -10px 20px 0 0;">
<h2>{{ $page.frontmatter.title }}</h2>
</div>
<br>
<h5>{{ $page.frontmatter.description }}</h5>


<ProjectsIndex />
</div>
