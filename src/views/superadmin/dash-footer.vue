<template>
  <!--------Footer--------->
  <footer id="footer" class="footer">
      <div class="copyrightDash">
          Copyright &copy;<span id="autodate"></span> <strong><span>Elfrique</span></strong>. All Rights Reserved
      </div>
  </footer>
  <!--------Back To Top--------->
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
  export default {
    mounted(){
      window.scrollTo(0,0)

      //Copyright Date
      function newDate() {
        return new Date().getFullYear();
      }
      document.onload = document.getElementById("autodate").innerHTML = newDate();
    }
  }
</script>