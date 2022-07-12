import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = ({ ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="mb-2">
            <input
                className={`form-control shadow-none ${
                    meta.touched && meta.error && "is-invalid"
                }`}
                {...field}
                {...props}
                autoComplete="off"
            />
            <div>
                <ErrorMessage
                    component="div"
                    name={field.name}
                    className="error"
                    style={{ color: "red", marginLeft: "1rem" }}
                />
            </div>
        </div>
    );
};

export default TextField;
