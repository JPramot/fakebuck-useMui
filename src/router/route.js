import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import FriendPage from "../pages/FriendPage";
import AppLayout from "../layout/AppLayout";

// ใช้ในการวาง route ต่างๆ ให้app รับ input เป็น arr ของ router Obj
// router Obj = {path:string, component:ReactElement | React Component}
// const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/",
//     element: <AppLayout/>,
//   },
//   {
//     path: "/Profile",
//     element: <ProfilePage />,
//   },
//   {
//     // dynamic path parameter
//     path: "/friend",
//     element: <FriendPage/>,
//   },
//   {
//     // dynamic path parameter
//     path: "/friend/:friendId",
//     element: <h1>Friend with ID</h1>,
//   },
//   {
//     path: "*",
//     element: "page not found",
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "friend",
        element: <FriendPage />,
      },
    ],
  },
  {
    // dynamic path parameter
    path: "/friend",
    element: <FriendPage />,
  },
  {
    // dynamic path parameter
    path: "/friend/:friendId",
    element: <h1>Friend with ID</h1>,
  },
  {
    path: "*",
    element: "page not found",
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
