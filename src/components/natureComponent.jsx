function NatureComp() {
  return (
    <div
      className="NatureSectionOne"
      style={{ backgroundColor: "#1E2126", height: "100vh", border:"1px solid red" }}
    >
      <div className="natureimage">
        <img
          className="natureimage1"
          src="natureimage1.svg"
          alt="nature image"
        ></img>
      </div>
      <div
        className="NatureDescription"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid green",
          // width: "620px",
          // height: "630px",
        }}
      >
        <div className="Nature">
          <p className="natureHeading">Connect With </p>
          <p className="natureHeading">Nature</p>
        </div>
        <div className="description">
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
