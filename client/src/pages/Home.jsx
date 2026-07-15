export const Home = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-5 mb-3">
            <p>we are the best IT Company</p>
            <h1>Welcome to the Shaban Rasheed</h1>
            <p>
              Are you ready to take your business to the next level with
              cutting-edge IT solutions? Look no further! At Thapa Technical, we
              specialize in providing innovative IT services and solutions
              tailored to meet your unique needs.
            </p>
            <a href="/contact">
              <button className="btn btn-color mx-2">Connect Now</button>
            </a>
            <a href="/about">
              <button className="btn btn-more">Learn More</button>
            </a>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-4">
            <img
              src="/images/home2.png"
              alt=""
              className="img-fluid block text-center"
              width="400"
            />
          </div>
        </div>
        <div className="row bg-white text-center rounded my-5 p-5 text-dark">
          <div className="col-md-3 border-end border-dark my-3 ">
            <h2>50+</h2>
            <p>Registered Company</p>
          </div>
          <div className="col-md-3 border-end border-dark my-3">
            <h2>1,000+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="col-md-3 border-end border-dark my-3">
            <h2>500+</h2>
            <p>Well known IT Professionals</p>
          </div>
          <div className="col-md-3">
            <h2>24/7</h2>
            <p>Service</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src="/images/home1.png"
              alt=""
              className="img-fluid"
              width="400"
            />
          </div>
          <div className="col-md-6 my-3">
            <p>we are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <a href="/contact">
              <button className="btn btn-color mx-2">Connect Now</button>
            </a>
            <a href="/about">
              <button className="btn btn-more">Learn More</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
