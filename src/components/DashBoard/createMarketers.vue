<template>
  <div class="container">
      <div class="container px-5 py-3">
        <h2 class="pb-5">Register Marketing Consultant</h2>
        <form @submit.prevent="register()">
          <div class="form-group row">
          <label for="firstName" class="col-sm-2 col-form-label">addedBy</label>
          <div class="col-sm-5">
            <input type="text" class="form-control"  v-model="marketer.addedBy">
          </div>
        </div>
        <div class="form-group row">
          <label for="firstName" class="col-sm-2 col-form-label">FirstName</label>
          <div class="col-sm-5">
            <input type="text" class="form-control"  v-model="marketer.firstname">
          </div>
        </div>
        <div class="form-group row">
          <label for="lastName" class="col-sm-2 col-form-label">LastName</label>
          <div class="col-sm-5">
            <input type="text" class="form-control"  v-model="marketer.lastname">
          </div>
        </div>
        <div class="form-group row">
          <label for="username" class="col-sm-2 col-form-label">UserName</label>
          <div class="col-sm-5">
            <input type="text" class="form-control"  v-model="marketer.username">
          </div>
        </div>
        <div class="form-group row">
          <label for="PhoneNumber" class="col-sm-2 col-form-label">Phone No.</label>
          <div class="col-sm-5">
            <input type="Number" class="form-control"  v-model="marketer.phonenumber">
          </div>
        </div>
        <div class="form-group row">
          <label for="email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-5">
            <input type="email" class="form-control"  v-model="marketer.email">
          </div>
        </div>
        <div class="form-group row">
          <label for="Gender" class="col-sm-2 col-form-label">Gender</label>
          <div class="col-sm-5">
            <select name="" id="" class="form-control"  v-model="marketer.gender">
              <option >Select Gender</option>
              <option >Male</option>
              <option >Female</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="address" class="col-sm-2 col-form-label">Address</label>
          <div class="col-sm-5">
            <textarea  class="form-control" rows="4" v-model="marketer.address"></textarea>
          </div>
        </div>
        <div class="form-group row">
          <label for="address" class="col-sm-2 col-form-label"></label>
          <div class="col-sm-5 py-3">
            <button  class="form-control btn btn-success" rows="4"> Create Marketer</button>
          </div>
        </div>
      </form>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      User: [],
      marketer: {
        addedBy: '',
        firstname: '',
        lastname: '',
        username: '',
        phonenumber: '',
        email: '',
        gender: '',
        address: ''

      }
    }
  },
  mounted () {
    this.getUser()
  },
  methods: {
    async register () {
      console.log(this.marketer)
      try {
        const res = await this.$axios.post('/marketers', {
          ...this.marketer
        })
        this.$toastify({
          text: 'Marketer Registered Successfully',
          className: 'info',
          style: {
            background: 'green'
          }
        }).showToast()
        console.log(res)
        this.marketer = ''
      } catch (error) {
        console.log(error)
      }
    },
    async getUser () {
      try {
        const res = await this.$store.getters.getUser
        this.User = res
        console.log(this.User)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>

</style>
