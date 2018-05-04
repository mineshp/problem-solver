import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Dropdown, Menu } from 'semantic-ui-react';

export default class MainNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: 'view'
        };
        this.handleItemClick = this.handleItemClick.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleItemClick(e, { name }) {
        this.setState({ activeItem: name });
    }

    logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        const { activeItem } = this.state;
        const { username } = this.props;
        const displayName = username
            ? `${username.charAt(0).toUpperCase() + username.slice(1)}`
            : null;
        return (
            <div className="header-main">
                <Menu>
                    <Menu.Item
                        as={Link}
                        to="/"
                        name="home"
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />

                    <Menu.Item>
                        <span className="moto">Welcome to the app</span>
                    </Menu.Item>

                    {
                        this.props.username
                            ?
                            (
                                <Menu.Item position="right">
                                    <Dropdown text={displayName} icon="user" floating labeled button className="icon blue">
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={this.logout}>Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Menu.Item>
                            )
                            :
                            (<Menu.Item
                                as={Link}
                                to="/user/login"
                                position="right"
                                name="sign-in"
                                active={activeItem === 'sign-in'}
                                onClick={this.handleItemClick}
                            >Sign-in
                            </Menu.Item>)
                    }
                </Menu>
            </div>
        );
    }
}

MainNav.propTypes = {
    username: PropTypes.string,
    logout: PropTypes.func.isRequired
};

MainNav.defaultProps = {
    username: null
};
