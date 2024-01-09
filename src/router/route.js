import { RouterProvider, createBrowserRouter } from "react-router-dom";

// ใช้ในการวาง route ต่างๆ ให้app รับ input เป็น arr ของ router Obj
// router Obj = {path:string, component:ReactElement | React Component}
const router = createBrowserRouter([
  {
    path: "/login",
    element: <h1>LoginPage</h1>,
  },
  {
    path: "/",
    element: <h1>HomePage</h1>,
  },
  {
    path: "/Profile",
    element: <h1>ProfilePage</h1>,
  },
  {
    // dynamic path parameter
    path: "/friend/:friendId",
    element: <h1>FriendPage with ID</h1>,
  },
  {
    path: "*",
    element: "page not found",
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
