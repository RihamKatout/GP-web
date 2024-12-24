import { createBrowserRouter, Link } from "react-router-dom";
import { HomePage, ShowcasePage } from "../pages";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { Button, MainBody } from "../styles/Global.styled";
import SweetNavbar from "../SweetTouches/component/SweetNavbar";
import CakeScene from "../components/Cake3D/CakeComponent";
import ProductPage from "../pages/ProductPage";
import ProfilePage from "../pages/ProfilePage";
import SweetCart from "../SweetTouches/Cart/SweetCart";
import Hero from "../SweetTouches/component/Hero";
import Navbar from "../SweetTouches/component/SweetNavbar";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/product",
    element: <ShowcasePage />,
  },
  {
    path: "/cart",
    element: (
      <SweetCart></SweetCart>
    ),
  },
  {
    path: "/cake",
    element: (
      <div>
        <SweetNavbar />
        <CakeScene></CakeScene>
      </div>
    ),
  },
  {
    path: "/sweettouches",
    element: (
      <MainBody>
        <Navbar />
        <Hero />
      </MainBody>
    ),
  },
  {
    path: "/profile",
    Component: ProfilePage,
  },
  {
    path: "/product/:id",
    Component: ProductPage,
  },
  {
    path: "*",
    element: (
      <MainBody>
        <h1>404 Not Found</h1>
        <Button>
          <Link to="/">Go Home</Link>
        </Button>
      </MainBody>
    ),
  },
]);

export default routerConfig;
