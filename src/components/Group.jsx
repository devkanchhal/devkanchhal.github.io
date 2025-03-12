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
        text="As a part of this research at UNSW, we are dedicated to engineering the next generation of total artificial hearts! Founded in 2022, the team of is driven by a passion for innovation in cardiac technology, aiming to offer hope for those with end-stage heart failure." 
      />

      <Card 
        image={harbour} 
        subtitle="UI/UX Designer" 
        title="Product Innovation Program" 
        text="In this extracurricular program, I worked in a team to design, prototype and present our app 'Harbour' for solo travellers to Canva! The project taught me valuable lessons in user-centric design and helped develop transferable product development skills." 
      />

      <Card 
        image={car} 
        subtitle="Personal Project (in progress!)" 
        title="Autonomous Disinfection Robot" 
        text="The idea behind this robot came in response to the increased sanitation demand in our post-pandemic world! In this project, I'm using a RaspberryPi with ROS2 and getting my hands dirty to make this self-mapping, mobile robot. " 
      />
    </section>
  );
}
