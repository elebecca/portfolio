import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ with: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={4}>
                        <img
                            src='https://freesvg.org/img/Female-Avatar-5.png'
                            alt='avatar'
                            className='avatar-img'
                        />
                    </Cell>
                    <Cell col={8}>
                        <div className='banner-text'>
                            <h1>Frontend Developer</h1>
                            <hr style={{ borderTop: '3px solid #e22947' }} />
                            <p> HTLM/CSS | Ruby| Rails | Javascript | React |Jquery | Nodejs</p>

                            <div className='social-links'>
                                <a href='https://www.linkedin.com/in/elenabeccaro/' rel="noopener noreferrer" target='_blank'>
                                    <i className='fa fa-linkedin-square' aria-hidden='true' />
                                </a>
                                <a href='https://github.com/elebecca' rel="noopener noreferrer" target='_blank'>
                                    <i className='fa fa-github-square' aria-hidden='true' />
                                </a>
                                <a href='https://codepen.io/ElenaBeccaro/' rel="noopener noreferrer" target='_blank'>
                                    <i className='fa fa-codepen' aria-hidden='true' />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;