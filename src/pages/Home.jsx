import React, { useState } from 'react'
import Banner from '../components/Banner'
import SearchExerices from '../components/SearchExerices'
import Exercises from '../components/Exercises'
import HorizontalScrollbar from '../components/HorizontalScrollbar'

const Home = () => {
  const [exercises, setExercises] = useState([])
  const [bodyParts, setBodyParts] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
  return (
    <div>
      <Banner />
      <SearchExerices 
        setExercises={setExercises}
        
      />
      <HorizontalScrollbar 
        data={bodyParts}
        setBodyParts={setBodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises 
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </div>
  )
}

export default Home