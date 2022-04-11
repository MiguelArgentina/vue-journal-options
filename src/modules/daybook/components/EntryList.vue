<template>
  <div class="entry-list-container container-fluid">
    <div class="px-2 pt-2 mb-3">
      <input type="text" class="form-control" placeholder="Buscar entrada">
    </div>
    <div class="entry-scrollarea">
      <h5 v-for="item in 50" :key="item" >
          <Entry/>
        </h5>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Entry: defineAsyncComponent(() => import("./Entry.vue") )
  }
}
</script>

<style lang="scss" scoped>

.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc(100vh - 120px);
  overflow: scroll;
}
</style>