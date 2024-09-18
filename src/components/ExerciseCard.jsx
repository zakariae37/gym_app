import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-4">
      <Link to={`/exercises/${exercise.id}`} className="flex flex-col gap-y-4 px-6 py-4 border rounded-lg border-gray-300 hover:shadow-md">
        <img src={exercise.gifUrl} alt={exercise.name} className="w-full h-48 object-cover rounded-lg" />
        <div className="flex gap-x-2">
          <button className="px-4 py-1 bg-yellow-400 rounded-full text-white">{exercise.target}</button>
          <button className="px-4 py-1 bg-red-300 rounded-full text-white">{exercise.bodyPart}</button>
        </div>
        <h2 className="text-lg font-bold">{exercise.name}</h2>
      </Link>
    </div>
  );
};

export default ExerciseCard;
