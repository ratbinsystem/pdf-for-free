import PdfCard from "./component/pdfcard";
import Navbar from "./navigation/navbar";
function App() {
  return (
    <>
      <Navbar />
      <main className="container mt-2">
        <div className="row g-2">
        <PdfCard /><PdfCard /><PdfCard /><PdfCard /><PdfCard /><PdfCard /><PdfCard /><PdfCard /><PdfCard /><PdfCard /><PdfCard /><PdfCard /><PdfCard /><PdfCard />
        </div>
      </main>
    </>
  );
}

export default App;
