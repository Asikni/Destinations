function Button({ children, btnClass, onClick }) {
  return (
    <div>
      <button className={btnClass} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
