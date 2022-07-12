import React, { useState, useEffect } from "react";
import Comic from "../../components/Comic";
import getAllComics from "../../services/api";
import Modal from "../../components/Modal";
import SearchBar from "../../components/SearchBar";
import useLoading from "../../components/useLoading";
import NextPrev from "../../components/NextPrev";

import "./styles.css";

export default function Comics({ setPage, setBuyContent }) {
    const { isLoading, setIsLoading, getLoading } = useLoading();
    const [comics, setComics] = useState([]);
    const [lastValue, setLastValue] = useState(120);
    const [search, setSearchValue] = useState("");
    const [hasModal, setHasModal] = useState(false);
    const [modalContent, setModalContent] = useState("");

    useEffect(() => {
        if (!isLoading) {
            setIsLoading(true);
            const result = getAllComics("comics", lastValue, search);
            result.then((response) => {
                const { results } = response.data.data;
                setIsLoading(false);
                if (results) setComics(results);
            });
        }
    }, [lastValue, setIsLoading, search]);

    const putModal = (comic) => {
        setHasModal(true);
        setModalContent(comic);
    };

    const getComics = () => {
        const comicsList = comics.map((comic) => {
            const { title, thumbnail, id } = comic;
            const price = comic.prices[0].price;
            const { path, extension } = thumbnail;
            const imgUrl = `${path}/portrait_incredible.${extension}`;
            return (
                <Comic
                    putModal={() => putModal(comic)}
                    key={id}
                    title={title}
                    url={imgUrl}
                    price={price}
                />
            );
        });
        if (comicsList.length <= 0)
            return (
                <p className="paragrafo">Sua busca não obteve resultados!</p>
            );
        return comicsList;
    };

    return (
        <main className="container">
            {hasModal ? (
                <Modal
                    event={setPage}
                    content={modalContent}
                    setHasModal={setHasModal}
                    setBuyContent={setBuyContent}
                />
            ) : null}
            <div className="container_comics row">
                <SearchBar
                    setSearch={setSearchValue}
                    setLastValue={setLastValue}
                />
                {isLoading ? getLoading() : getComics()}
            </div>
            {isLoading ? null : (
                <NextPrev lastValue={lastValue} setLastValue={setLastValue} />
            )}
        </main>
    );
}
