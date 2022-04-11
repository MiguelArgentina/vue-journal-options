<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
<div class="container">
  <button @click="goToDaybook" class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary mx-3">Secondary</button>
  <button class="btn btn-success">Success</button>
</div>
</template>

<script>
export default {
  methods: {
    goToDaybook() {
      this.$router.push({name: 'no-entry'})
    }
  }
}
</script>
