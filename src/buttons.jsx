function Button({children, btnClass}){
    return(
        <div>
            <button className={btnClass}>{children}</button>
        </div>
    )
}

export default Button;