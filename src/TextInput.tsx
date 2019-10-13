import React from "react";

interface TextInputProps {
    id: string;
    label: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    name: string;
    error?: string;
}

const TextInput: React.FC<TextInputProps> = (props) => {
    let wrapperClass = "form-group";
    if (props.error && props.error.length > 0) {
        wrapperClass += " has-error";
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="field">
                <input onChange={props.handleChange}
                       id={props.id}
                       type="text"
                       name={props.name}
                       className="form-control"
                       value={props.value}
                />
            </div>
            {
                props.error && <div className="alert alert-danger">{props.error}</div>
            }
        </div>
    );
};

TextInput.defaultProps = {
  error: ""
} as Partial<TextInputProps>;

export default TextInput;