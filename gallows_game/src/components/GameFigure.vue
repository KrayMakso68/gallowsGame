<template>
  <svg height="300" width="250" class="figure-container">
    <!-- Rod -->
    <line x1="60" y1="20" x2="180" y2="20" />
    <line x1="180" y1="20" x2="180" y2="50" />
    <line x1="60" y1="20" x2="60" y2="280" />
    <line x1="20" y1="280" x2="100" y2="280" />

    <!-- Head -->
    <circle v-if="wrongLettersCount >= 1" cx="180" cy="75" r="25" />
    <!-- Body -->
    <line v-if="wrongLettersCount >= 2" x1="180" y1="100" x2="180" y2="150" />
    <!-- Arms -->
    <line v-if="wrongLettersCount >= 3" x1="180" y1="120" x2="140" y2="100" />
    <line v-if="wrongLettersCount >= 4" x1="180" y1="120" x2="220" y2="100" />
    <!-- Legs -->
    <line v-if="wrongLettersCount >= 5" x1="180" y1="150" x2="140" y2="200" />
    <line v-if="wrongLettersCount >= 6" x1="180" y1="150" x2="220" y2="200" />
  </svg>
</template>

<script setup lang="ts">
interface Props{
  wrongLettersCount: number
}
defineProps<Props>()
</script>

<style scoped>

</style>
