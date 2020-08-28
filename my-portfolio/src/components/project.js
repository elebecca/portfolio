import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, CardMenu, IconButton, Button } from 'react-mdl';

class Project extends Component {
    render() {
        return (
            <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                <CardTitle ><img src={this.props.img} className='card-img' style={{ height: '250px', background: 'center / cover' }} />{this.props.title}</CardTitle>
                <CardText>
                    <p>{this.props.description}</p>
                </CardText>
                <CardActions border>
                    <Button colored href={this.props.GitHub}>GitHub</Button>
                </CardActions>
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

        )
    }
}
export default Project;