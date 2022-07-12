import React from "react";
import "./styles.css";

export default function Comic({ title, url, putModal, price }) {
    return (
        <div onClick={putModal} className="comic" title={title}>
            <img width="216px" height="324px" src={url} alt={title} />
            <p className="title">{title}</p>
            <p className="title">
                {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(price)}
            </p>
        </div>
    );
}
