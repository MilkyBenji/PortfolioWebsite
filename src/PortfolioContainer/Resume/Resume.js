import react, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [SelectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [CarouselOffSetStyle, setCarouselOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subheading ? props.subheading : ""} </span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 65 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "SQL", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 75 },
    { skill: "Python", ratingPercentage: 90 },
    { skill: "C++", ratingPercentage: 20 },
    { skill: "Excel", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2023", toDate: "2024" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one",
      subheading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title:
        "Image Classification on CIFAR-10 Using Advanced Deep Learning Models",
      duration: { fromDate: "2023", toDate: "2023" },
      description:
        "Built an image classification pipeline for CIFAR-10 using deep learning models like AlexNet, VGGNet, and Inception V3. Applied techniques like data augmentation, dropout, and learning rate scheduling to optimize performance. Deployed the best-performing model for Android demonstrations.",
      subheading: "Technologies Used: Python, TensorFlow, Keras, Android SDK",
    },
    {
      title: "Hands-on on Raspberry Pi",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Building multiple projects on Raspberry Pi and seeing its use-cases for various ideas and seeing the beauty of this technology",
      subheading:
        "Technologies Used: Raspberry Pi 4, Python 3, GPIOs, Flask, the Raspberry Pi Camera, and More",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"PASIR RIS CREST SECONDARY SCHOOL"}
        subheading={"EDUCATION NORMAL (ACADEMIC) [N(A)] LEVEL"}
        fromDate={"2014"}
        toDate={"2018"}
      />
      <ResumeHeading
        heading={"ITE COLLEGE EAST"}
        subheading={"HIGHER NATIONAL ITE CERTIFICATE IN MECHANICAL ENGINEERING"}
        fromDate={"2019"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"TEMASEK POLYTECHNIC"}
        subheading={"DIPLOMA IN BIG DATA & ANALYTICS"}
        fromDate={"2021"}
        toDate={"2024"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"SINGAPORE ENGRAVING & OFFSET PLATEMAKING"}
        subheading={"FINANCE ANALYST INTERNSHIP"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Gained hands-on experience in inventory management, process
          automation, and customer service. Contributed to improving operations
          and enhancing customer satisfaction.
        </span>
      </div>

      <div className="experience-description">
        <span className="resume-description-text">
          -Improved inventory tracking using advanced Excel formulas and
          automation
        </span>
      </div>

      <span className="resume-description-text">
        -Strengthened communication skills by providing excellent customer
        service.
      </span>

      <span className="resume-description-text">
        -Built analytical skills through inventory and financial data
        management.
      </span>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */

    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subheading={projectsDetails.subheading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Sports Enthusiast"
        description="Active in outdoor sports such as volleyball during ITE and rock climbing at Temasek Polytechnic. Passionate about staying fit and embracing teamwork through various physical activities."
      />
      <ResumeHeading
        heading="Performing Art"
        description="Engaged in dance and breakdance performances as part of Temasek Polytechnic events like Oomph and Whatchu Got! Enjoys self-expression and creativity through movement and performing for an audience"
      />
      <ResumeHeading
        heading="Orientation Camp Leader"
        description="Contributed as a camp leader with the Temasek Polytechnic Student Union, fostering teamwork, leadership, and a welcoming environment for new students during orientation camps."
      />
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;
    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarouselOffSetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === SelectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops,,, no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={CarouselOffSetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((resumeDetails) => resumeDetails)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullets-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
