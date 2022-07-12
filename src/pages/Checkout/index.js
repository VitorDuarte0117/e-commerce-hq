import { Notify } from "notiflix";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { Formik, Form } from "formik";
import TextField from "../../components/Textfield";
import * as Yup from "yup";
import FeedbackSuccess from "../../components/FeedbackSuccess";

export default function Checkout({ content }) {
    const [hasToChange, setHasToChange] = useState(false);
    const { title, thumbnail, prices } = content;
    const { path, extension } = thumbnail;

    useEffect(() => {
        window.addEventListener("beforeunload", alertUser);
        return () => {
            window.removeEventListener("beforeunload", alertUser);
        };
    }, []);

    const alertUser = (e) => {
        e.preventDefault();
        e.returnValue = "";
    };

    const confirmEvent = () => {
        setHasToChange(true);
    };

    const getConfirmScreen = () => {
        return <FeedbackSuccess />;
    };

    const validate = Yup.object({
        name: Yup.string().required("O campo de nome é obrigatório!"),
        email: Yup.string()
            .email("Email inválido!")
            .required("Preencha o campo de email!"),
        city: Yup.string().required("O campo de cidade é obrigatório!"),
        state: Yup.string().required("O campo de cidade é obrigatório!"),
        address: Yup.string().required("O campo de endereço é obrigatório!"),
        district: Yup.string().required("O campo de bairro é obrigatório!"),
        numberCard: Yup.string()
            .max(16, "Este campo deve ter no máximo 16 dígitos!")
            .min(16, "Este campo deve ter pelo menos 16 dígitos!")
            .required("Preencha o número do cartão de crédito!"),
        nameCard: Yup.string().required(
            "Preencha o nome do titular do cartão!"
        ),
        cardValidate: Yup.date().required("Campo obrigatório!"),
        CVV: Yup.string()
            .min(3, "Este campo deve ter pelo menos 3 dígitos!")
            .max(3, "Este campo deve ter no máximo 3 digitos!")
            .required("Campo obrigatório!"),
    });

    const getMainScreen = () => {
        return (
            <div className="expand-box">
                <div className="upper-box">
                    <img
                        width={width}
                        height={height}
                        src={getImgUrl()}
                        alt={title}
                    />
                    <div className="input-box">
                        <p className="buy-title">{title}</p>
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                city: "",
                                state: "",
                                address: "",
                                district: "",
                                numberCard: "",
                                nameCard: "",
                                cardValidate: "",
                                CVV: "",
                            }}
                            validationSchema={validate}
                            onSubmit={(values) => {
                                Notify.success(
                                    `${values.name}, sua compra de ${title} foi realizada com sucesso!`
                                );

                                confirmEvent();
                            }}
                        >
                            {(formik) => (
                                <Form>
                                    <p>Dados pessoais</p>
                                    <TextField
                                        name="name"
                                        type="text"
                                        placeholder="Nome completo"
                                    />
                                    <TextField
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                    <TextField
                                        name="city"
                                        type="text"
                                        placeholder="Cidade"
                                    />
                                    <TextField
                                        name="state"
                                        type="text"
                                        placeholder="Estado"
                                    />
                                    <TextField
                                        name="address"
                                        type="text"
                                        placeholder="Endereço, Nº"
                                    />
                                    <TextField
                                        name="district"
                                        type="text"
                                        placeholder="Bairro"
                                    />

                                    <p>Dados de pagamento</p>

                                    <TextField
                                        name="numberCard"
                                        mask="9999-9999-9999-9999"
                                        placeholder="Número do cartão"
                                        type="number"
                                    />

                                    <TextField
                                        name="nameCard"
                                        type="text"
                                        placeholder="Nome do titular do cartão"
                                    />
                                    <TextField
                                        label="Validade do Cartão:"
                                        name="cardValidate"
                                        type="month"
                                        placeholder="CVV"
                                    />
                                    <TextField
                                        label="CVV:"
                                        name="CVV"
                                        type="number"
                                        placeholder="CVV"
                                    />
                                    <div className="buy-price">
                                        Valor:
                                        <p>
                                            {new Intl.NumberFormat("pt-BR", {
                                                style: "currency",
                                                currency: "BRL",
                                            }).format(prices[0].price)}
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        className="confirm-btn"
                                    >
                                        Confirmar compra
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        );
    };

    const bodyWidth = document.querySelector("body").offsetWidth;

    const getImgUrl = () => {
        let size =
            bodyWidth > 1024 ? "/portrait_uncanny." : "/portrait_medium.";
        size = bodyWidth <= 500 ? "/portrait_medium." : size;
        return path + size + extension;
    };

    const getWidthHeight = () => {
        let width = bodyWidth > 1440 ? "300px" : "150px";
        let height = bodyWidth > 1440 ? "450px" : "225px";
        width = bodyWidth <= 500 ? "100px" : width;
        height = bodyWidth <= 500 ? "150px" : width;
        return { width, height };
    };

    const { width, height } = getWidthHeight();

    return (
        <main className="container">
            <div className="buy-container">
                {hasToChange ? getConfirmScreen() : getMainScreen()}
            </div>
        </main>
    );
}
