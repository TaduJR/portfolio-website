import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";
import NotFound from "@/components/NotFound";
import Home from "@/pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "*",
      element: (
        <NotFound
          title="404"
          message="The page you are looking for does not exist."
        />
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
