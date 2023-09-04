import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomBtn } from '../components/CustomBtn';
import { ExperienceContainer } from '../components/ExperienceContainer';
import ProfileImage from '../assets/images/portfolio.png';
import backgroundImage from '../assets/images/hacker.jpg';

const Home = () => {

    const handleSubmit = () => {
        console.log(" Submitted ");
    }

    const experienceDetails = [
        {
            title: "WordPress",
            showDate: "Started Work: Feb 2022",
            desc: "WordPress is a free, open-source website creation platform. WordPress is a content management system (CMS) written in PHP that uses a MySQL database. In non-geek speak, WordPress is the easiest and most powerful blogging and website builder in existence today. I have worked on wordpress from at-least one year. So i can make full complete website on wordpress."
        },
        {
            title: "SEO",
            showDate: "Started Work: Oct 2022",
            desc: "SEO means the process of improving your website to increase its visibility in Google, Microsoft Bing, and other search engines whenever people search for: Products you sell. Services you provide. I know how SEO work on website. The key points which is used to increase the visibility of website through SEO. I have worked on many website's SEO."
        },
        {
            title: "Front-end",
            showDate: "Started Work: March 2022",
            desc: "I can develop new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages. I know how to make website responsive on Desktop, Mobiles, Tablets and large screens."
        },
        {
            title: "Back-end",
            showDate: "Started Work: March 2022",
            desc: "I can work on server-side web application logic and integration of the work front-end developers do. Back-end developers are usually write the web services and APIs used by front-end developers and mobile application developers. So "
        },
    ]

    const educationDetails = [
        {
            title: "Matric (10th)",
            comDate: "Completed Date: Aug 2016",
            desc: "I have completed 10th class in the year of 2016 in Pre-engineering from Quetta, Balochistan. That time i have got winning price of 500 pkr from my school principle in typing. "
        },
        {
            title: "Fsc (12th)",
            comDate: "Completed Date: Aug 2018",
            desc: "I have completed Fsc in the year of 2018 in Pre-engineering from Punjab college Rawalpindi."
        },
        {
            title: "BS (Software Engineering)",
            comDate: "Completed Date: Aug 2022",
            desc: "I have completed Bachelor in Engineering in the year of 2022 from SZABIST University Islamabad."
        },
        {
            title: "Certificate",
            comDate: "Completed Date: (Feb to Aug) 2022",
            desc: "I started learning programming. I have done with many projects through out this journey. With the help of Allah Almighty i has been honored with the certificate."
        },
        {
            title: "Software Engineer",
            comDate: "Working as Web Developer",
            desc: "I started working in a private company as Software Developer. I also learned many things in this company. I provide all my skills related to the web development and develop some websites."
        },
    ]

    return (
        <>
            <div className="container py-4">
                <div className="row py-3">
                    <div className="col-sm-12 col-md-6 col-lg-8" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <h3>I'm </h3>
                        <h1 style={{ color: '#CDB269' }} >Aimal Khan Bazai</h1>
                        <h4>I work as a web developer. I have been working as a web developer for quite some time now. I believe I am a very ambitious person who loves to work on making the website work well. Working on the web is my passion as I love to work on exciting projects.</h4>
                        <CustomBtn label='Hire Me' onClick={handleSubmit} />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 coverImage">
                        <img src={ProfileImage} style={{ width: "70%" }} alt="Portfolio Image" />
                    </div>
                </div>
            </div>

            <section className='about-area section-padding section-img-bg2 p-4' data-background="assets/img/gallery/section-bg.jpg" style={{ backgroundImage: `url(${backgroundImage})`}}>
                <div className="container mb-5">
                    <div className="wrapper">
                        <div className="row mt-5">
                            <div className="col-sm-12 col-md-12 col-lg-10 mx-auto p-5" style={{ background: "white" }}>
                                <h2 className="h4" style={{ textAlign: "center", color: "#cdb269" }}>ABOUT MYSELF</h2>
                                <h3>What do web developers do?
                                    Web developers create functional, user-friendly websites and web applications. They may write code, develop and test new applications, or monitor site performance and traffic.</h3>

                                <CustomBtn label='DOWNLOAD RESUME' onClick={handleSubmit} />
                                <hr />

                                <div className="skill">
                                    <div className="single-skill">
                                        <div className="progress-count">
                                            <p>WORDPRESS</p>
                                        </div>
                                        <div className="progress">
                                            <p>progress bar</p>
                                        </div>
                                    </div>
                                    <div className="single-skill mt-4">
                                        <div className="progress-count">
                                            <p>SEO</p>
                                        </div>
                                        <div className="progress">
                                            <p>progress bar</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="skill">
                                    <div className="single-skill mt-4">
                                        <div className="progress-count">
                                            <p>Front-end</p>
                                        </div>
                                        <div className="progress">
                                            <p>progress bar</p>
                                        </div>
                                    </div>
                                    <div className="single-skill mt-4">
                                        <div className="progress-count">
                                            <p>Back-end</p>
                                        </div>
                                        <div className="progress">
                                            <p>progress bar</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='experience-top section-padding mt-5'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-9 col-xl-10 col-lg-10">
                            <div className="section-tittle text-center mb-45">
                                <h2>My Experties</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center p-5">
                    <div className="col-xxl-6 col-xl-7 col-lg-6 p-5" style={{ backgroundColor: "#CDB269" }}>
                        <div className='experience' style={{ textAlign: "center" }}>
                            <h1 className='p-3' >WORDPRESS</h1>
                            <h2 className='p-3'>FRONT-END</h2>
                            <h2 className='p-3'>BACK-END</h2>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-5 col-lg-6 p-5">
                        <div className='section-tittle pl-30 m-0 p-4'>
                            <p>Writing well designed, testable, efficient code by using best software development practices. Creating website layout/user interfaces by using standard HTML/CSS practices. Integrating data from various back-end services and databases.</p>
                            <p>Web developer skills are often applied to the non-design aspects of building websites – writing markup and coding. Web developers may also use content management systems (CMS) to make content changes easier for other developers or end-users who may lack technical skills.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bottom-padding mb-4'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-tittle mb-5">
                                <h1>Experience</h1>
                            </div>
                        </div>
                        {
                            experienceDetails.map((experience) =>
                                <div className="offset-lg-2 col-xl-9 col-lg-9">
                                    <div className="single-about">
                                        <ExperienceContainer title={experience.title} presentDate={experience.showDate} text={experience.desc} />
                                    </div>
                                    <hr />
                                </div>
                            )
                        }

                    </div>
                </div>
            </section>

            <div className='container-fluid p-5' style={{ backgroundColor: '#CDB269' }}>
                <div className="row">
                    <div className='col-sm-12 col-md-12 col-lg-6'>
                        <img src="https://img.freepik.com/free-vector/man-using-laptop-cartoon_1308-120757.jpg" alt="Portfolio Image" />
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-6 d-flex align-items-center my-3'>
                        <h2>
                            I can work with team. Working with team will be helpful for them and also for me. We will share our ideas and make a solution for the every complicated problems.
                        </h2>
                    </div>
                </div>
            </div>

            <section className='section-padding mt-5 mb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-tittle mb-5">
                                <h1>Education</h1>
                            </div>
                        </div>
                        {
                            educationDetails.map((education) =>
                                <div className="offset-lg-2 col-xl-9 col-lg-9">
                                    <div className="single-about">
                                        <ExperienceContainer title={education.title} presentDate={education.comDate} text={education.desc} />
                                    </div>
                                    <hr />
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>

            <footer>
                <div className='footer-wrappr footer-padding p-5' style={{ backgroundColor: '#CDB269' }}>
                    <div className='footer-top'>
                        <div className="container">
                            <div className="row" style={{ justifyContent: 'center' }}>
                                <div className='col-xxl-9 col-xl-10 col-lg-10'>
                                    <div className='section-tittle text-center mb-45'>
                                        <h2>I'm developer, based in Islamabad, Pakistan. Currently working as Software Engineer in private company. You can contact me through the below contact form.</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-lg-8">
                                    <div className='form-wrapper'>
                                        <div className='footer-tittle'>
                                            <h2>Drop a Line</h2>
                                        </div>
                                        <form action="#" method='POST'>
                                            <div className="row">
                                                <div className='col-md-12 mt-3'>
                                                    <div className='form-box user-icon mb-15'>
                                                        <input type="text" id="name" placeholder='Your Name' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-12 mt-3'>
                                                    <div className='form-box user-icon mb-15'>
                                                        <input type="email" id="email"
                                                            name="email" placeholder='Your Email' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-12 mt-3'>
                                                    <div className='form-box user-icon mb-15'>
                                                        <input type="text" name='email' placeholder='Subject' className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-md-12 mt-3'>
                                                    <div className='form-box message-icon'>
                                                        <textarea name="" cols={50} rows={4} placeholder='Message' className='form-control'></textarea>
                                                    </div>
                                                    <div className='submit-info'>
                                                        <button className='btn mt-4 ' style={{ backgroundColor: 'black', color: 'white' }}>Send Message</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className='form-wrapper'>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="footer-tittle">
                                                    <h2>Contact Me</h2>
                                                    <ul>
                                                        <li><a href="#">E-11/2 markaz, Islamabad,Pakistan</a></li>
                                                        <li><a href="#">+92 3178012958</a></li>
                                                        <li><a href="#">ak9971259@gmail.com</a></li>
                                                    </ul>
                                                    <button className='btn mt-4 ' style={{ backgroundColor: 'black', color: 'white' }}>DOWNLOAD RESUME</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Home;