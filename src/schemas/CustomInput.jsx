import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="detailSectionName">{label}</label>

      <input

        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
          <div className="lineName"></div>
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};
export default CustomInput;
