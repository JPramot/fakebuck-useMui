import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import FriendPage from "../pages/FriendPage";
import AppLayout from "../layout/AppLayout";
import FriendProfileWithId from "../pages/FriendProfileWithId";
import ProtectRoute from "./ProtectRoute";
import RedirectRoute from "./RedirectRoute";

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
    element: (
      <RedirectRoute>
        <LoginPage />
      </RedirectRoute>
    ),
  },
  {
    path: "/",
    element: (
      <ProtectRoute>
        <AppLayout />
      </ProtectRoute>
    ),
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
    path: "/friend",
    element: <FriendPage />,
  },
  {
    // dynamic path parameter จะไปเป็นชื่อ key ของ obj ที่ return มาจาก  Hook useParam()
    path: "/friend/:friendId",
    element: <FriendProfileWithId />,
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

/*
 Component
    <Link to='/'>
    <Navigate to='/'>
    <Outlet/>

 Hook
    useNavigate()=> navigate('/')
    useParams()=> paathParamObj

 Setup
    Fn : creeeateBrowserRouter(Arr<RouterObj>)
    Component : <RouterProviger route={route}/>
*/
