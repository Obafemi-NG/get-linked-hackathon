import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./variables.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import Register from "./pages/RegisterPage/Register";
import RootLayout from "./pages/RootLayout/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "contact-us",
          element: <ContactUsPage />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
