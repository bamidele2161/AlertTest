import Select from "../SelectV2/Select";
import { IFormInputProps } from "../../interfaces/Global";
import "./style.css";
const FormInput = ({
  className,
  label,
  type,
  id,
  name,
  onChange,
  onBlur,
  shortP,
  icon,
  placeholder,
  required,
  disabled,
  defaultValue,
  error,
  selectOptions,
  keyPropertyName,
  itemPropertyName,
  valuePropertyName,
}: IFormInputProps) => {
  return (
    <div className={`${error ? "" : ""} ${className}`}>
      {label && (
        <label htmlFor={id} className="labelClassName">
          <span>{label}</span>
          {required ? <em className="required"> * </em> : ""}{" "}
        </label>
      )}

      <div className="input">
        {icon && <span>{icon}</span>}
        {type === "cSelect" ? (
          <Select
            id={id}
            options={selectOptions}
            selectedOption={defaultValue}
            setSelectedOption={(option: any) =>
              onChange &&
              onChange({
                target: {
                  name: id,
                  value: option,
                },
              })
            }
            errors={error}
            placeholder={placeholder}
            keyPropertyName={keyPropertyName}
            itemPropertyName={itemPropertyName}
            valuePropertyName={valuePropertyName}
          />
        ) : (
          <>
            <input
              id={id}
              name={name}
              type={type}
              onChange={onChange}
              onBlur={onBlur}
              className="form-controls"
              placeholder={placeholder}
              disabled={disabled}
              defaultValue={defaultValue}
            />
          </>
        )}
      </div>
      {error && <p className="errorMsg">{error}</p>}
      {shortP && <p className="shortP">{shortP}</p>}
    </div>
  );
};

export default FormInput;
