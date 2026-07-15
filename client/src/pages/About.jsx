import { useAuth } from "../ContextAPI/auth";
export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3">
            <p>Weolcome {user ? user.username : "Welcome to our website"} </p>
            <h1>Why Choose US?</h1>
            <p>
              Expertise: Our team consists of experienced IT professionals who
              are passionate about staying up-to-date with the latest industry
              trends.
            </p>
            <p>
              Customization: We understand that every business is unique. That's
              why we create solutions that are tailored to your specific needs
              and goals.
            </p>
            <p>
              Customer-Centric Approach: We prioritize your satisfaction and
              provide top-notch support to address your IT concerns.
            </p>
            <p>
              Affordability: We offer competitive pricing without compromising
              on the quality of our services.
            </p>
            <p>
              Reliability: Count on us to be there when you need us. We're
              committed to ensuring your IT environment is reliable and
              available 24/7.
            </p>
            <a href="/contact">
              <button className="btn btn-color mx-2">Connect Now</button>
            </a>
            <a href="/about">
              <button className="btn btn-more">Learn More</button>
            </a>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <img
              src="/images/about.png"
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
      </div>
    </>
  );
};
