function NatureComp() {
  return (
    <div
      className="NatureSectionOne"
      style={{ backgroundColor: "#1E2126", height: "100vh" }}
    >
      <div className="natureimage">
        <img
          src="natureimage1.svg"
          alt="nature image"
          style={{ width: "600px", height: "630px", backgroundSize: "auto" }}
        ></img>
      </div>
      <div
        className="NatureDescription"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid green",
          width: "620px",
          height: "630px",
        }}
      >
        <div
          className="Nature"
          style={{
            padding: "0px 55px",
            marginTop: "50px",
            marginBottom: "80px",
          }}
        >
          Connect With Nature
        </div>
        <div
          className="description"
          style={{
            width: "550px",
            height: "370px",
            fontSize: "18px",
            fontWeight: "500",
            fontFamily: "Poppins",
            color: "#FFFEF5",
          }}
        >
          Known as Heaven on the Earth, Jammu & Kashmir is where Mother Nature
          has bestowed all her love. Enclosed by the Himalayas and Karakoram
          ranges; and festooned with verdant meadows, lush valleys, dense
          forests, splendid temples, this new union territory of India is a
          holiday destination to instantly fall in love with. Known as Heaven on
          the Earth, Jammu & Kashmir is where Mother Nature has bestowed all her
          love. Enclosed by the Himalayas and Karakoram ranges;.
        </div>
      </div>
    </div>
  );
}

export default NatureComp;
