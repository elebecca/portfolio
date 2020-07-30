import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }
    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Ruby</Tab>
                    <Tab>Rails</Tab>
                    <Tab>Javascipt</Tab>
                    <Tab>React</Tab>
                </Tabs>
            </div>
        )
    }
}

export default Projects;