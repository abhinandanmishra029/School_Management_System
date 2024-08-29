import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="sub-header top">
        <h1>Contact Us</h1>
      </div>

      <section className="location">
        <div className="loc-direction">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742659.2826473997!2d83.00329614351662!3d23.64229442480181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398b2386df480857%3A0x62c5b809eee29004!2sJharkhand!5e0!3m2!1sen!2sin!4v1689149914835!5m2!1sen!2sin"
            title="myMap"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="contact-us">
        <div className="row">
          <div className="contact-col">
            <div>
              <i class="fa-solid fa-house"></i>
              <span>
                "<h5 className="head-1">Dimna Road</h5>
                <p className="pra-3">Jharkhand,Jamshedpur,IN</p>
              </span>
            </div>

            <div>
              <i class="fa-solid fa-phone"></i>
              <span>
                <h5 className="head-1">6204391778</h5>
                <p className="pra-3">JMonday to Sunday,10AM to 6PM</p>
              </span>
            </div>

            <div>
              <i class="fa-solid fa-envelope"></i>
              <span>
                <h5 className="head-1">abhinandanmishra484@gmail.com</h5>
                <p className="pra-3">Email us your query</p>
              </span>
            </div>
          </div>
          <div className="contact-col">
            <form action="">
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter your email" />
              <input type="text" placeholder="Enter your subject" />
              <textarea
                name=""
                id=""
                rows="10"
                placeholder="Message"
              ></textarea>
              <button type="submit" className="hero-btn red-btn">
                send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="footer">
        <h4>Contact Us</h4>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
          corrupti rem quisquam aspernatur aperiam impedit quidem excepturi
          voluptatem vel,
          <br /> fugiat iure cum, adipisci eos, dicta ipsa esse odio
          reprehenderit minus.
        </p>
        <div className="icons">
          <i className=" topIcon fa-brands fa-square-facebook"></i>
          <i className=" topIcon fa-brands fa-square-twitter"></i>
          <i className=" topIcon fa-brands fa-square-instagram"></i>
          <i className=" topIcon fa-brands fa-square-pinterest"></i>
        </div>
      </section>
    </>
  );
};
export default Contact;
