import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Header from "./components/Header";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
    const [page, setPage] = useState("comics");
    const [buyContent, setBuyContent] = useState("");

    return (
        <div className="App">
            <BrowserRouter>
                <Header page={page} setPage={setPage} />
                <Routes>
                    <Route path="/" element={<Home setPage={setPage} />} />
                    <Route
                        path="/comics"
                        element={
                            <Comics
                                setBuyContent={setBuyContent}
                                setPage={setPage}
                            />
                        }
                    />
                    <Route
                        path="/buy"
                        element={<Checkout content={buyContent} />}
                    />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
