import React from "react";
import BuyBtn from "../Buy";
import "./styles.css";

export default function Modal({ content, setHasModal, event, setBuyContent }) {
    const closeModal = (e) => {
        if (e.target.nodeName !== "SECTION" && e.target.nodeName !== "BUTTON")
            return;
        if (e.target.nodeName === "BUTTON" && e.target.className === "buy-btn")
            return;
        setHasModal(false);
    };

    const getDate = () => {
        const { dates } = content;
        const date = dates.find((date) => date.type === "focDate");
        const dateObj = new Date(date.date);
        const result = dateObj.toLocaleDateString("pt-BR", { timeZone: "UTC" });
        if (result === "Invalid Date") return;
        return result;
    };

    const { title, thumbnail, prices, issueNumber, pageCount } = content;
    const { path, extension } = thumbnail;
    const imgUrl = path + "/portrait_fantastic." + extension;
    const date = getDate();

    return (
        <section onClick={closeModal} className="cover">
            <div className="modal">
                <div className="modal-bar">
                    <button onClick={closeModal} className="close">
                        X
                    </button>
                </div>
                <div className="comic-box">
                    <img className="comic-img" src={imgUrl} alt={title} />
                    <div className="text-box">
                        <h2 className="comic-title" title={title}>
                            {title}
                        </h2>
                        <div className="info">
                            {issueNumber >= 1 ? (
                                <p className="info">Revista: n°{issueNumber}</p>
                            ) : (
                                <p className="info">Revista: n° indisponível</p>
                            )}
                        </div>

                        <div className="info">
                            {pageCount > 0 ? (
                                <p className="info">Páginas: {pageCount}</p>
                            ) : (
                                <p className="info">Páginas: indisponível</p>
                            )}
                        </div>
                        <div className="bottom-box">
                            {date ? (
                                <p className="date">Publicado: {date}</p>
                            ) : (
                                <p className="date">Publicado: indisponível</p>
                            )}
                            <BuyBtn
                                event={event}
                                price={new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(prices[0].price)}
                                setBuyContent={setBuyContent}
                                content={content}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
