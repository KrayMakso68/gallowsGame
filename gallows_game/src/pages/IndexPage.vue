<template>
  <q-page class="flex flex-center">
    <div class="column main-column">
      <div class="col">
        <GameHeader/>
      </div>
      <div class="col-11">
        <div class="game-container bg-grey-2">
          <GameFigure
            :wrong-letters-count="wrongLetters.length"
          />
          <GameWrongLetters
            :wrong-letters="wrongLetters"
          />
          <GameWord
            :word="word"
            :correctLetters="correctLetters"
          />
        </div>
      </div>
    </div>
    <GameNotification ref="notification"/>
    <GamePopup
      ref="popup"
      :word="word"
      @restart="restart"
    />
  </q-page>
</template>

<script setup lang="ts">
import GameHeader from "components/GameHeader.vue";
import GameFigure from "components/GameFigure.vue";
import GameWrongLetters from "components/GameWrongLetters.vue";
import GameNotification from "components/GameNotification.vue";
import GamePopup from "components/GamePopup.vue";
import GameWord from "components/GameWord.vue";
import {computed, ref, watch} from "vue";
import axios from "axios";
import {getRandomName} from "src/api/getRandomName";
import {useRandomWord} from "src/composables/useRandomWord";
import {useLettres} from "src/composables/useLetters";
import {useNotification} from "src/composables/useNotification";


const {word, getRandomWord} = useRandomWord()
const {letters, correctLetters, wrongLetters, isLose, isWin, addLetter, resetLetters} = useLettres(word)
const {notification, showNotification} = useNotification()

const popup = ref<InstanceType<typeof GamePopup> | null>(null)

const restart = async () => {
  await getRandomWord()
  resetLetters()
  popup.value?.close()
}

watch(wrongLetters, () => {
  if (isLose.value) {
    popup.value?.open('lose')
  }
})
watch(correctLetters, () => {
  if (isWin.value) {
    popup.value?.open('win')
  }
})

window.addEventListener('keydown', ({key}) => {
  if (isWin.value || isLose.value) {
    return
  }
  if (letters.value.includes(key)) {
    showNotification()
    return
  }
  addLetter(key)
})
</script>
