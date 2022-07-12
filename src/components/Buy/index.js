import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function BuyBtn({ price, event, setBuyContent, content }) {
    const navigate = useNavigate();
    return (
        <div className="buy-box">
            <p className="price">{price}</p>
            <button
                onClick={() => {
                    setBuyContent(content);
                    event("buy");
                    navigate("/buy");
                }}
                className="confirm-btn"
            >
                Comprar
            </button>
        </div>
    );
}
