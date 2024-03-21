function ContactDetails({ name, placeholder,type,classNameOne,classNameTwo,classNameThree, handleChange }) {
  return (
    <>
      <div className={classNameOne}>{name}</div>
      <form className={classNameTwo}>
        <input type={type} placeholder={placeholder} onChange={handleChange} />{" "}
      </form>
      <div className={classNameThree}></div>
    </>
  );
}

export default ContactDetails;
