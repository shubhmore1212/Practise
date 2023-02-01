import { Parallax, Background } from "react-parallax";
import star from "../../assets/image/star.png";

export const CardAnimation = () => {
  return (
    <div className="parallax-container">
      <Parallax
        className="parallax-card"
        blur={{ min: -15, max: 15 }}
        bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIPoGrSLXfWIaPkZEMym1jgXmCcs7gXQWhd4f6n845pzgnnVKi3H2JgJnFJoxVQDrugY&usqp=CAU"
        strength={60}
      ></Parallax>
      <SmallCardParallax />
      <div className="star-container">
        <span>
          <img src={star} alt="star" />
        </span>
        <span>
          <img src={star} alt="star" />
        </span>
      </div>
    </div>
  );
};

const SmallCardParallax = () => {
  return (
    <div className="small-parallax-container">
      <Parallax
        className="small-parallax-card"
        blur={{ min: -15, max: 10 }}
        bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIPoGrSLXfWIaPkZEMym1jgXmCcs7gXQWhd4f6n845pzgnnVKi3H2JgJnFJoxVQDrugY&usqp=CAU"
        strength={50}
      ></Parallax>
    </div>
  );
};
