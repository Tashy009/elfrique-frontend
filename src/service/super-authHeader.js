export default function SpHeader() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.token) {
    // for Node.js Express back-end
    return { "x-auth-token": user.token };
  } else {
    return {};
  }
}
