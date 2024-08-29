import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="hero">
        <div className="main">
          <img
            className="intro-img"
            src="clgpics/cg2.jpg"
            alt="..."
            height={"100vh"}
            width={"100%"}
          />
        </div>

        <div className="content">
          <h1>welcome to the College Management System</h1>
          <p>
            The college management system is the ultimate solution to digitize
            and streamline the day to day operations of colleges and
            universities. it digitized routine work of the campus such as
            student attendance management student portfolio management student
            record management system etc{" "}
          </p>

          <a href="/login" className="hero-btn">
            REGISTRATION
          </a>
        </div>
      </div>

      <section className="course">
        <h1 className="heading">Courses We Offer</h1>
        <p className="para">
          We Offers Various Types of Courses as We Maintioned.
        </p>

        <div className="row">
          <div className="course-col">
            <h3 className="heading-3">B.Tech</h3>
            <p className="para-1">
              Bachelor of Technology or B Tech is an undergraduate programme in
              engineering and one of the sought-after courses in India. A degree
              in Bachelor of Technology is often considered a gateway to the
              field of engineering. The BTech course duration is four years,
              depending on the country and the institution.
            </p>
          </div>

          <div className="course-col">
            <h3 className="heading-3">M.Tech</h3>
            <p className="para-1">
              M.Tech is a two year postgraduate program in engineering. During
              the duration of two years, students are given exceptional
              knowledge on technologies. M Tech full form is Master of
              Technology. M.Tech enhances the skills of a candidate and makes
              him or her specialist in a particular area or field.{" "}
            </p>
          </div>

          <div className="course-col">
            <h3 className="heading-3">BCA</h3>
            <p className="para-1">
              BCA Full Form is Bachelor of Computer Applications. BCA is a 3
              year UG course that trains students in Operating Systems, Java
              Programming, Computer Networks, Database Management Systems,
              Programming Languages etc. Students get job opportunities in the
              IT sector after completing the BCA course.{" "}
            </p>
          </div>

          <div className="course-col">
            <h3 className="heading-3">MCA</h3>
            <p className="para-1">
              MCA Full Form is Master of Computer Application. MCA is a
              postgraduate course that trains students in the various aspects of
              computer programs, application software, computer architecture,
              operating systems and many more. The MCA Course duration is 2
              years.
            </p>
          </div>

          <div className="course-col">
            <h3 className="heading-3">BBA</h3>
            <p className="para-1">
              BBA is an undergraduate degree programme in business
              administration and management, and the BBA course duration is
              three years. BBA is considered a career gateway for those
              candidates who are interested in pursuing a career in business
              management. BBA full form is Bachelor of Business
            </p>
          </div>

          <div className="course-col">
            <h3 className="heading-3">MBA</h3>
            <p className="para-1">
              Master of Business Administration (MBA) is a postgraduate degree
              program that provides advanced business and management training.
              The course will equip students with the knowledge and skills to
              succeed in leadership roles. MBA programs emphasize the
              development of an individual's analytical
            </p>
          </div>
        </div>
      </section>

      <section className="facilities">
        <h1>Our Facilities</h1>
        <p>Our college Facilities Maintioned in the List.</p>

        <div className="card-container">
          <div className="facilities-col">
            <div className="card" style={{ width: "18rem" }}>
              <img className="image" src="./clgpics/library.png" alt="..." />
              <h3 className="card-title">world Class Library </h3>
              <p className="para2">
                {" "}
                It is one of the largest public libraries in Our area and has
                over 400 items.
              </p>
            </div>
          </div>

          <div className="facilities-col">
            <div className="card" style={{ width: "18rem" }}>
              <img className="image" src="./clgpics/basketball.png" alt="..." />
              <h3 className="card-title">Largest Play Ground</h3>
              <p className="para2">
                Sports play a pivotal role in bringing people together, sharing
                moments and etc
              </p>
            </div>
          </div>

          <div className="facilities-col">
            <div className="card" style={{ width: "18rem" }}>
              <img className="image" src="./clgpics/cafeteria.png" alt="..." />
              <h3 className="card-title">Tasty & Healthy Food</h3>
              <p className="para2">
                We provide Healthy and Tasty food to our Students
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <h1>What Our Student Says</h1>
        <p>students feedback About the our college.</p>

        <div className="row">
          <div className="testimonial-col">
            <img src="./clgpics/user1.jpg" alt="" />
            <div>
              <p>
                College takes you out of familiar surroundings and presents new
                challenges. But college doesn’t only pave the way for intangible
                experiences. Adapting to new faces in a fresh place is just the
                start. The education process can mean internships, overseas
                travel, exciting research opportunities
              </p>
              <h3>Christine Berkley</h3>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half-stroke"></i>
            </div>
          </div>

          <div className="testimonial-col">
            <img src="./clgpics/user2.jpg" alt="" />
            <div>
              <p>
                College takes you out of familiar surroundings and presents new
                challenges. But college doesn’t only pave the way for intangible
                experiences. Adapting to new faces in a fresh place is just the
                start. The education process can mean internships, overseas
                travel, exciting research opportunities
              </p>
              <h3>David Byer</h3>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h1>Enroll For Our Various Online Courses Anywhere From The World</h1>
        <a href="/contact" className="hero-btn">
          CONTACT US
        </a>
      </section>

      <section className="footer">
        <h4>About Us</h4>
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
export default Homepage;
