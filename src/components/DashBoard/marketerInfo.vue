<template>
  <div>
  <div class="container py-5 px-5 text-center" v-for="market in marketer" :key="market">
      <h3 class="pb-5"> Personal Information for {{ market.name }} </h3>
    <div class="row">
        <div class="col-sm-2"></div>
        <div class="col text-left bg-white py-3 rounded shadow">
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-3 col-form-label ">Name</label>
                <div class="col-sm-7">
                <h5> {{ market.name }} </h5>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-3 col-form-label">FirstName</label>
                <div class="col-sm-7">
                <h5> {{ market.firstname }} </h5>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-3 col-form-label">LastName</label>
                <div class="col-sm-7">
                <h5> {{ market.lastname }} </h5>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-3 col-form-label">Gender</label>
                <div class="col-sm-7">
                <h5> {{ market.gender }} </h5>
                <h5 v-show="market.gender == ''"> Not Updated </h5>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-3 col-form-label">Added By</label>
                <div class="col-sm-7">
                <h5> {{ market.added_by }} </h5>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-3 col-form-label">Date Created</label>
                <div class="col-sm-7">
                <h5> {{ market.date_created }} </h5>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
                <div class="col-sm-7">
                <h5> {{ market.email }} </h5>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-3 col-form-label">FCM Token</label>
                <div class="col-sm-7">
                <h5> {{ market.fcm_token }} </h5>
                <h5 v-show="market.fcm_token == ''"> Not Updated </h5>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-3 col-form-label">Bank Name</label>
                <div class="col-sm-7">
                <h5> {{ market.bankname }} </h5>
                <h5 v-show="market.bankname == ''"> Not Updated </h5>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-3 col-form-label">Account Number</label>
                <div class="col-sm-7">
                <h5> {{ market.account_number }} </h5>
                <h5 v-show="market.account_number == ''"> Not Updated </h5>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-3 col-form-label">Account Name</label>
                <div class="col-sm-7">
                <h5> {{ market.account_name }} </h5>
                <h5 v-show="market.account_name == ''"> Not Updated </h5>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-3 col-form-label">User Name</label>
                <div class="col-sm-7">
                <h5> {{ market.username }} </h5>
                <h5 v-show="market.username == ''"> Not Updated </h5>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-3 col-form-label">Phone Number</label>
                <div class="col-sm-7">
                <h5> {{ market.phonenumber }} </h5>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Marketers ID</label>
                <div class="col-sm-10">
                <h5> {{ market.marketing_consultant_id }} </h5>
                </div>
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
      marketer: {
        marketing_consultant_id: ''
      }
    }
  },
  methods: {
    async getMarketers () {
      try {
        const res = await this.$axios.get(`/marketers/${this.marketer.marketing_consultant_id}`)
        this.marketer = res.data.marketer
        console.log(this.marketer, 'yes')
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted () {
    this.marketer.marketing_consultant_id = this.$route.params.marketing_consultant_id
    this.getMarketers()
    console.log(this.$route)
  }
}
</script>

<style>
</style>
