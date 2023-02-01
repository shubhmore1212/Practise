import WordPlay from "./WordPlay";

const words = ["EVENT", "PARTY", "ENJOY", "COOL"];
const WordArray = () => {
  return (
    <>
      {words.map((word,idx) => (
        <div key={idx} className={`word-item-${idx}`}>
          <WordPlay word={word} id={idx}/>
        </div>
      ))}
    </>
  );
};

export default WordArray;
