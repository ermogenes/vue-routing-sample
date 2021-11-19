<template>
  <nav>
    <router-link to="/">Início</router-link> | <router-link to="/p1">1</router-link> |
    <router-link to="/p2">2</router-link> | <router-link to="/p3">3</router-link> |
    <router-link to="/p4">4</router-link>
  </nav>
  <section>
    <router-view />
  </section>
</template>

<script>
import './assets/styles/app.scss';

export default {};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  section {
    flex: 1;
    display: flex;
    flex-direction: column;

    article {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: start;

      h1 {
        margin: 0.5em;
        text-align: center;
      }

      p {
        flex: 1;
        align-self: center;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
