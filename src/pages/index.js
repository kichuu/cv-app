import Body from "@/components/Body";
import Form from "@/components/Form";
import Header from "@/components/Header";
import ResumePreview from "@/components/ResumePreview";
import { useState } from "react";


export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address : "",
    phone: "",
    degree: "",
    university: "",
    gradYear: "",
    jobTitle: "",
    company: "",
    employmentDates: "",
    skill1: "",
    skill2: "",
    skill3: "",
  });

  return (
    <>
      <Header />
      <Body>
        <Form formData={formData} setFormData={setFormData} />
        <ResumePreview formData={formData} />
      </Body>
    </>
  );
}
