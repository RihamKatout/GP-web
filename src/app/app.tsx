import { Container, MainBody, Button } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { Theme } from "./utils/Theme";
import Showcase from "./components/Showcase";
import CakeScene from "./components/Cake3D/CakeComponent";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Shops from "./components/Shops/Shops";
import { Cart } from "./components/Cart/Cart";
import ShopNavbar from "./components/ShopNavbar";
import { ShopContextProvider } from "./context/ShopContext";
import RegisterPage from "./pages/RegisterPage";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainBody>
        <Container>
          <Showcase />
        </Container>
        <Link to="/cake">Click</Link>
      </MainBody>
    ),
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
    path: "/shops",
    element: (
      <MainBody>
        <ShopNavbar />
        <Shops />
      </MainBody>
    ),
  },
  {
    path: "/cart",
    element: (
      <MainBody>
        <ShopNavbar />
        <Cart />
      </MainBody>
    ),
  },
  {
    path: "/cake",
    element: (
      <MainBody>
        <CakeScene></CakeScene>
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
  }
]);

export function App() {
  return (
    <ThemeProvider theme={Theme}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ShopContextProvider>
            <RouterProvider router={router} />
          </ShopContextProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
