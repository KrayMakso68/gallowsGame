<template>
  <q-dialog v-model="popupVisible" persistent transition-show="scale" transition-hide="scale">
    <div class="popup-container">
      <div class="popup">
        <h2
          v-if="gameStatus === 'win'"
        >
          Поздравляю, вы победили! 😃
        </h2>
        <template v-else>
          <h2>Вы проиграли. 😕</h2>
          <h3>...имя: {{word}}</h3>
        </template>
        <button autofocus @click="emit('restart')">Сыграть еще раз</button>
      </div>
    </div>
  </q-dialog>
</template>

<script setup lang="ts">
import {ref} from "vue";
import type {GameStatus} from "src/types/GameStatus";

interface Props{
  word: string
}
defineProps<Props>()

const gameStatus = ref<GameStatus | null>(null)
const popupVisible = ref(false)

const open = (status: GameStatus) => {
  gameStatus.value = status
  popupVisible.value = true
}
const close = () => {
  popupVisible.value = false
}
defineExpose({
  open,
  close
})
const emit = defineEmits<{
  (e: 'restart'): void
}>()

</script>

<style scoped>

</style>
