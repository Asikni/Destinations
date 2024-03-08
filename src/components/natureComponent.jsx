function NatureComp() {
  return (
    <div className="NatureSectionOne">
      <div className="natureimage">
        <img
          src="natureimage1.svg"
          alt="nature image"
          style={{ width: "660px", height: "951px" }}
        ></img>
      </div>
      <div
        className="NatureDescription"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid green",
          width: "675px",
          height: "738px",
        }}
      >
        <div
          className="Nature"
          style={{
            padding: "0px 55px",
            marginTop: "50px",
            marginBottom: "150px",
          }}
        >
          Connect With Nature
        </div>
        <div
          className="description"
          style={{ width: "647px", height: "370px" }}
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
