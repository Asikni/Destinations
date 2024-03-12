import Card from "../card";
import stories from "../cardData";

function StoriesSection() {
  return (
    <div
      className="Stories"
      style={{ backgroundColor: "#1E2126", height: "100vh", border:"1px dotted cyan" }}
    >
      <div className="travelStoriesHeading"

      >
        Travel Stories
      </div > 
     <div className="heroTravelSection"style={{display:"flex", flexDirection:"row",  alignItems:"center"}}>
              
     <div
          className="leftArrowTravelSection"
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
          className="rightArrowTravelSection"
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
