import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="https://web.facebook.com/profile.php?id=100008653876752"
            role="button"
          >
            <i className="bi bi-facebook"></i>
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="https://www.linkedin.com/in/lahoucine-el-addali-780893219/"
            role="button"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="https://www.instagram.com/l7oucine777/"
            role="button"
          >
            <i className="bi bi-instagram"></i>
          </a>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/houcine7"
            role="button"
          >
            <i className="bi bi-github"></i>
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a className="text-white" href="#">
          EL ADDALI HOS
        </a>
      </div>
    </footer>
  );
};

export default Footer;
