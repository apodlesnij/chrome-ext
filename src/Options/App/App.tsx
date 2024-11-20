import React, { useState } from "react";
import style from "src/Options/App/App.module.css";

export function App() {
  const [blurredNumbers, setBlurredNumbers] = useState<number[]>([]);
  const [keepPrevious, setKeepPrevious] = useState(false);
  const [links, setLinks] = useState<{ link: string; state: number[] }[]>([]);

  const toggleBlur = (number: number) => {
    if (blurredNumbers.includes(number)) {
      setBlurredNumbers(blurredNumbers.filter((num) => num !== number));
    } else {
      setBlurredNumbers([...blurredNumbers, number]);
    }
  };

  const handleKeepPrevious = () => {
    if (!keepPrevious && blurredNumbers.length > 0) {
      const params = blurredNumbers
        .map((num) => `option${num}=1`)
        .join("&");
      const link = `localhost:5432?${params}`;
      setLinks([...links, { link, state: blurredNumbers }]);
    } else if (!keepPrevious) {
      // Do nothing if no numbers are blurred
      return;
    } else {
      setBlurredNumbers([]);
    }
    setKeepPrevious(!keepPrevious);
  };

  const handleLinkClick = (linkState: number[]) => {
    setBlurredNumbers(linkState);
    setKeepPrevious(true);
  };

  const removeLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  return (
    <div className={style.container}>
      <div className={style.options}>
        <label>
          <input
            type="checkbox"
            checked={keepPrevious}
            onChange={handleKeepPrevious}
          />
          keep previous
        </label>
        <div className={style.numbers}>
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`${style.number} ${
                blurredNumbers.includes(num) ? style.blurred : ""
              }`}
              onClick={() => toggleBlur(num)}
            >
              {num}
            </div>
          ))}
        </div>
      </div>
      <div className={style.links}>
        {links.map((linkObj, index) => (
          <div key={index} className={style.link}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(linkObj.state);
              }}
            >
              {linkObj.link}
            </a>
            <span className={style.remove} onClick={() => removeLink(index)}>
              ✖
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
