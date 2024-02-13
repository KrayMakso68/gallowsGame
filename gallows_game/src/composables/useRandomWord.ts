import {onMounted, ref} from "vue";
import {getRandomName} from "src/api/getRandomName";

export const useRandomWord = () => {
  const word = ref('')
  const getRandomWord = async () => {
    try {
      const name = await getRandomName()
      word.value = name.toLowerCase()
    } catch (err) {
      console.log(err)
      word.value = ''
    }
  }
  onMounted(() => {
    getRandomWord()
  })

  return {
    word,
    getRandomWord
  }
}
