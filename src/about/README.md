---
sidebar: false
permalink: /about/
type: page
layout: Layout
---
<div id="about-page">
<h1>Über Mich</h1>

<AboutTop />

<br><br>

``` js
export default {
    name: CV,
    data() {
        return {
            author: "Bastian Fischer",
            location: ["Kiel","Germany"],
            married: true,
            children: 1,
            experience: "20 years",
            specialization: ["Javascript","UI/UX Design"],
            options {
                languages() {
                    c = true;
                    ruby = true;
                    javascript = true; 
                    html = true;
                    css = true;
                },
                frameworks() {
                    vue = true;
                    react = true;
                    ruby on rails = true;
                },
                design() {
                    illustrator = true;
                    photoshop = true;
                    xd = true;
                    gimp = true;
                    inkscape = true;
                },
            },
        }
    }
};
```

<br><br>

<AboutBottom />

<br><br>

</div>
