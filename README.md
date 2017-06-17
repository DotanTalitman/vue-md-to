# vue-md-to
## router-link behavior on vue material elements

If you are using vue-router you probably knows that you you have the option to get rid of the hash in the url,you can use the router's history mode, which leverages the 'history.pushState' API to achieve URL navigation without a page reload.
<br>
you can read more about vue-router 
<a href="https://router.vuejs.org/en/" target="_blank">here</a>.<br>
But you also need to use router-link component and use 'to' or ':to" directive in order to prevent the page reloaded.<br>
for example: 
```html
<router-link :to="page.link">{{page.name}}</router-link>
or
<router-link to="/Home">Home</router-link>
```
So far so good, But...<br>
if you want to use vue-mateiral you don't have the 'to' directive ,<br>
instead you need to use the href attr or 'v-bind:href' (or :href)  directive like that:
```html
 <md-button href="/Home">Home</md-button>
or
 <md-button:href="page.link">{{page.name}}</md-button>
```
So if you trying to do something like that:
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
the page will reload every click:<br>

![md-href](https://github.com/DotanTalitman/vue-md-to/blob/master/md-href.gif)

sure ,you can hack this with something like that:<br>
```html
<router-link v-if="!page.children" class="md-button" :to="page.link">{{page.name}}</router-link>
```
But it's starting to be complicated  if you want submenus and it wont work like the above example.<br>

## Instead, use the vue-md-to directive like that :
```html
import mdTo from "vue-md-to"
Vue.use(mdTo);
```
## And in your html/template  :
```html
<md-button v-md-to="page.link">{{page.name}}</md-button>
Or for submenu:
<md-menu-item v-for="child in page.children" v-md-to="child.link">{{child.name}}</md-menu-item>
Or if it just a string :
<md-button v-md-to="'/home'">Home</md-button>
```
So for example, in this code:
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
```
Your routing will be flawless

![v-md-to](https://github.com/DotanTalitman/vue-md-to/blob/master/v-md-to.gif)

### dependencies :
vue-router<br>
vue-material


