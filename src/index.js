import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
//import Grocery from "./components/Grocery";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Grocery=lazy(()=>import("./components/Grocery"));
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },

            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <Error />
    }

])

root.render(<RouterProvider router={AppRouter} />);