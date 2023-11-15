import React from "react"
import './home.css'
import ReactTypingEffect from 'react-typing-effect';
function Home() {
    return (
        <div id="home" className="home-container p-2" data-aos="fade-right" >

            <div className="home-subcontainer">

                <div className="details" >
                    <div className="home-subcontainer-header header-font text-white mb-5">
                        <h2 className="home-subcontainer-header">Hello I'm Harsh :-)</h2>
                    </div>
                    <div className="m-5 d-flex justify-content-center flex-column">
                        <div className="home-details-name">
                            <h3 className="text-white header-font d-flex justify-content-center"  >
                                <ReactTypingEffect
                                    speed={100}
                                    eraseDelay={300}
                                    typingDelay={500}
                                    text={["React Developer", "Blockchain Enthusiast", "MERN stack developer"]}
                                />
                                <br />
                            </h3>
                        </div>
                        <div className="home-buttons ml-2 d-flex justify-content-center">
                            <a href="https://drive.google.com/file/d/1EIljDM-_ckUUSIWRFwuJZ4SWz5mqRelg/view?usp=sharing" className="btn primary-btn" rel="noreferrer" target="_blank">
                                <button className="btn text-white resume-btn blue ">Get Resume </button>
                            </a>
                            <a href="#projects" className="btn primary-btn" rel="noreferrer" >
                            <button className="btn text-white resume-btn blue">Go To Projects</button>
                            </a>
                        </div>
                        <div className="col d-flex d-flex justify-content-center">
                            <a className="mx-4 " href="https://www.linkedin.com/in/harsh-joshi-a87454198/" target="_blank" rel="noreferrer">
                                <i className="fa fa-linkedin"></i>
                            </a>

                            <a href="https://github.com/HarshJoshi123" target="_blank" rel="noreferrer">
                                <i className="fa fa-github"></i>
                            </a>

                        </div>
                    </div>
                </div>


            </div>

        </div>

    )

}
export default Home
