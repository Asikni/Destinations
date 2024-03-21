function ContactDetails({ name, placeholder,type,classNameOne,classNameTwo,classNameThree }) {
  return (
    <>
      <div className={classNameOne}>{name}</div>
      <form className={classNameTwo}>
        <input type={type} placeholder={placeholder} />{" "}
      </form>
      <div className={classNameThree}></div>
    </>
  );
}

export default ContactDetails;
