<template>
  <div class="container">
    <div class="flag-wrap">
      <div 
        class="flag-container"
        v-for="user in users"
        :key="user.id"
      >
        <i @click="updateFlag" :id="user.id" class="fas fa-flag" :class="user.colorFlag + 's'"></i>
        <p class="name">{{user.name}}</p>
      </div>
    </div>
    <br>
    <div class="card login">
      <div class="card-body">
        <h4 class="card-title text-center">Name</h4>
        <form @submit.prevent="createUser" class="text-center">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Please enter your name" name="name" v-model="name">
          </div>
          <button class="btn btn-primary" type="submit">Enter Flag</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import fb from "@/firebase/init";
import moment from "moment";

export default {
  data() {
    return {
      users: [],
      name: "",
      colorFlag: true,
      id: ""
    };
  },
  methods: {
    createUser() {
      fb.collection("users")
        .add({
          name: this.name,
          colorFlag: this.colorFlag,
          timestamp: Date.now()
        })
        .catch(err => {
          console.log(err);
        });
      this.name = "";
    },
    updateFlag(targetFlag) {
      const targetId = targetFlag.target.id;
      let colorNow;
      this.users.forEach((item, index, arr) => {
        if (item.id === targetId) {
          arr[index].colorFlag = !arr[index].colorFlag;
          colorNow = arr[index].colorFlag;
        }
      });

      let washingtonRef = fb.collection("users").doc(targetId);
      washingtonRef.update({
        colorFlag: colorNow
      });
    }
  },
  created() {
    let ref = fb.collection("users").orderBy("timestamp");

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          let doc = change.doc;
          this.users.push({
            id: doc.id,
            name: doc.data().name,
            colorFlag: doc.data().colorFlag,
            timestamp: moment(doc.data().timestamp).format("LTS")
          });
        }
        if (change.type === "modified") {
          this.users.forEach((user, index, arr) => {
            if (user.id === this.id) {
              arr[index].colorFlag = !this.colorFlag;
            }
          });
        }
      });
    });
  }
};
</script>

<style scoped>
.login {
  max-width: 450px;
  margin-top: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.flag-wrap {
  display: flex;
  justify-content: center;
}
.name {
  font-size: 2em;
  font-weight: bold;
  color: aaa;
  margin-top: 10px;
}
.flag-container {
  margin: 15px 40px;
}
.fas {
  font-size: 6em;
}
.trues {
  color: green;
}
.falses {
  color: red;
}
</style>
