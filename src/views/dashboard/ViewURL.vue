<template>
  <title>View URL | Elfrique</title>
  <dash-header />

  <!--------Main Content--------->
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Your Shortened Links</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/organiser/dashboard" class="routers"
              ><a>Home</a></router-link
            >
          </li>
          <li class="breadcrumb-item active">Short URLs</li>
          <li class="breadcrumb-item active">View URL</li>
        </ol>
      </nav>
    </div>
    <!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body card-table">
              <!--Table-->
              <table class="table datatable card-table-table" id="example">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Short URL</th>
                    <th scope="col">Alias</th>
                    <th scope="col">URL</th>
                    <th scope="col">Date Created</th>
                    <th scope="col">View Analytics</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody v-for="(con, idx) in content" :key="con.id">
                  <tr>
                    <th scope="row">{{ idx + 1 }}</th>
                    <td class="td-link">
                      <a :href="con.shortUrl">{{ con.shortUrl }}</a>
                    </td>
                    <td>{{ con.urlCode }}</td>
                    <td class="td-link">
                      <a :href="con.longUrl">{{ con.longUrl }}</a>
                    </td>
                    <td>{{ format_date(con.createdAt) }}</td>
                    <td class="td-link"><a href="#"></a></td>
                    <td>
                      <button type="button" class="table-delete-button">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <dash-footer />
</template>
<style scoped src="@/assets/css/dashStyle.css"></style>
<script>
import Header from "./dash-header.vue";
import Footer from "./dash-footer.vue";
import VendorService from "../../service/vendor.service";
import moment from "moment";
export default {
  name: "Elfrique",
  components: {
    "dash-header": Header,
    "dash-footer": Footer,
  },
  data() {
    return {
      title: "View Event",
      content: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (!this.loggedIn) {
      this.$router.push("/login");
    }

    VendorService.getAllUrls().then(
      (response) => {
        this.content = response.data.data;
        setTimeout(function () {
          $("#example").DataTable({
            dom: "Bfrtip",
            pageLength: 10,
            buttons: ["copy", "csv", "excel", "pdf", "print"],
          });
        }, 1000);
      },
      (error) => {
        this.message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thtis.successful = false;
        this.$store.dispatch("auth/logout");
        this.$router.push("/login");
      }
    );
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format("MM/DD/YYYY hh:mm");
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>