import { createBrowserRouter, Link } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  ProductDetailsPage,
  ProfilePage,
  RegisterPage,
  ShowcasePage,
  ForgotPassword,
  CartPage,
  StorePage,
  StoreDashboardPage,
  WishlistPage,
} from "../pages";
import { Button, MainBody } from "../styles/Global.styled";
import CakeScene from "../components/Cake3D/CakeComponent";
import Hero from "../SweetTouches/component/Hero";
import Navbar from "../SweetTouches/component/SweetNavbar";
import { MainLayout } from "../components/Layout";
import ProtectedRoute from "./ProtectedRoute";
import { DashboardPage } from "../pages/admin/DashboardPage";

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
    path: "/dashboard",
    element: (
      <ProtectedRoute role="ADMIN">
        <DashboardPage></DashboardPage>
      </ProtectedRoute>
    ),
  },
  {
    path: "/cart",
    element: (
      <ProtectedRoute>
        <CartPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <ProtectedRoute>
        <WishlistPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/cake",
    element: (
      <MainLayout>
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
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/product/:id",
    Component: ProductDetailsPage,
  },
  {
    path: "/store/:id",
    Component: StorePage,
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
    path: "/store-dashboard/:id",
    element: (
      <ProtectedRoute role="STORE_MANAGER">
        <StoreDashboardPage />
      </ProtectedRoute>
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
