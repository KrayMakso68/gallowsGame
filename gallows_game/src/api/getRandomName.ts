import axios from "axios/index";

export const getRandomName = async () => {
  const {data} = await axios<{ FirstName: string }>(
      'https://api.randomdatatools.ru/?unescaped=false&params=FirstName'
    )
    return data.FirstName
}
