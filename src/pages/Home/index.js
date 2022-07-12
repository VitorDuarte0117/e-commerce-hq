import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (
        <main className="container hero">
            <img className="bg-img" alt="Comic books"></img>
            <div className="right_container">
                <h2 className="action-txt">
                    Veja todas as nossas incríveis hqs!
                </h2>
                <div className="large-box">
                    <button
                        className="large-btn"
                        onClick={() => {
                            navigate("/comics");
                        }}
                    >
                        Ver quadrinhos
                    </button>
                </div>
            </div>
        </main>
    );
}
