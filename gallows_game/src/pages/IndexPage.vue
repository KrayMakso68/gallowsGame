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


const word = ref("")
const getRandomWord = async () => {
  try {
    const name = await getRandomName()
    word.value = name.toLowerCase()
  } catch (err) {
    console.log(err)
    word.value = ''
  }
}

getRandomWord()

const letters = ref<string[]>([])
const correctLetters = computed(() => {
  return letters.value.filter(x => word.value.includes(x))
})
const wrongLetters = computed(() => {
  return letters.value.filter(x => !word.value.includes(x))
})
const isLose = computed(() => {
  return wrongLetters.value.length === 6
})
const isWin = computed(() => {
  return [...word.value].every(x => correctLetters.value.includes(x))
})
const notification = ref<InstanceType<typeof GameNotification> | null>(null)
const popup = ref<InstanceType<typeof GamePopup> | null>(null)

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
    notification.value?.open()
    setTimeout(() => notification.value?.close(), 1800)
    return
  }
  if(/[а-яА-ЯёЁ]/.test(key)) {
    letters.value.push(key.toLowerCase())
  }
})
const restart = async () => {
  await getRandomWord()
  letters.value = []
  popup.value?.close()
}
</script>
