<template>
  <div v-if="wrongLetters.length" class="wrong-letters-container">
    <div class="wrong-letters">
      <p>Ошибки</p>
      <span
        v-for="(wrongLetter, index) in wrongLetters"
        :key="index"
      >
        {{index === wrongLetters.length - 1 ? wrongLetter : `${wrongLetter}, `}}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props{
  wrongLetters: string[]
}
defineProps<Props>()
</script>

<style scoped>

</style>
