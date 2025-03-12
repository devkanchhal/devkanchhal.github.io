import React from 'react';
import Card from './Card'; 
import car from "../assets/robot_car.png"
import mbh from "../assets/mbh.png"
import harbour from "../assets/harbour.png"

export default function Group() {
  return (
    <section className="flex flex-col items-center justify-center w-full space-y-10 px-6">
      <p className="text-m font-regular uppercase text-gray-500">My Recent Projects</p>

      <Card 
        image={mbh}
        subtitle="Systems Engineer" 
        title="Mending Broken Hearts" 
        text="How to act strategically despite limited time and budget. dawkjndkjwan dkwajbdjk dajwbdkjawbdaw dkajwbdkjwadb wadbkjwa dkaw d d awdadaw ad dawdwa d a daw da wd aw daw ddddawd da wdawdwd awdwadwad " 
      />

      <Card 
        image={harbour} 
        subtitle="UI/UX Designer" 
        title="Product Innovation Program" 
        text="How to act strategically despite limited time and budget." 
      />

      <Card 
        image={car} 
        subtitle="Personal Project (in progress!)" 
        title="Product Innovation Program" 
        text="How to act strategically despite limited time and budget." 
      />
    </section>
  );
}
