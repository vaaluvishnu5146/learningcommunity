import Cart from "../Pages/Cart";
import Courses from "../Pages/Courses";
import CoursesDetails from "../Pages/CoursesDetails";
import Login from "../Pages/Login";

const APP_ROUTES = [
  {
    name: "Login",
    path: "/",
    Component: Login,
  },
  {
    name: "Home",
    path: "/courses",
    Component: Courses,
  },
  {
    name: "Courses Details",
    path: "/courses/:id",
    Component: CoursesDetails,
  },
  {
    name: "Cart",
    path: "/cart",
    Component: Cart,
  },
];

export default APP_ROUTES;
