import React from 'react';
import './About.css';
import profile from '../../assets/profile.png';

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>Know About Me 🙌</h1>
            </div>

            <div className="about-sections">
                <div className="about-left">
                    <img src={profile} alt="Profile" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>
                            Hi! 👋 I’m Mehak Khan, a passionate and driven student on a journey to becoming a skilled software developer. Currently honing my skills in programming and problem-solving, I thrive on creating efficient and innovative solutions through code.
                        </p>
                        <p>
                            I’m proficient in Python, JavaScript, React, and more, and I’m constantly exploring new technologies to expand my knowledge. Whether it's developing web applications, diving into algorithms, or experimenting with new frameworks, I’m excited to tackle challenges and bring ideas to life.
                        </p>
                        <p>
                            Beyond coding, I value collaboration, learning from others, and contributing to meaningful projects that make an impact. Feel free to explore my portfolio to see my projects and skills in action. Let’s build something amazing together! 🚀
                        </p>
                    </div>

                    
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>Years of Learning</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>Projects Completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>Team Collaborations</p>
                </div>
            </div>
        </div>
    );
};

export default About;
