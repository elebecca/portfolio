import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{ marginTop: '0px' }}>{this.props.jobName}</h4>
                    <p className="display-linebreak">{this.props.jobDescription}</p>
                    <p className="display-linebreak">{this.props.jobArchivemts}</p>
                </Cell>
            </Grid>
        )
    }
}
export default Experience;