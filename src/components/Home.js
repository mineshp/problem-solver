import React, { Component } from 'react';
import {
    Container,
    Divider,
    Header,
    Segment
} from 'semantic-ui-react';

export default class HomepageLayout extends Component {
    constructor() {
        super();
        this.state = {};
    }

    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
            <div className="content-body">
                <Segment
                    textAlign="center"
                    className="home-segment"
                    vertical
                >
                    <Container text>
                        <Header
                            as="h2"
                            content="Welcome to the problem solver"
                            className="home-mainheader"
                        />
                        <Divider inverted section />
                        <div />
                    </Container>
                </Segment>
            </div>
        );
    }
}
