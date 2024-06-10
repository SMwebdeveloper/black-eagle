import { db } from "~/firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

export const useChallengeStore = defineStore("challenge", {
  state: () => {
    return {
      challenges: [],
      challenge: {},
    };
  },

  actions: {
    async getChallenges(i: any) {
      const result:any = [];
      const querySnapshot = await getDocs(collection(db, "challenges"));
      querySnapshot.forEach((challenge: any) => {
        if (i === "admin") {
        return  result.push({ ...challenge.data(), id: challenge.id });
        } else {
          if (challenge.data().status) {
          return  result.push({ ...challenge.data(), id: challenge.id });
          }
        }
      });

      this.challenges = result
    },

    async getChallenge(key:string) {
      let result :any
      this.challenges.forEach((item:any) => {
        if(key === item.id) {
            return result = item
        }
      })
      this.challenge = result
    }
  },
});
