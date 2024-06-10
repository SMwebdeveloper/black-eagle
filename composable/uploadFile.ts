import {uploadBytes, ref, getStorage, getDownloadURL} from "firebase/storage"

const storage = getStorage()

export const getFile = async (fileEl:any) => {
  let result
  const storageRef = ref(storage, `ctf-file/${fileEl.name}`)
  await uploadBytes(storageRef, fileEl)
  await getDownloadURL(storageRef).then((url) => {
    result = url
  }).catch((e) => {
    console.log(e)
  })

  return result
}