import React, { useContext, useEffect } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
import Icon from "../assets/icons/gym.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <button onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </button>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <button onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </button>
  );
};

const HorizontalScrollbar = ({ data, setBodyParts, bodyPart, setBodyPart }) => {
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  return (
    <div className="my-8 overflow-x-auto">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        <div className="flex items-center justify-center gap-8">
          {data.map((item) => (
            <div key={item.id || item} >
              <button
                className="flex items-center justify-center flex-col gap-y-3"
                onClick={() => {
                  setBodyPart(item);
                  window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
                }}
              >
                <img src={Icon} alt={item.title} className="w-12 h-12 mb-2" />
                <p className="text-sm font-bold">{item}</p>
              </button>
            </div>
          ))}
        </div>
      </ScrollMenu>
    </div>
  );
};

export default HorizontalScrollbar;
