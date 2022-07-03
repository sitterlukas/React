import "./form-input.styles.scss";

interface Props {
  label: string;
}

const FormInput = ({ label, ...otherProps }: Props) => (
  <div className="group">
    <input className="form-input" {...otherProps} />
    {label && (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    )}
  </div>
);

export default FormInput;
