export class Router{
    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event;
        event.preventDefault();
      
        window.history.pushState({}, "", event.target.href);
      
        this.handle();
      }

      handle() {
        const body = document.querySelector("body")
        const { pathname } = window.location;
        const route = this.routes[pathname] || this.routes[404];
        fetch(route)
          .then((data) => data.text())
          .then((html) => {
            document.querySelector("#app").innerHTML = html;
          });

          if(pathname === "/universe"){
            body.classList.toggle("bg2")
          } else{
            body.classList.remove("bg2")
          }
          
          if(pathname === "/exploration"){
            body.classList.toggle("bg3")
          } else{
            body.classList.remove("bg3")
          }
      }
}