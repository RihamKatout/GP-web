import { createBrowserRouter, Link } from "react-router-dom";
import { HomePage, LoginPage, ProductPage, ProfilePage, RegisterPage, ShowcasePage ,ForgotPassword} from "../pages";
import { Button, MainBody } from "../styles/Global.styled";
import SweetNavbar from "../SweetTouches/component/SweetNavbar";
import CakeScene from "../components/Cake3D/CakeComponent";
import SweetCart from "../SweetTouches/Cart/SweetCart";
import Hero from "../SweetTouches/component/Hero";
import Navbar from "../SweetTouches/component/SweetNavbar";
import { MainLayout } from "../components/Layout";

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
    path: "/forgot-password",
    Component: ForgotPassword,
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
      <MainLayout>
       <SweetNavbar />
       <SweetCart></SweetCart>
      </MainLayout>
    ),
  },
  {
    path: "/cake",
    element: (
      <MainLayout>
        <SweetNavbar />
        <CakeScene></CakeScene>
      </MainLayout>
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
    path: "/shops",
    element: (
      <MainBody>
        <Navbar />
        <Hero />
      </MainBody>
    ),
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
