import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../Loading';

describe('Loading', () => {
    it('renders spinner', () => {
        const tree = renderer.create(<Loading />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
