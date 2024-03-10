function Card({ story, name, works }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: "#3F3D56",
        width: "550px",
        height: "330px",
        marginTop: "100px",
        borderRadius: "11px",
       
      }}
    >

        <div
          style={{
            fontSize: "19px",
            fontWeight: "500",
            color: "#FFFFFF",
            padding: "80px 100px 40px 100px",
            textAlign: "center",
          }}
        >
          {story}
        </div>
        <div
          style={{
            fontSize: "22px",
            fontWeight: "500",
            color: "#FFA90F",
            textAlign: "center",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: "22px",
            fontWeight: "500",
            color: "#FFA90F",
            textAlign: "center",
          }}
        >
          {works}
        </div>
     
    </div>
  );
}

export default Card;
