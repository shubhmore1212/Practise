import { useRef, useState } from "react";

const WordPlay = (props: { word: string; id: number }) => {
  let hiddenWord = "SHUBHAM";
  const letters = hiddenWord;
  let originalWord = props.word;
  const [name, setName] = useState<string>(originalWord);

  const jumbleWords = () => {
    let itr = 0;
    const interval = setInterval(() => {
      getNewWord(hiddenWord, itr);
      itr += 1 / 3;
      if (isIterationLessThanWordLength(itr)) {
        setName(hiddenWord);
        setTimeout(() => {
          let itr = 0;
          const interval = setInterval(() => {
            getNewWord(originalWord, itr);
            itr += 1 / 3;
            if (isIterationLessThanWordLength(itr)) {
              setName(originalWord);
              clearInterval(interval);
            }
          }, 80);
        }, 20);
        clearInterval(interval);
      }
    }, 80);
  };

  const isIterationLessThanWordLength = (itr: number) => {
    return itr > name.length;
  };

  const getNewWord = (word: string, itr: number) => {
    let newWord = word.split("");
    let newWords = newWord
      .map((w, idx) => {
        if (idx < itr) {
          return newWord[idx];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");
    setName(newWords);
  };

  return (
    <div className="word-play">
      <h1
        id="word"
        className={`word-item-${props.id}`}
        onMouseOver={jumbleWords}
      >
        {name}
      </h1>
    </div>
  );
};

export default WordPlay;
