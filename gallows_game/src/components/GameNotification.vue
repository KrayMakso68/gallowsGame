<script setup lang="ts">
  import {ref} from "vue";

  const dialogVisible = ref(false)
  const open = () => {
    dialogVisible.value = true
  }
  const close = () => {
    dialogVisible.value = false
  }
  defineExpose({
    open,
    close
  })
</script>

<template>
  <q-dialog v-model="dialogVisible" seamless position="bottom">
    <q-card style="width: 350px">
      <q-linear-progress :value="1" color="red" />
      <q-card-section class="row text-subtitle1 text-center justify-center no-wrap">
        <div>
          <div class="text-weight-bold">Вы уже вводили этот символ</div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<style scoped>

</style>
