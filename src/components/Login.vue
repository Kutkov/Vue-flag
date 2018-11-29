<template>
  <div id="fullpage">
    <div class="section">Some section</div>
      <div class="section">
          <div class="container">
            <h2>Login</h2>
            <form class="form-login shadow bg-white p-3">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
      </div>
      <div class="section">Some section</div>
      <div class="section">Some section</div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({ name: 'Main' })
    }
  }
}
</script>

<style scoped>
.form-login{
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
