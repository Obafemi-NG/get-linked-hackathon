import "./App.css";

// imported react router components
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// imported pages
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Register from "./pages/RegisterPage/Register";
import RootLayout from "./pages/RootLayout/RootLayout";

// imported css for variables
import "./variables.css";

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
      ],
    },
    {
      path: "contact-us",
      element: <ContactUsPage />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
