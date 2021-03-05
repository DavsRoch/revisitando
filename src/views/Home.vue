<template>
<div>
  <el-header>
    <el-menu :default-active="getActive" class="el-menu-demo navbar-custom" mode="horizontal">
      <div class="itens-menu">
        <span class="logo"><img class="icon-menu" src="../assets/icons/outline_date_range_black_18dp.png" >Revisitando</span>
        <span class="line"></span>
        <el-menu-item index="1">Home</el-menu-item>
        <el-menu-item index="2" v-on:click="$router.push({name: 'Registros'})">Registros</el-menu-item>
        <el-menu-item index="2"> Hoje</el-menu-item>
      </div>
    </el-menu>
  </el-header>
  <el-container id="home-page">
    <el-main>
      <el-row>
        <el-col :sm="12" :md="12" :lg="12" :xl="12" >
          <div><img class="image-main" src="../assets/images/escritorio.png"></img></div>
          <div><span</div>
        </el-col>
        <el-col :sm="12" :md="12" :lg="10" :xl="10">
          <span class="home-page-title">Revisitando</span>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</div>
</template>
<script>
  export default {
    // data() {
    //   return {
    //   };
    // },
    methods: {
      // getActive(){
        // if (this.$route.path === '/')
      // }
    }
  }
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

  #home-page {
    max-width: 1600px;
    margin: 0 auto;
    padding-left: 55px;
    padding-right: 55px;
    width:100%
  }
  .el-header {
  padding: 0;
}

.navbar-custom {
    padding-left: 20px;
}

.home-page-title {
    font-family: 'Open Sans', sans-serif;
    font-size: 70px;
    text-align: center;
    font-weight: 500;
    margin-left: 80px;
    position: fixed;
    margin-top: 150px;
}

.image-main {
  height: 600px;
  width: 670px;
  position: relative;
  background-color: #42b983;
  border: 20px solid rgb(71, 183, 131, 0.3);
  padding: 10px;
  box-shadow: 20px -25px rgb(71, 183, 131, 0.3);
  margin-top: 88px;
}

.home-page-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 21px;
  font-weight: 500;
  max-width: 900px;
  text-align: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
}
  .media-logo {
    position: absolute;
    display: grid;
    top: 5px;
  }
  .itens-menu {
    max-width: 1600px;
    margin: 0 auto;
    padding-left: 55px;
    padding-right: 55px;
    left: 30px;
    border: none;
  }
  .icon-menu {
    position: relative;
    top: 3px;
  }
  .line {
    border-right: 1px solid black;
  }

  .el-main {
    padding: 0
  }

</style>
