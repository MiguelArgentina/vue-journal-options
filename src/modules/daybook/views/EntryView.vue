<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-info fs-3 fw-bold">dia</span>
      <span class="mx-1 fs-3">mes</span>
      <span class="mx-1 fs-4 fw-light">año</span>
    </div>
    <div>
      <button class="btn btn-primary mx-2">
        Subir foto
        <i class="ms-1 fa fa-upload"></i>
      </button>
      <button class="btn btn-danger">
        Borrar
        <i class="ms-1 fa fa-trash-alt"></i>
      </button>
    </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea class="form-control" placeholder="Qué sucedió hoy?"></textarea>
  </div>
  <Fab icon="fa-save" />
  <img class="img-thumbnail" src="https://photopxl.com/pxl-content/uploads/2019/06/1.-Title-Image-22Western-Mountain-Landscape-Photography22.jpg" alt="Entry picture">
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue") )
  }
}
</script>

<style lang="scss" scoped>
  textarea {
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus {
      outline: none;
    }
  }
  img {
    width: 200px;
    position: fixed;
    bottom: 90px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
  }
</style>