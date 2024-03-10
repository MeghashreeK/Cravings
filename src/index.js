import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Home from "./components/Home";
import Cart from "./components/Cart";
import UserContext from "./components/UserContext";
import indexStore from "./utils/indexStore";
import { Provider } from "react-redux";



const root = ReactDOM.createRoot(document.getElementById("root"));
const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {

    const name = "Megha";

    return (
        <div className="app">
            <Provider store={indexStore}>
                <Header />
                <Outlet />
            </Provider>
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
                element: <Home />,
            },
            {
                path: "/restaurants",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/FAQ",
                element: <FAQ />,
            },
            {
                path: "/cart",
                element: <Cart />,
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


