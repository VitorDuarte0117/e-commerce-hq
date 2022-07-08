import "./styles.css";

export default function Home() {
    return (
        <main className="container hero">
            <div className="bg-img">
                <h1>O melhor dos quadrinhos está aqui!</h1>
            </div>
            <div className="right_container">
                <h2 className="action-txt">
                    Veja todos as nossas incríveis hqs!
                </h2>
                <div className="large-box">
                    <button className="large-btn" onClick={() => {}}>
                        Ver os quadrinhos!
                    </button>
                    <span className="first"></span>
                    <span className="second"></span>
                </div>
            </div>
        </main>
    );
}
