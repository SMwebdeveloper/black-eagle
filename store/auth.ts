interface User {
    email: string,
    name: string,
    password: string,
    id: string
}



export const useAuthStore = defineStore('auth',{
  state: () => {
    return {
        user: <User>{
          email:'',
          name: '',
          password: '',
          id:''
        }
    }
  },
  actions:{
    getUser(user: User) {
       this.user = user
    }
  }
})