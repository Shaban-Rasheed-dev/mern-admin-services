import { useAuth } from "../ContextAPI/auth.jsx";

export const Service = () => {
  const { services } = useAuth();

  return (
    <>
      <div className="container">
        <div className="row mb-5 g-4">
          {services?.map((service, index) => (
            <div className="col-12 col-sm-6 col-lg-4" key={index}>
              <div className="card h-100">
                <img
                  src="/images/service.png"
                  className="card-img-top"
                  alt="service"
                />

                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-bold">{service.provider}</span>
                    <span className="fw-bold ">Rs. {service.price}</span>
                  </div>

                  <h5 className="card-title">{service.service}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
