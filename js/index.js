const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  "/": "/pages/home.html",
  "/features": "/pages/features.html",
  "/reviews": "/pages/reviews.html",
  "/faq": "/pages/faq.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes["/"];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

















