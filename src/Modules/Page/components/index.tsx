import { EventPageHeroSection } from "./EventPageHeroSection";
import locationIcon from "../../../assets/image/location.png";
import EventCard from "./EventCard";
import { Card } from "../../SharedComponents/Card";
import WordPlay from "../../SharedComponents/WordPlay";
import WordArray from "../../SharedComponents/WordArray";
import Slider from "../../SharedComponents/Slider";
import {
  AnimateText,
  TextDecoration,
} from "../../SharedComponents/TextDecoration";
import { CardSlider } from "./CardSlider";
import EventTicket from "./EventTicket";
import { CardAnimation } from "../../SharedComponents/CardAnimation";

const EventPageComponent = () => {
  return (
    <div>
      <div className="event-header">
        <div>LOGO</div>
        <div>extra data</div>
      </div>
      <EventPageHeroSection />
      {/* <div className="hero-overlay"></div> */}
      <div className="image-container">
        <div className="block" style={{ width: "400px" }}>
          <h1
            id="event-name"
            style={{
              paddingTop: "25px",
              fontFamily: "Roboto,sans-serif",
              letterSpacing: "1px",
            }}
          >
            Dream World in Jarkata
          </h1>
          <p style={{ paddingTop: "5px" }}>by Lorem, ipsum.</p>
          <p style={{ paddingTop: "10px", fontFamily: "Quicksand" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            sequi. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Nobis, sequi!
          </p>
          <p
            style={{
              paddingTop: "10px",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <img
              src={locationIcon}
              style={{
                fill: "white",
                height: "20px",
                width: "20px",
              }}
            ></img>
            Mumbai,MH
          </p>
        </div>
        <div
          className="block"
          style={{
            background: "whitesmoke",
            width: "255px",
            boxShadow: "0px 2px 38px rgba(246, 162, 67, 0.2)",
            height: "255px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="date-time-block"
            style={{
              fontWeight: "bolder",
              color: "rgb(0,0,0)",
              alignSelf: "flex-start",
              paddingLeft: "10px",
              paddingTop: "20px",
            }}
          >
            Date & Time
          </div>
          <div
            style={{
              color: " gray",
              fontSize: "14px",
              alignSelf: "flex-start",
              paddingLeft: "10px",
            }}
          >
            Saturday,Sep 14,2019 at 02:30 PM
          </div>
          <div
            style={{
              color: "#3b3ae9",
              fontWeight: "20px",
              fontSize: "14px",
              alignSelf: "flex-start",
              padding: "10px",
            }}
          >
            + Add to Calender
          </div>
          <div
            className="registration-btn"
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "8%",
              gap: "0.4rem",
            }}
          >
            <button
              style={{
                letterSpacing: "2px",
                backgroundColor: "#000eeaa6",
                color: "white",
                height: "38px",
                width: "220px",
                borderRadius: "8px",
              }}
            >
              Book Now!
            </button>
            <button
              style={{
                letterSpacing: "2px",
                border: "#000eeaa6 1px solid",
                color: "#000eeaa6",
                height: "38px",
                width: "220px",
                borderRadius: "8px",
              }}
            >
              Promoters
            </button>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "black", height: "500px" }}>
        {/* <Slider /> */}
        <AnimateText />
      </div>
      <div style={{ backgroundColor: "yellow", height: "500px" }}>
        <Card />
      </div>
      <div style={{ backgroundColor: "green", height: "500px" }}>
        {/* <WordArray /> */}
      </div>
      <div style={{ backgroundColor: "yellow", height: "500px" }}>
        {/* <CardSlider /> */}
      </div>
      <div style={{ backgroundColor: "green", height: "500px" }}>
        {/* <EventTicket /> */}
      </div>
      <div style={{ backgroundColor: "gray", height: "500px" }}>
        <CardAnimation />
      </div>
      <div style={{ backgroundColor: "green", height: "1000px" }}></div>
    </div>
  );
};

export default EventPageComponent;
