<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <v-layout>
          <v-flex xs8 sm4 offset-sm4 mt-5>
            <v-card>
              <v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75"></v-img>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                  <div>Located two hours south of Sydney in the
                    <br>Southern Highlands of New South Wales, ...
                  </div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
      <div class="section">
        <v-content>
          <v-container fluid fill-height>
            <v-layout align-center justify-center>
              <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                  <v-toolbar dark color="primary">
                    <v-toolbar-title>Login form</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <v-form>
                      <v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                      <v-text-field
                        id="password"
                        prepend-icon="lock"
                        name="password"
                        label="Password"
                        type="password"
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-icon>home</v-icon>
                    <v-btn color="primary">Login</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>

        <!-- <div class="container">
          <h2>Login</h2>
          <form class="form-login shadow bg-white p-3" @submit.prevent="login">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              >
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>-->
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        menu: "#menu",
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        sectionsColor: ["#41b883", "#ccffff"]
      }
    };
  },
  methods: {
    login() {
      this.$router.push({ name: "Main" });
    }
  }
};
</script>

<style scoped>
.form-login {
  /* padding: 20px; */
  max-width: 350px;
  margin: auto;
}
/* .form-signin{
    max-width: 350px;
    margin: 0 auto;
  }
  .btn{
    max-width: 200px;
    margin: 0 auto;
  } */
</style>
