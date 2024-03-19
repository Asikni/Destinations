function TopHeading({children, headingClass}){
    return(
        <div className={headingClass}>
           {children}
        </div>
    )
}

export default TopHeading;