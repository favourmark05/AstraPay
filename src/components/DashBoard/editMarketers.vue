<template>
  <div class="container">
    <div >
      <div class="container px-5 py-3">
          <h2>View Marketing Consultant</h2>
      </div>
      <div class="justify-content-center">
          <span class="m-auto justify-content-center rounded-circle d-flex bg-success profile py-4 px-3 text-white"> {{ first }} . {{ second }} </span>
      </div>
      <div class="container pt-3 px-5">
          <div class="row">
          <div class="col-sm-3">
              <h4>PROFILE</h4>
              <hr>
          </div>
          <div class="col-sm-9">
              <form @submit.prevent="updateUserInfo()">
                  <div class="form-group row">
                    <label for="firstName" class="col-sm-2 col-form-label">FirstName</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control"  v-model="updateUser.firstname">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="lastName" class="col-sm-2 col-form-label">LastName</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" v-model="updateUser.lastname">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="username" class="col-sm-2 col-form-label">UserName</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" v-model="updateUser.username">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="username" class="col-sm-2 col-form-label">Bank Name</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" v-model="updateUser.bankname">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="username" class="col-sm-2 col-form-label">Bank Code</label>
                    <div class="col-sm-8">
                      <input type="number" class="form-control" v-model="updateUser.bankcode">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="username" class="col-sm-2 col-form-label">Account Number</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" v-model="updateUser.accountNumber">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="username" class="col-sm-2 col-form-label">Account Name</label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" v-model="updateUser.accountName">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="PhoneNumber" class="col-sm-2 col-form-label">Phone No.</label>
                    <div class="col-sm-8">
                      <input type="Number" class="form-control" v-model="updateUser.phone_number">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="email" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-8">
                      <input type="email" class="form-control" v-model="updateUser.email">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="Gender" class="col-sm-2 col-form-label">Gender</label>
                    <div class="col-sm-8">
                      <select name="" id="" class="form-control" v-model="updateUser.gender">
                        <option :value="0" disabled>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="address" class="col-sm-2 col-form-label">Address</label>
                    <div class="col-sm-8">
                      <textarea  class="form-control" rows="4" v-model="updateUser.address"></textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="address" class="col-sm-2 col-form-label"></label>
                    <div class="col-sm-8 py-3">
                      <button  class="form-control btn btn-success"> Update Marketer</button>
                    </div>
                  </div>
                </form>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      first: '',
      second: '',
      updateUser: {
        firstname: '',
        lastname: '',
        username: '',
        phone_number: '',
        gender: '',
        address: '',
        email: '',
        bankname: '',
        bankcode: '',
        accountNumber: '',
        accountName: '',
        marketingConsultantId: ''
      },
      User: []
    }
  },
  methods: {
    async getUser () {
      try {
        const res = await this.$store.getters.getUser
        this.User = res
        this.updateUser = this.User
        const firstLetter = this.User.firstname
        this.first = firstLetter.charAt(0)
        const lastLetter = this.User.lastname
        this.second = lastLetter.charAt(0)
        console.log(this.User)
      } catch (error) {
        console.log(error)
      }
    },
    updateUserInfo () {
      this.$axios.put('/marketers', {
        ...this.updateUser
      })
      this.$toastify({
        text: 'Marketer Registered Successfully',
        className: 'info',
        style: {
          background: 'green'
        }
      }).showToast()
    }
    // async register () {
    //   console.log(this.marketer)
    //   try {
    //     const res = await this.$axios.post('/marketers', {
    //       ...this.marketer
    //     })
    //     this.$toastify({
    //       text: 'Marketer Registered Successfully',
    //       className: 'info',
    //       style: {
    //         background: 'green'
    //       }
    //     }).showToast()
    //     console.log(res)
    //     this.marketer = ''
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  },
  mounted () {
    this.getUser()
  }

}
</script>

<style scoped>
.profile{
    height: 70px;
    width: 70px;
}
h3{
    font-size: 44px;
    color: white;
    /* margin: 10px !important; */
}
hr {
    border-bottom: 2px solid red;
    margin-right: 130px;
}
</style>
