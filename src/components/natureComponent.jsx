function NatureComp() {
  return (
    <div
      className="NatureSectionOne"
      style={{
        backgroundColor: "#1E2126",
        height: "100vh",
        border: "1px solid red",
        width: "100vw",
      }}
    >
      <div className="natureimages"></div>
      <div
        className="natureDescription"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid green",
        }}
      >
        <div className="natureHeadingDescription" style={{ border: "1px solid blue" }}>
        <div className="Nature" >
          <p className="natureHeading">Connect With </p>
          <p className="natureHeading">Nature</p>
        </div>
        <div className="description" style={{ border: "1px solid blue" }}>
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
    </div>
  );
}

export default NatureComp;
