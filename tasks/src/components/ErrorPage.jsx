import React from 'react';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
       
              <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold" style={{color:"red"}}>404</h1>
                <p class="fs-3" style={{color:"white"}}> <span style={{color:"red"}}>Opps!</span> Page not found.</p>
                <p class="lead" style={{color:"white"}}>
                    The page you’re looking for doesn’t exist.
                  </p>
                <Link to="/" class="btn btn-primary">Go Home</Link>
            </div>
        </div>
       
    );
};

export default ErrorPage;