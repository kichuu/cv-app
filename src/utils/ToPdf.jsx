import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const downloadPdf = (resumePrevRef) => {
  html2canvas(resumePrevRef.current).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const doc = new jsPDF();
    doc.addImage(imgData, "PNG", 10, 10);
    doc.save("resume.pdf");
  });
};
