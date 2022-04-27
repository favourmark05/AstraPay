<template>
  <div>
    <!-- <div class="wrapper"> -->
    <div class="side-bar text-center">
      <h1 class="text-center py-4 text-success">PC</h1>
      <router-link to="/dashBoard" class="link-list"
        ><i class="fa-solid fa-table-cells-large pr-3 text-danger"></i>
        DashBoard</router-link
      >
    </div>
    <div class="main-page">
      <div class="bg">
        <nav class="navbar navbar-expand-lg border-bottom navbar-light">
          <i class="fa-solid fa-bars pr-4 text-danger"></i>
          <router-link to="/dashBoard" class="navbar-brand admin">PEER COVER</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item px-3">
                <i class="fa-solid fa-bell text-secondary"></i>
              </li>
              <li class="nav-item admin" @click.prevent="checkUser(User)" >
                  <img :src="User.profile_img_url" alt="PI" srcset="" />
                 Hi,{{ User.lastname }}
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="marketing">
        <div class="container market" v-show="$route.name === 'DashBoard'">
          <div class="container px-5 py-3">
            <h2>Marketing Consultants</h2>
            <div class="float-right mb-4">
              <router-link
                to="/createMarketers"
                class="btn btn-success rounded-pill"
                >+ Add New Marketing Consultant</router-link
              >
            </div>
          </div>
          <div class="mt-3 py-2 px-4 mx-5 cover rounded border-bottom">
            <div>
              <input
                type="text"
                placeholder="Search"
                class="px-1 border-bottom"
                v-model="search"
              />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <table class="table mt-4">
              <thead>
                <tr class="text-center">
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone no</th>
                  <th scope="col">UserName</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center " v-for="marketer in marketerSearch" :key="marketer.ID" >
                  <!-- <router-link :to="{ name: 'marketerInfo', params: { marketing_consultant_id: marketer.marketing_consultant_id }}"> -->
                  <td> {{ marketer.name }} </td>
                  <td> {{ marketer.email }} </td>
                  <td>{{ marketer.phonenumber }}</td>
                  <td>{{ marketer.username }}</td>
                  <td><i class="fa-solid fa-trash text-danger" @click.prevent="deleteMarketer(marketer)" title="Delete Marketer " data-toggle="tooltip" data-placement="top"></i></td>
                  <td><router-link :to="{ name: 'marketerInfo', params: { marketing_consultant_id: marketer.marketing_consultant_id }}">
                    <i class="fa-solid fa-greater-than text-danger" title="View Marketer Information" data-toggle="tooltip" data-placement="top"></i>
                    </router-link></td>
                  <!-- </router-link> -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  //   components: 'dashBoard'
  data () {
    return {
      User: [],
      marketers: [],
      search: ''
    }
  },
  computed: {
    marketerSearch () {
      if (this.search) {
        return this.marketers.filter((marketer) => {
          return this.search.toLowerCase().split('').every(v => marketer.name.toLowerCase().includes(v))
        })
      } else {
        return this.marketers
      }
    }
  },
  created () {
    this.getMarketers()
  },
  mounted () {
    this.getUser()
    this.getMarketers()
  },
  methods: {
    async getUser () {
      try {
        const res = await this.$store.getters.getUser
        console.log(res)
        this.User = res
      } catch (error) {
        console.log(error)
      }
    },
    checkUser (User) {
      this.$router.push('/editMarketers', User)
    },
    getImage (images) {
      return images[0]
    },
    async getMarketers () {
      try {
        const res = await this.$axios.get('/marketers')
        this.marketers = res.data.marketers
        console.log(this.marketers)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteMarketer (marketer) {
      try {
        const res = await this.$axios.delete(`/marketers/${marketer.username}`)
        this.getMarketers()
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.admin {
  cursor: pointer;
}
.wrapper {
  height: 100%;
}
.side-bar {
  border-right: 2px solid rgba(212, 208, 208, 0.356);
  height: 100% !important;
  position: fixed;
  position: -webkit-sticky;
  width: 20%;
}
.main-page {
  padding-left: 20%;
}
.bg {
  background-color: white;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
}
img {
  height: 35px;
  width: 35px;
  border-radius: 100%;
  cursor: pointer;
  border: 2px solid gray;
}
/* .wrapper{
    display: grid ;
    grid-template-columns: 20% 80%;
} */
.marketing {
  height: 1200px;
  background-color: rgba(0, 255, 157, 0.247);
}
.market{
  height: 100%;
background-color: rgba(0, 255, 157, 0.247);
}
.link-list {
  text-decoration: none;
  list-style-type: none;
}
.cover {
  background-color: white;
  position: absolute;
  top: 200px;
  width: 70%;
}
input {
  margin-left: 430px;
  border: none;
  outline: none;
  width: 300px;
}
.fa-solid {
  cursor: pointer;
}
</style>
