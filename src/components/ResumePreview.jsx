import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaDotCircle, FaUserGraduate } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
// import { UisEnvelope } from '@iconscout/react-unicons-solid'
export default function ResumePreview({ formData }) {
  return (
    <div className=" col-span-4 grid grid-cols-8 m-5 my-10 max-h-[130vh]	 border-sky-500  border-4 rounded-md">
      <div className="bg-sky-600 col-span-3 py-10">
        {/*left side container*/}
        <div className="flex justify-center">
          <div className="bg-red-500  w-32 h-32 border-4 border-sky-500  rounded-full "></div>
        </div>
        <h1 className="mt-2 text-center tracking-widest mt-4 font-bold ">
          CONTACT
        </h1>
        <div className="flex items-center  mt-4">
          <MdEmail color="black" className="m-2" />
          <p>{formData.email}</p>
        </div>
        <div className="flex items-center  mt-2">
          <MdPhone color="black" className="m-2" />
          <p>{formData.phone}</p>
        </div>
        <div className="flex items-center  mt-2">
          <FaLocationDot color="black" className="m-2" />
          <p>{formData.address}</p>
        </div>
        <h1 className="  font-bold tracking-widest text-center my-4 ">
          EDUCATION
        </h1>
        <div className="flex items-center">
          <FaUserGraduate color="black" className="m-2" />
          <div className="ml-2">
            <p>{formData.gradYear}</p>
            <p>{formData.university}</p>
          </div>
        </div>
        <div className="flex items-center  mt-2">
          <GoDotFill color="black" className="m-2" />
          <p className="ml-2">{formData.degree}</p>
        </div>
        <h1 className='text-center tracking-widest my-4 font-bold '>SKILLS</h1>
        <div className="flex items-center  mt-4">
          <GiSkills  color="black" className="m-2" />
          <p>{formData.skill1}</p>
        </div>
        <div className="flex items-center  mt-4">
          <GiSkills  color="black" className="m-2" />
          <p>{formData.skill2}</p>
        </div>
        <div className="flex items-center  mt-4">
          <GiSkills  color="black" className="m-2" />
          <p>{formData.skill3}</p>
        </div>
      </div>

      <div className="bg-white grid grid-rows-8 col-span-5"> {/*right side container*/}
      <div className="name-header bg-[#171717] row-span-2  flex justify-center items-center border rounded border-[#171717]">
      <h1 className="text-white myname text-center tracking-wider">{formData.name}</h1>
      
      </div>
      <div className="row-span-2">
       <h1 className="  font-bold tracking-widest text-center my-4 ">
          Work Experience
        </h1>
        <div className="flex items-center">
          <GoDotFill color="black" className="m-2" />
          <div className="ml-2">
            <p>{formData.jobTitle}</p>
          </div>
        </div>
        <div className="flex items-center">
          <GoDotFill color="black" className="m-2" />
          <div className="ml-2">
            <p>{formData.company}</p>
          </div>
        </div>
        <div className="flex items-center">
          <GoDotFill color="black" className="m-2" />
          <div className="ml-2">
            <p>{formData.employmentDates}</p>
          </div>
        </div>
        </div>
        <div className="row-span-3">
        <h1 className="font-bold tracking-widest text-center my-4">
          About Myself
        </h1>
        <p className="m-4 text-xl">{formData.aboutSelf}</p>
        </div>
      </div>
      
     
        
    </div>
  );
}
