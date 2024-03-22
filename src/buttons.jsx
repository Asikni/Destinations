function Button({ children, btnClass, onClick, disabled }) {
  return (
    <div>
      <button className={btnClass} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
}

export default Button;
