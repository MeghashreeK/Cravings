import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


// To be Build:
// Header
// -Logo
// -NavItems
// Body
// -SearchBar
// -SearchButton
// -RestaurantContainer
//    >RestaurantCards
// Footer
// -Copyright
// -Links
// -Address
// -Contact

const root = ReactDOM.createRoot(document.getElementById("root"));
/* -----------------------------HEADER-------------------------------------------- */

/* -----------------------------BODY---------------------------------------------- */




/* -----------------------------SWIGGY API---------------------------------------------- */



/* -----------------------------END OF SWIGGY API---------------------------------------------- */


/* -----------------------------ROOT---------------------------------------------- */
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};
root.render(<AppLayout />);