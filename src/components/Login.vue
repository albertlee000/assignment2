<template>
  <div id="app1" class="hero">
    <div class = "loginFrame">
      <el-form ref = "loginForm" :model = "user" :rules = "rules" status-icon label-position = "left" label-width = "0px" class = "login-container">
        <el-form-item label="Username" prop = "name">
          <el-input type = "text" v-model = "user.name" auto-complete = "off" placeholder = "Enter username"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop = "pw">
          <el-input type = "password" v-model = "user.pw" auto-complete = "off" placeholder = "Enter password"></el-input>
        </el-form-item>

        <el-form-item style = "width:100%;">
          <el-button type = "primary" style = "width:100%;" icon="el-icon-circle-check" @click="login" >Login</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>


</template>

<script>
  import BookService from '@/services/bookservice'
  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex);
  let users = [];
  var account;
  var loginStatus = false;
  export default {
    name: 'Login',
    getUserName:function () {
      return account
    },
    data() {
      return {
        user:{},

        rules: {
          name :[
            {required: true, message: 'Username is required',trigger: 'blur'}
          ],
          pw: [
            {required: true,message: 'Password is required', trigger: 'blur'}
          ]
        },
        checked: false

      };

    },
    created () {
      this.loadUsers()

    },
    methods: {
      login: function () {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            for(var i =0;i<this.users.length;i++) {
              if (this.user.name === this.users[i].account && this.user.pw === this.users[i].psw) {
                loginStatus = true
                account = this.user.name
              }
            }
            if (loginStatus === true) {
              this.$notify({
                type: 'success',
                message: 'Welcome you,' + this.user.name + '!',
                duration: 3000,
              });
              this.$router.replace('/home')
              this.$store.commit('$_setStorage', {currentUser: this.user.name})
              this.$store.commit('$_setLogin', '1')
            }
            else {
              this.$message({
                type: 'error',
                message: 'Username or password is incorrect!',
                showClose: true
              })
            }
          }
          else{
            return false
          }
        })
      },
      loadUsers: function () {
        BookService.fetchUsers()
          .then(response => {
            // JSON responses are automatically parsed.
            this.users = response.data;
            console.log(this.users)

          })
          .catch(error => {
            this.errors.push(error);
            console.log(error)
          })
      }
    }
  }
</script>

<style>

  .login-container {
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
  }

</style>
