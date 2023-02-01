import { useState } from "react";
import { Badge } from "react-bootstrap";

export const Card = () => {
  
  return (
    <div style={{padding:10}}>
      <div className="event-card">
        <img
          style={{
            height: 220,
            width: 320,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
          src="https://www.acenet.edu/PublishingImages/Interior-Page-Heroes/2018ACE-1045.JPG?RenditionID=10"
          alt="event-image"
        />

        <div style={{ padding: 10 }}>
          <h4>Dream Event at Jarakata</h4>
          <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
            <div>
              <p>SEP</p>
              <h4>15</h4>
            </div>
            <div></div>
            <div>
              <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..</p>
            </div>
          </div>
        </div>
      </div>
      <Badge bg="secondary" style={{ position: "relative", top: "-325px" ,left:"10px",height:"20px",width:"auto"}}>
        Price : $100.0
      </Badge>
    </div>
  );
};
