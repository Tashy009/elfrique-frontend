<template>
    <title>404 Error - Not Found | Elfrique</title>
        <div class="erroe_page_wrapper">
            <div class="errow_wrap">
                <div class="container text-center">
                    <img class="mainLogo" src="@/assets/images/logo.png">
                    <div class="error_heading  text-center">
                        <h3 class="headline font-danger theme_color_6">404</h3>
                    </div>
                    <div class="col-md-8 offset-md-2 text-center">
                        <p>The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.</p>
                    </div>
                    <div class="error_btn  text-center mt-3">
                        <router-link class="routers" to="/">
                            <a class="default_btn theme_bg_6">
                                <BUtton>
                                    Back Home
                                </BUtton>
                            </a>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </template>
    <style scoped src="@/assets/css/style.css"></style>
    <script>
        export default {
          mounted(){
            window.scrollTo(0,0)
          }
        }
    </script>