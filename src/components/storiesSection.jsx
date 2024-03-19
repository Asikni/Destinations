import { useState, useEffect } from "react";
import Card from "../card";
import stories from "../cardData";

function StoriesSection() {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [nextStoryIndex, setNextStoryIndex] = useState(0);

  const newStory = () => {
    setTransitioning(true);
    setNextStoryIndex(
      currentStoryIndex < stories.length - 1 ? currentStoryIndex + 1 : 0
    );
  };

  const oldStory = () => {
    setTransitioning(true);
    setNextStoryIndex(
      currentStoryIndex > 0 ? currentStoryIndex - 1 : stories.length - 1
    );
  };

  useEffect(() => {
    if (transitioning) {
      const transitionTimeout = setTimeout(() => {
        setCurrentStoryIndex(nextStoryIndex);
        setTransitioning(false);
      }, 500);
      return () => clearTimeout(transitionTimeout);
    }
  });

  return (
    <div
      className="Stories"
      style={{ backgroundColor: "#1E2126", height: "100vh" }}
    >
      <div className="travelStoriesHeading">Travel Stories</div>
      <div
        className="heroTravelSection"
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <div className="leftArrowTravelSection" onClick={oldStory}>
          &lt;
        </div>
        <div
          className={`cardTemp ${transitioning ? "exiting" : ""}`}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            story={stories[currentStoryIndex].comment}
            name={stories[currentStoryIndex].from}
            works={stories[currentStoryIndex].worksAt}
          />
        </div>
        <div className="rightArrowTravelSection" onClick={newStory}>
          &gt;
        </div>
      </div>
    </div>
  );
}

export default StoriesSection;
