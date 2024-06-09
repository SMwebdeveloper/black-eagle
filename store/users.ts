import axios from "axios";
import { getDocs, collection } from "firebase/firestore";
import { db } from "~/firebase/firebase";
interface User {
  email: string;
  name: string;
  password: string;
  userId: string;
  id: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: <User>{
        email: "",
        name: "",
        password: "",
        userId: "",
        id: "",
      },
      users: [],
    };
  },
  actions: {
    async getUsers() {
      const result: any = [];
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc: any) => {
        result.push({ ...doc.data(), id: doc.id });
      });
      return (this.users = result);
      // const api = "https://myapi.pythonanywhere.com/api/users/";
      // axios
      //   .get(api)
      //   .then((data) => {
      //     this.users = data.data
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   }).finally(() => {
      // useLoadingStore().set(false)
      // })
      // try {
      //   const response = await fetch(api)
      //   const data = await response.json()
      //   if(response.ok) {
      //     this.users = data
      //   } else {
      //     console.log('upps')
      //   }
      // } catch (error) {
      //   console.log(error)
      // } finally{
      //   this.isLoadingStore.set(false)
      // }
    },
     getUser() {
      const userToken = localStorage.getItem('token')
      this.users.forEach((user:any)=> {
        if(user.userId === userToken) {
          this.user = user
        }
      })
    },
  },
});
