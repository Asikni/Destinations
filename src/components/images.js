

import Button from "../buttons";
import TopHeading from "../topHeading";


const images = [
  {
    0: "heroBgImageOne.svg",
    topHeading: (
      <TopHeading headingClass={"top-heading"}>
        Explore Kashmir's Beauty
      </TopHeading>
    ),
    mainHeadingOne: "Adventure ",
    mainHeadingTwo: " in Paradise",
    buttonOne: <Button btnClass={"btn-1"}>Find out more</Button>,
    // buttonTwo: <Button btnClass={"btn-2"} > Contact Us </Button>,
    showContactButton: true

  },
  {
    1: "hiddenimagethree.svg",
    topHeading: (
      <TopHeading headingClass={"top-heading"}>Beautiful Moutains</TopHeading>
    ),
    mainHeadingOne: "Lakes",
    mainHeadingTwo: " and Glaciers",
  },
  {
    2: "hiddenimagefour.jpg",
    topHeading: "",
    mainHeadingOne: "",
  },
  {
    3: "hiddenimagefive.jpg",
  },
];

export default images;
