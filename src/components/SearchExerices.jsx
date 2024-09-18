import React, { useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";

const SearchExerices = ({ setExercises }) => {
    const [ search , setSearch ] = useState('')
    const handleSearch = async () => {
      if (search) {
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
        const searchedExercises = exercisesData.filter(
          (item) => item.name.toLowerCase().includes(search)
                 || item.target.toLowerCase().includes(search)
                 || item.equipment.toLowerCase().includes(search)
                 || item.bodyPart.toLowerCase().includes(search),
        );
        setSearch('')
        setExercises(searchedExercises)
      } 
    }
  return (
    <div className="flex flex-col items-center justify-center text-center gap-y-8 mt-10 ">
      <div>
        <h1 className="text-3xl font-bold tracking-wide">
          Awesome Exercises You <br /> Should Know
        </h1>
      </div>
      <div className="flex items-center">
  <input 
    type="text"
    placeholder="Search Exercises"
    className="px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none flex-grow lg:w-[600px] md:w-[400px]"
    
    value={search}
    onChange={(e) => setSearch(e.target.value.toLowerCase())}
  />
  <button 
    className="px-4 py-2 bg-red-500 text-white rounded-r-lg hover:bg-red-600 focus:outline-none focus:ring focus:border-red-700"
    onClick={handleSearch}
  >
    Search
  </button>
</div>
    </div>
  );
};

export default SearchExerices;
