import { useState } from "react";
import Card from "../card";
import stories from "../cardData";

function StoriesSection() {
  const[currenStoryIndex, setCurrentStoryIndex] = useState(0)
const newStory = () => {
  setCurrentStoryIndex(currenStoryIndex < stories.length -1   ? currenStoryIndex + 1 : 0 )
}
const oldStory = () => {
  setCurrentStoryIndex(currenStoryIndex > 0 ? currenStoryIndex - 1 : stories.length -1 )
}

  return (
    <div
      className="Stories"
      style={{ backgroundColor: "#1E2126", height: "100vh", }}
    >
      <div className="travelStoriesHeading">Travel Stories</div>
      <div
        className="heroTravelSection"
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div className="leftArrowTravelSection"  onClick={oldStory}>
          &lt;
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
        
            
            <Card

              story={stories[currenStoryIndex].comment}
              name={stories[currenStoryIndex].from}
              works={stories[currenStoryIndex].worksAt}
            />
      
        </div>

        <div
          className="rightArrowTravelSection"
          onClick={newStory}
          

        >
          &gt;
        </div>
      </div>
    </div>
  );
}

export default StoriesSection;
