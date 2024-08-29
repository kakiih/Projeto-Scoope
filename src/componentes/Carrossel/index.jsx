function Carrossel() {
  return (
    <>
      <div
        id="demo"
        className="carousel slide col-6 mx-auto"
        data-bs-ride="carousel"
      >
        {/* <!-- Indicators/dots --> */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#demo"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://picsum.photos/1080/720"
              alt="Los Angeles"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/1080/721"
              alt="Chicago"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/1081/720"
              alt="New York"
              className="d-block w-100"
            />
          </div>
        </div>

        {/* <!-- Left and right controls/icons --> */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Carrossel;
