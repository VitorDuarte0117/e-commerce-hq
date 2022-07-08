import "./styles.css";

export default function Home() {
    return (
        <main className="container hero">
            <div className="bg-img">
                <h1>As melhores histórias em quadrinhos</h1>
            </div>
            <div className="right_container">
                <h2 className="action-txt">
                    Veja todas as nossas incríveis hqs
                </h2>
                <div className="large-box">
                    <button className="large-btn" onClick={() => {}}>
                        Buscar
                    </button>
                    <span className="first"></span>
                    <span className="second"></span>
                </div>
            </div>
        </main>
    );
}
