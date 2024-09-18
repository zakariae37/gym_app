import React from "react";
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Details = ({ exersiceDetails }) => {
  const exerciseDetails = [
    {
      icon: BodyPartImage,
      name: exersiceDetails.bodyPart
    },
    {
      icon: TargetImage,
      name: exersiceDetails.target
    },
    {
      icon: EquipmentImage,
      name: exersiceDetails.equipment
    },
  ];

  return (
    <div className="mx-8">
      {/* For large and medium devices, show the original layout */}
      <div className="hidden sm:flex items-center justify-between">
        <div>
          <img src={exersiceDetails.gifUrl} alt={exersiceDetails.name} style={{ width: '400px', height: 'auto' }} />
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl font-bold">{exersiceDetails.name}</h1>
          <p className="text-gray-700">
            Exercises keep you strong.{" "}
            <span style={{ textTransform: "capitalize" }}>
              {exersiceDetails.name}
            </span>{" "}
            bup is one of the best <br /> exercises to target your{" "}
            {exersiceDetails.target}. It will help you improve your <br /> mood
            and gain energy.
          </p>
          <div className="flex flex-col gap-8">
            {exerciseDetails.map((item) => (
              <div key={item.name} className="flex items-center gap-6">
                <img src={item.icon} alt={item.name} className="bg-[#FFF2DB] rounded-full p-2 w-14" />
                <h4 className="text-xl">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* For small devices, show the stacked layout */}
      <div className="sm:hidden">
        <div className="flex flex-col items-center gap-6">
          <div>
            <img src={exersiceDetails.gifUrl} alt={exersiceDetails.name} style={{ width: '250px', height: 'auto' }} />
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold">{exersiceDetails.name}</h1>
            <p className="text-gray-700">
              Exercises keep you strong.{" "}
              <span style={{ textTransform: "capitalize" }}>
                {exersiceDetails.name}
              </span>{" "}
              bup is one of the best exercises to target your{" "}
              {exersiceDetails.target}. It will help you improve your mood
              and gain energy.
            </p>
            <div className="flex flex-col gap-4">
              {exerciseDetails.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <img src={item.icon} alt={item.name} className="bg-[#FFF2DB] rounded-full p-2 w-12" />
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
