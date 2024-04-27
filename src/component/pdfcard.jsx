import pdfImage from "../assets/pdf.svg";

export default () => (
  <div className=" col-lg-4 col-md-6 col-xs-12 pdf-card">
    <div className="card">
      <div className="d-flex">
        <img
          src={pdfImage}
          className="pdf-card__image img-fluid"
          alt="pdf image"
        />
        <div className="">
          <div className="card-body">
            <h6 className="card-title">Card title</h6>
            <p className="card-text">This is a wider card with supporting.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
