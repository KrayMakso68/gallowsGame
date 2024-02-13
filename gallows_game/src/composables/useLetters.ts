import {computed, Ref, ref} from "vue";

export const useLettres = (word: Ref<string>) => {
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
  const addLetter = (key: string) => {
    if(/[а-яА-ЯёЁ]/.test(key)) {
      letters.value.push(key.toLowerCase())
    }
  }
  const resetLetters = () => {
    letters.value = []
  }

  return {
    letters,
    correctLetters,
    wrongLetters,
    isLose,
    isWin,
    addLetter,
    resetLetters
  }
}
