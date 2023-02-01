import arrowIcon from "../../../assets/image/arrow.png";

const cardArray = [
  {
    image:
      "https://www.acenet.edu/PublishingImages/Interior-Page-Heroes/2018ACE-1045.JPG?RenditionID=10",
  },
  {
    image:
      "https://www.acenet.edu/PublishingImages/Interior-Page-Heroes/2018ACE-1045.JPG?RenditionID=10",
  },
  {
    image:
      "https://www.acenet.edu/PublishingImages/Interior-Page-Heroes/2018ACE-1045.JPG?RenditionID=10",
  },
];
export const CardSlider = () => {
  return (
    <div className="card-body">
      {cardArray.map((card: any) => (
        <div className="slide-container">
          <div className="card">
            <div className="image-content">
              <div className="card-image">
                <img
                  src={card.image}
                  alt="event-imageF"
                  className="card-img"
                />
              </div>
              <img
                className="prev-arrow"
                src={arrowIcon}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 20,
                  rotate: "180deg",
                }}
              />
              <img
                className="next-arrow"
                src={arrowIcon}
                style={{ position: "absolute", top: "50%", right: 20 }}
              />
            </div>
            <div className="card-content">
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              <p> Recusandae, omnis?</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
