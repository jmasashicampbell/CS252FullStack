<template>
  <div id="app">
    <div class="nav-color">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark cap-width">
        <router-link to="/" class="navbar-brand">BYU CS 252</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <router-link to="/" class="nav-item nav-link" v-bind:class="{ 'active': $route.path === '/' }">Home</router-link>
            <router-link to="/policies" class="nav-item nav-link" v-bind:class="{ 'active': $route.path === '/policies' }">Policies</router-link>
            <router-link to="/schedule" class="nav-item nav-link" v-bind:class="{ 'active': $route.path === '/schedule' }">Schedule</router-link>
            <!--<router-link to="/notes" class="nav-item nav-link" v-bind:class="{ 'active': $route.path === '/notes' }">Class Notes</router-link>-->
            <router-link to="/homework" class="nav-item nav-link" v-bind:class="{ 'active': $route.path === '/homework' }">Homework</router-link>
            <!--<router-link to="/ta" class="nav-item nav-link" v-bind:class="{ 'active': $route.path === '/ta' }">TA Schedule</router-link>-->
          </div>
        </div>
      </nav>
    </div>

    <router-view/>

    <footer>
      <a href="https://github.com/jmasashicampbell/CS252Vue">
        <img alt="github" src="./assets/github.png" >
      </a>
    </footer>
  </div>
</template>

<style>
@import '~bootstrap/dist/css/bootstrap.css';

:root {
  --navy-blue: #001832;
  --dark-blue: #002d5f;
  --royal-blue: #0062b8;
  --dark-gray: #505050;
  --light-gray: #c0c0c0;

  --dark-shadow:
      0 45px 80px -20px rgba(50, 50, 93, 1),
      0 25px 40px -30px rgba(0, 0, 0, 1);
  --light-shadow:
      0 45px 80px -20px rgba(50, 50, 93, 0.3),
      0 25px 40px -30px rgba(0, 0, 0, 0.35);
}

html {
  font-size: 16px;
}

body {
  min-height: 100%;
}

.bg-dark, .nav-color {
  background-color: var(--navy-blue) !important;
}

.navbar-brand {
  font-size: 1rem;
}

footer {
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--navy-blue);
}

footer a img{
  height: 2rem;
}

.cap-width {
  width: min(100%, 1200px);
  margin: auto;
}

.cap-width-padding {
  width: min(100%, 1200px);
  margin: auto;
  padding: 1rem;
}

h1 {
  font-size: 1.8rem;
}

h2 {
  font-size: 1.5rem;
  color: var(--dark-gray);
}

h3 {
  font-size: 1.125rem;
  color: var(--dark-gray);
  text-transform: uppercase;
}

h4 {
  font-weight: bold;
  font-size: 1rem;
}

@media only screen and (min-device-width: 641px) and (min-width: 641px){
  html {
    font-size: 16px;
  }

  h1 {
    font-size: 2.5rem;
  }
}
</style>
