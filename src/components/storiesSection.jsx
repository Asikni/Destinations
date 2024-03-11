import Card from "../card";
import stories from "../cardData";

function StoriesSection() {
  return (
    <div
      className="Stories"
      style={{ backgroundColor: "#1E2126", height: "100vh" }}
    >
      <div
        style={{
          fontFamily: "Montserrat",
          fontSize: "60px",
          fontWeight: "700",
          color: "#FFA90F",
          textAlign: "center",
          paddingTop: "30px",
        }}
      >
        Travel Stories
      </div > 
     <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
              
     <div
          className="leftarrow"
          style={{
            fontFamily: "Montserrat",
            fontSize: "100px",
            fontWeight: "300",
            color: "#FFA90F",
            marginTop:"80px"
          }}
        >
          &lt;
        </div>
      <div style={{display:'flex', justifyContent:"center"}}>
        {stories.map((story, index) => (
          <Card
            key={index}
            story={story.comment}
            name={story.from}
            works={story.worksAt}
          />
        ))}
      </div>

        <div
          className="rightarrow"
          style={{
            fontFamily: "Montserrat",
            fontSize: "100px",
            fontWeight: "300",
            color: "#FFA90F",
            marginTop:"60px"
          }}
        >
          &gt;
        </div>
        
      </div>
    </div>
  );
}

export default StoriesSection;
