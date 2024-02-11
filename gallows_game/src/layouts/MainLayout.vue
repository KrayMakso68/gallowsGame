<template>
  <q-layout view="fHh Lpr lFf">
    <q-header
      elevated
      class="bg-indigo-6 text-white"
    >
      <q-toolbar>
        <div class="text-h6 q-ml-lg-xs">GallowsGame</div>
        <q-toolbar-title class="text-h4 text-center absolute-center text-weight-bold">
          Виселица
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

</script>
