<template>
  <div>
    <div class="row">
      <div class="col-sm bg-success d-flex">
        <div class="container m-auto text-white">
          <h6>PEERCOVER</h6>
          <h6>CAR <br />INSURANCE</h6>
          <h6>
            Price From <br />
            <h3>10,000</h3>
          </h6>
        </div>
      </div>
      <div class="col-sm d-flex">
        <div class="container m-auto">
          <form class="col-md-10" @submit.prevent="login">
            <div class="text-center pb-5 text-success">
              <h4>WELCOME BACK</h4>
            </div>
            <p>Input your details to continue</p>
            <div class="form-group py-4">
              <input
              v-model="credentials.username"
                type="text"
                class="form-control p-3"
                placeholder="Enter Username"
              />
            </div>
            <div class="form-group pb-4">
              <input
              v-model="credentials.password"
                type="password"
                class="form-control p-3"
                placeholder="Password"
              />
              <div class="float-right pt-2">
                <a href="" class="text-success">Forget Password?</a>
              </div>
            </div>
            <div class="form-group pt-4">
              <button type="submit" class="btn btn-success form-control">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data () {
    return {
      // User: [],
      errorMsg: {},
      credentials: {
        username: '',
        password: ''
      },
      loading: false
    }
  },
  methods: {
    async login () {
      try {
        const res = await this.$axios.post(
          'https://proguardpeercover.herokuapp.com/consultant_auth',
          this.credentials
        )
        console.log(res)
        const token = res.data.token
        const user = res.data
        console.log(user)
        this.$store.dispatch('login', { token, user })
        this.$router.replace('/dashBoard')
        console.log(res)
        this.$toastify({
          text: `Welcome ${res.data.firstname}`,
          className: 'info',
          style: {
            background: 'green'
          }
        }).showToast()
        // this.$store.commit('setAuthentication', true)
        // this.$router.replace({ name: 'DashBoard' })
      } catch (error) {
        console.log(error)
      }
      this.credentials = {}
    }
  }
}
</script>

<style scoped>
.row {
  height: 100vh;
  width: 100vw;
  overflow-y: hidden !important;
}
.container {
  text-align: left;
  padding-left: 40px;
}
h6 {
  font-size: 6vh;
  padding: 15px;
}
h3 {
  font-size: 6vh;
}
</style>
