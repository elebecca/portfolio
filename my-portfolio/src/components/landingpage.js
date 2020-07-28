import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ with: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                            src='https://freesvg.org/img/Female-Avatar-5.png'
                            alt='avatar'
                            className='avatar-img'
                        />
                        <div className='banner-text'>
                            <h1>Frontend Developer</h1>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;