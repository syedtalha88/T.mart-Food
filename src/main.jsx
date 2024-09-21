import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import Header from "./components/Header";
import { createBrowserRouter,RouterProvider , Outlet } from "react-router-dom";
import { CardWrapper}  from "./components/body";
import About from "./components/about";
import Error from "./components/error";
import Menu from "./components/Menu";
import { Provider } from "react-redux";
import appStore from "./components/appStore";
import Cart from "./components/Cart";
import Main from "./components/Main";
import Accounts from "./components/Accounts";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Payment from "./components/Payment";
import Footer from "./components/Footer";

let AppList = () => {
  return (
    <>
      <Provider store={appStore}>
      <Header />
  
      {/* <Outlet/> */}
      
      {/* <Footer/> */}
      </Provider>
    </>
  );
};



const AppRouter= createBrowserRouter([
  {
    path:"/T.mart-Food/",
    element:<AppList/>,
    children:[
      {
        path:"/T.mart-Food/",
        element:<Main/>

      },
      {
        path:"/T.mart-Food/about",
        element:<About/>,
      },
      {
        path:"/T.mart-Food/restaurants/:resId",
        element:<Menu/>,
      },
      {
        path:"/T.mart-Food/cart",
        element:<Cart/>,
      },
      {
        path:"/T.mart-Food/accounts",
        element:<Accounts/>
      },
      {
        path:"/T.mart-Food/cart/signup",
        element:<SignUp/>
      },
      {
        path:"/T.mart-Food/cart/signin",
        element:<SignIn/>
      }
      ,
      {
        path:"/T.mart-Food/cart/payment",
        element:<Payment/>
      }


    ],
    errorElement:<Error/>,
  },
  
])

// let root = ReactDOM.createRoot(document.getElementById("container"));
// root.render(<RouterProvider router={AppRouter}/>);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter}/>
  </React.StrictMode>,
)
