import React from "react";
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux";
import CoinCreate from "./CoinCreate";
import stores from "./stores";

function App(){

    // starts from here
 return (
    <Provider store={stores}>
        <CoinCreate></CoinCreate>
    </Provider>

)

}




ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);