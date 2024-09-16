import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export function Footer(){
    return (
        <footer className="bg-dark text-light py-3 mt-auto">
      <div className="container text-center">
        <p className="mb-0">© 2024 Your Company. All rights reserved.</p>
        <ul className="list-unstyled d-flex justify-content-center mt-2">
          <li className="mx-2">
            <a href="#" className="text-light" title="Facebook">
              <i className="lni lni-facebook-filled"></i>
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="text-light" title="Twitter">
              <i className="lni lni-twitter-original"></i>
            </a>
          </li>
          <li className="mx-2">
            <a href="#" className="text-light" title="LinkedIn">
              <i className="lni lni-linkedin-original"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
    )
}