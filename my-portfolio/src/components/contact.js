import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Elena Beccaro</h2>
                        <img src='https://freesvg.org/img/Female-Avatar-5.png'
                            alt='avatar'
                            className='avatar-img' />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            I am a passionate developer with a strong background in graphic design. I'm fascinated about the intersection of technology of creativity. I’ve good communication skills, a can-do attitude and am always looking to go the extra mile. Recently I’ve been a graduate in Makers Academy (London's leading programming bootcamp) in order to become upskilled with best practice tools and methodologies.
                        </p>
                    </Cell>
                    <Cell col={6}>half page</Cell>
                </Grid>

            </div>
        )
    }
}

export default Contact;