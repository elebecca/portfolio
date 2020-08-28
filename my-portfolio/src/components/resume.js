import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Me from './profile_pic.jpg'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div>
                            <img className='picture'
                                src={Me}
                                alt='avatar'
                                style={{ height: '250px' }}
                            />
                        </div>
                        <div>
                            <h2 style={{ paddingTop: '1em' }} >Elena Beccaro</h2>
                            <h4 style={{ color: 'gray' }}>Frontend Developer</h4>
                            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                            <p>I am a passionate developer with a strong background in graphic design.
                            I'm fascinated about the intersection of technology of creativity.
                            I’ve good communication skills, a can-do attitude and am always looking to go the extra mile.
                            Recently I’ve been a graduate in Makers Academy (London's leading programming bootcamp) in order to become upskilled with best practice tools and methodologies.
                            I like to stay up to date with the latest frameworks and programming techniques. </p>
                            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                            <h5>Adress</h5>
                            <p>19D Hermon Hill, E15 67D, London </p>
                            <h5>Phone</h5>
                            <p>049 715638</p>
                            <h5>Email</h5>
                            <p>elena.beccaro@gmail.com</p>
                            <h5>Web</h5>
                            <p>elena.com</p>
                            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />

                        </div>


                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2020}
                            endYear={2020}
                            schoolName='Makers Academy'
                            schoolDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur diam turpis, posuere at urna in.'
                        />
                        <Education
                            startYear={2009}
                            endYear={2013}
                            schoolName='Università degli Studi di Padova'
                            schoolDescription='Bachelor degree in Arts'
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Experience</h2>
                        < Experience
                            startYear={2020}
                            endYear={2020}
                            jobName='Software Engineer training'
                            jobDescription={`Makers Academy is a 16-week intensive coding bootcamp focused on teaching the fundamentals of software engineering with Ruby & JavaScript

                            •	Write code using TDD
                            •	Creating functional database in PostgreSQL
                            •	Build a web app back-end and front-end in JavaScript and Ruby
                            •	Version control with Git, and collaboration with GitHub
                            •	Follow an effective debugging process`}

                            jobArchivemts={`Achievements\n
                            •	Write clean, reliable, and maintainable code
                            •	Principles of object-oriented design and test-driven development
                            •	Pair using the driver-navigator style
                            •	Work in an agile development team
                            •	Run stand-ups and retrospectives
                            •	Break down projects into tasks and allocate them to pairs`}
                        />
                        < Experience
                            startYear={2013}
                            endYear={2019}
                            jobName='Designer/ Fronted Software Developer'
                            jobDescription={`For the last 6 years, I have been working as a graphic designer for a different type of SME clients based in the UK and Italy. However, in the last year, I have been working in small projects as a front-end developer.

                            • Development of user interfaces using CSS, HTML, JQuery and Javascript
                            • Use of Bootstrap 3 for UI design.
                            • Use of GIT as a collaborative versioning tool.
                            • Use of Adobe Photoshop/Illustrator/InDesign.
                            • Design of logos, flyers, advertisements, illustrations, calendars, posters and corporate identity.
                            • Creation of business cards and brochures.
                            • Creation of custom-made solutions based on customer’s needs.`}

                            jobArchivemts={`Achievements\n
                            • Work effectively both in team-based environments and independently
                            • Attention to detail
                            • Self-trained freelance web developer.`}
                        />
                        < Experience
                            startYear={2015}
                            endYear={2016}
                            jobName='Graphic Designer'
                            jobDescription={`Integrity UK is an organisation committed to Countering Extremism through innovative approaches to promoting integration, cohesion and social reconciliation within the MENA region and the UK. We take a multilateral approach to achieve our aims which include capacity building programmes that promote democracy; empower women and local communities, and strengthen grassroots movements.

                            • Updating the UI in the main website with HTML/CSS.
                            • Use of Adobe Photoshop/Illustrator/InDesign.
                            • Creation of infographics and images for publications in social media.
                            • Developing the brand design. `}

                            jobArchivemts={`Achievements\n
                            
                            • Working on several projects simultaneously.
                            • Manage the time effectively, focusing on tasks of high importance and urgency first.`}
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill='Javascript'
                            progress={90}
                        />
                        <Skills
                            skill='HTLM/CSS'
                            progress={80}
                        />

                        <Skills
                            skill='Ruby'
                            progress={90}
                        />
                        <Skills
                            skill='React'
                            progress={80}
                        />
                        <Skills
                            skill='React'
                            progress={100}
                        />
                    </Cell>
                </Grid >
            </div >
        )
    }
}

export default Resume;