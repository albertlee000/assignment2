<template>
  <div id="app1" class="hero">
    <h1 class="vue-title">World of Book</h1>

    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i>Welcome to the Book Community</i></b>
          <p style="font-size:20px">Here are ALL of YOUR book friends</p>
          <p style="font-size:20px">Enjoy books with us</p>
          <p style="font-size:20px">Come with us to <a href ="#/books">ENTER</a>  this amazing world</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
