import { useNavigate } from "react-router-dom";
import "./styles.css";
import feedbackSvg from "../../assets/img/feedback.svg";

const FeedbackSuccess = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="feedback_container">
                <img className="feedback-svg" src={feedbackSvg} alt="" />
                <span className="feedback-text">
                    Agradecemos pela sua compra!
                </span>
                <button
                    onClick={() => {
                        navigate("/comics");
                    }}
                    type="button"
                    className="continue-btn"
                >
                    Continuar comprando
                </button>
            </div>
        </>
    );
};

export default FeedbackSuccess;
