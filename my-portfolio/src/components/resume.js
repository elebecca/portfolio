import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';

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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Curabitur diam turpis, posuere at urna in, dictum dignissim sem. Quisque malesuada blandit erat sit amet commodo.
                                Nam mollis, odio sollicitudin condimentum volutpat, mauris eros tempus quam, quis hendrerit libero metus quis ex. </p>
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
                        <Education />
                    </Cell>
                </Grid >
            </div >
        )
    }
}

export default Resume;