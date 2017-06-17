# vue-md-to
## router-link behavior on vue material element

### Simple, add 'v-md-to' instead of href/:href

```html
<template v-for="(page,i) in pages">
  <md-button v-if="!page.children" :href="page.link">{{page.name}}</md-button>
  <md-menu v-else>
    <md-button md-menu-trigger>{{page.name}}</md-button>
    <md-menu-content>
      <md-menu-item v-for="child in page.children" :href="child.link">{{child.name}}</md-menu-item>
    </md-menu-content>
  </md-menu>
</template>
```

```html
<template v-for="(page,i) in pages">
  <md-button v-if="!page.children" v-md-to="page.link">{{page.name}}</md-button>
  <md-menu v-else>
    <md-button md-menu-trigger>{{page.name}}</md-button>
    <md-menu-content>
      <md-menu-item v-for="child in page.children" v-md-to="child.link">{{child.name}}</md-menu-item>
    </md-menu-content>
  </md-menu>
</template

<router-link v-if="!page.children" class="md-button" :to="page.link">{{page.name}}</router-link>
<md-button v-md-to="'/home'">Home</md-button>
```


### dependencies :
 vue-router<br>
 vue-material


