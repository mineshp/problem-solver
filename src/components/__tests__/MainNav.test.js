import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Menu, Dropdown } from 'semantic-ui-react';
import MainNav from '../MainNav';

describe('MainNav Component', () => {
    const props = {
        username: 'testUser',
        logout: jest.fn()
    };

    const mockEvent = () => ({
        preventDefault: jest.fn()
    });

    describe('Guest User', () => {
        const guestProps = Object.assign({}, props, { username: null });

        it('renders navigation component with Sign In when user is not logged in', () => {
            const tree = renderer.create(
                <MemoryRouter>
                    <MainNav {...guestProps} />
                </MemoryRouter>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('displays a Sign-In menu', () => {
            const wrapper = shallow(<MainNav {...guestProps} />);
            const UserMenu = wrapper.find(Menu.Item).last();
            expect(UserMenu.props().children).toEqual('Sign-in');
        });
    });

    describe('Logged In User - non admin', () => {
        it('renders navigation component with Username when user is logged in', () => {
            const tree = renderer.create(<MemoryRouter><MainNav {...props} /></MemoryRouter>).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('displays the username', () => {
            const wrapper = shallow(<MainNav {...props} />);
            const UserMenu = wrapper.find(Menu.Item).last();
            expect(UserMenu.children().props().text).toEqual('TestUser');
        });

       it('displays a logout menu in the drop down', () => {
            const wrapper = shallow(<MainNav {...props} />);
            const UserMenu = wrapper.find(Menu.Item).last();
            const LogOut = UserMenu.find(Dropdown.Item).first();
            expect(LogOut.props().children).toEqual('Logout');
        });

        it('calls logout', () => {
            const wrapper = shallow(<MainNav {...props} />);
            const UserMenu = wrapper.find(Menu.Item).last();
            const LogOut = UserMenu.find(Dropdown.Item).first();
            wrapper.find(LogOut.props()).simulate('click', mockEvent());
            expect(props.logout).toHaveBeenCalled();
        });
    });

    it('ensure handleclick fires', () => {
        const wrapper = shallow(<MainNav {...props} />);
        const firstMenuItem = wrapper.find(Menu.Item).first();
        firstMenuItem.props().onClick(null, { name: 'home' });

        expect(wrapper.state().activeItem).toBe('home');
    });
});
