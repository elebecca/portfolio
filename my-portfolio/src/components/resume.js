import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img style={{ textAlign: 'center' }}
                                src='https://freesvg.org/img/Female-Avatar-5.png'
                                alt='avatar'
                                style={{ height: '200px' }}
                            />
                        </div>
                        <div>
                            <h2 style={{ paddingTop: '2em' }} >Elena Beccaro</h2>
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
                            startYear={2015}
                            endYear={2025}
                            schoolName='Dams'
                            schoolDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur diam turpis, posuere at urna in.'
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Experience</h2>
                        < Experience
                            startYear={2020}
                            endYear={2020}
                            jobName='Software Engineer training'
                            jobDescription='Makers Academy is a 16-week intensive coding bootcamp focused on teaching the fundamentals of software engineering with Ruby & JavaScript

                            •	Write code using TDD
                            •	Creating functional database in PostgreSQL
                            •	Build a web app back-end and front-end in JavaScript and Ruby
                            •	Version control with Git, and collaboration with GitHub
                            •	Follow an effective debugging process'
                            jobArchivemts='
                            •	Write clean, reliable, and maintainable code
                            •	Principles of object-oriented design and test-driven development
                            •	Pair using the driver-navigator style
                            •	Work in an agile development team
                            •	Run stand-ups and retrospectives
                            •	Break down projects into tasks and allocate them to pairs'
                        />
                        < Experience
                            startYear={2013}
                            endYear={2019}
                            jobName='designer'
                            jobDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur diam turpis, posuere at urna in.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur diam turpis, posuere at urna in.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur diam turpis, posuere at urna in.'
                        />
                        < Experience
                            startYear={2015}
                            endYear={2016}
                            jobName='designer'
                            jobDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur diam turpis, posuere at urna in.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur diam turpis, posuere at urna in.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur diam turpis, posuere at urna in.'
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill='Javascript'
                            progress={75}
                        />
                        <Skills
                            skill='HTLM/CSS'
                            progress={90}
                        />
                        <Skills
                            skill='Ruby'
                            progress={75}
                        />
                        <Skills
                            skill='React'
                            progress={50}
                        />
                    </Cell>
                </Grid >
            </div >
        )
    }
}

export default Resume;