import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Project from './project';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className='projects-grid'>
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#e22947', height: '176px', background: 'url(https://github.com/elebecca/Minefield/blob/master/screenshot.png?raw=true) center / cover' }} >Minefield</CardTitle>
                        <CardText>
                            Build a game web application that allow you to play to minefield. The goal of the game is to find the beer follow the arrow.Be careful, if you find the skull you will lose. This is my first attempt to create somthing with Javascript.
                            The web site is fully responsive
                        </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/elebecca/Minefield'>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#e22947', height: '176px', background: 'url(https://github.com/elebecca/10_local_storage/blob/master/screenshot.PNG?raw=true) center / cover' }} >Locoal Storage</CardTitle>
                        <CardText>
                            Learning how to use local storage and converting data in JSON
                        </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/elebecca/10_local_storage' >GitHub</Button>
                            <Button colored href='https://codepen.io/ElenaBeccaro/pen/ExPzEKN'>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#e22947', height: '176px', background: 'url(https://github.com/elebecca/02_JS_Clock/raw/master/screenshot.PNG) center / cover' }} >Clock</CardTitle>
                        <CardText>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/elebecca/02_JS_Clock' >GitHub</Button>
                            <Button colored href='https://codepen.io/ElenaBeccaro/details/VweOXBB'>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 4 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#e22947', height: '176px', background: 'url(https://github.com/elebecca/05_Flex_panel_gallery/raw/master/screenshot_1.PNG) center / cover' }} >Galley</CardTitle>
                        <CardText>
                            build a Galley with Javascript and flexbox.
            </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/elebecca/05_Flex_panel_gallery' >GitHub</Button>
                            <Button colored href='https://codepen.io/ElenaBeccaro/pen/dyGEmOJ'>CodePen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    /// refactor 
                    <Project
                        img={'https://github.com/elebecca/05_Flex_panel_gallery/raw/master/screenshot_1.PNG'}
                        description='build a Galley with Javascript and flexbox.'
                        GitHub={'https://github.com/elebecca/05_Flex_panel_gallery'}
                    />
                /// refactor 
                </div>


            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className='projects-grid'>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#e22947', height: '176px', background: 'url(https://github.com/elebecca/COVID-19-Tracker-Application/raw/master/screenshot.PNG) center / cover' }}>Covid Tracker</CardTitle>
                        <CardText>
                            Create a full COVID-19 Tracker
                        </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/elebecca/COVID-19-Tracker-Application'>GitHub</Button>
                            <Button colored href='https://covid19statswebsite.netlify.app/'>Live</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className='projects-grid'>
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#e22947', height: '176px', background: 'url(https://github.com/elebecca/CV/raw/master/postbox.PNG) center / cover' }}>Postbox</CardTitle>
                        <CardText>
                            PostBox is a Virtual gifting app.In these times of isolation it’s more important than ever to spread happiness. This is a virtual care packages to send to family, friends and other loved ones.
                        </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/elebecca/MakersPostBox'>GitHub</Button>
                            <Button colored href='https://makers-postbox.herokuapp.com/'>Live</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#e22947', height: '176px', background: 'url(https://github.com/elebecca/CV/raw/master/Makersb&b.PNG) center / cover' }}>MakersB&B</CardTitle>
                        <CardText>
                            A full stack Airbnb clone demonstrating core functionality
                        </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/elebecca/Makersbnb'>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#e22947', height: '176px', background: 'url(https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg) center / cover' }}>tech test</CardTitle>
                        <CardText>
                            Tech test in ruby just backaend
                        </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/elebecca/Week_10-bank_tech_test'>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>


            )
        }
    }



    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Javascript</Tab>
                    <Tab>React</Tab>
                    <Tab>Ruby</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Projects;