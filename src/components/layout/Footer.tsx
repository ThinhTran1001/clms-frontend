import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Footer() {
  const footerStyle: React.CSSProperties = {
    backgroundColor: '#BC9F8B', 
    color: '#f8f9fa',
    padding: '2rem 0',
    marginTop: 'auto', 
  };

  return (
    <footer style={footerStyle} className="text-center">
      <div className="container p-4">
        {/* Section: Social media */}
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-google"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-instagram"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="fab fa-github"></i>
          </a>
        </section>
        {/* Section: Social media */}

        {/* Section: Form */}
        <section>
          <form action="">
            <div className="row d-flex justify-content-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>
              <div className="col-md-5 col-12">
                <div className="form-outline mb-4">
                  <input type="email" id="form5Example24" className="form-control" />
                  <label className="form-label" htmlFor="form5Example24">Email address</label>
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>
        {/* Section: Form */}

        {/* Section: Text */}
        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
            repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum
            harum corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>
        {/* Section: Text */}

        {/* Section: Links */}
        <section>
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li><a className="text-light" href="#!">Link 1</a></li>
                <li><a className="text-light" href="#!">Link 2</a></li>
                <li><a className="text-light" href="#!">Link 3</a></li>
                <li><a className="text-light" href="#!">Link 4</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        © 2024 Copyright:
        <a className="text-light fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  );
}
