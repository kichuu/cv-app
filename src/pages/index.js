import Body from "@/components/Body";
import Form from "@/components/Form";
import Header from "@/components/Header";
import ResumePreview from "@/components/ResumePreview";
import { downloadPdf } from "@/utils/ToPdf";
import { useState , useRef } from "react";



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
    aboutSelf : ""
  });

  return (
    <>
      <Header />
      <Body>
        <Form formData={formData}  setFormData={setFormData} downloadPdf={downloadPdf} />
        <ResumePreview formData={formData} />
      </Body>
    </>
  );
}
