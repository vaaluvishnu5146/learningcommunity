import Cart from "../Pages/Cart";
import Courses from "../Pages/Courses";
import CoursesDetails from "../Pages/CoursesDetails";
import Login from "../Pages/Login";
import Dashboard from "../Dashboard/Pages/index";
import Home from "../Pages/Home";
import CreateUser from "../Dashboard/Pages/CreateUser";
import UpdateUser from "../Dashboard/Pages/UpdateUser";
import CreateCategory from "../Dashboard/Pages/CreateCategory";
import UpdateCategory from "../Dashboard/Pages/UpdateCategory";

const APP_ROUTES = [
  {
    name: "Login",
    path: "/login",
    Component: Login,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    Component: Dashboard,
    Children: [
      {
        name: "Create Users",
        path: "/dashboard/",
        Component: CreateUser,
      },
      {
        name: "Update User",
        path: "updateUser",
        Component: UpdateUser,
      },
      {
        name: "Create Category",
        path: "createCategory",
        Component: CreateCategory,
      },
      {
        name: "Update Category",
        path: "updateCategory",
        Component: UpdateCategory,
      },
    ],
  },
  {
    name: "home",
    path: "/",
    Component: Home,
    Children: [
      {
        name: "Courses",
        path: "courses",
        Component: Courses,
      },
      {
        name: "Courses Details",
        path: "courses/:id",
        Component: CoursesDetails,
      },
      {
        name: "Cart",
        path: "cart",
        Component: Cart,
      },
    ],
  },
];

export default APP_ROUTES;
