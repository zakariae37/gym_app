import React, { useEffect, useState } from "react";
import Details from "../components/Details";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import ExerciseVideos from "../components/ExerciseVideos";

const ExercisesDetails = () => {
  const [exersiceDetails, setExersiceDetails] = useState({});
  const [youtubeVideo, setYoutubeVideo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseDetails = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeDbUrl = "https://youtube-search-and-download.p.rapidapi.com";
      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExersiceDetails(exerciseDetailData);
      
      const youtubeVideos = await fetchData(
        `${youtubeDbUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );
      setYoutubeVideo(youtubeVideos.contents);
    };
    fetchExerciseDetails();
  }, [id]);
  return (
    <div className="flex flex-col gap-10">
      <Details exersiceDetails={exersiceDetails} />
      <ExerciseVideos youtubeVideo={youtubeVideo} name={exersiceDetails.name}/>
    </div>
  );
};

export default ExercisesDetails;
