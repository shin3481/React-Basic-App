import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        //destructuring assigment
        const { name } = this.props;
        return (
            <div>
                <h2>클래스 타입 컴포넌트</h2>
                <h3>안녕하세요! <b>{name}</b></h3>
            </div>
        );
    }
}
MyComponent.defaultProps = {
    name: '리액트JS'
};
MyComponent.propTypes = {
    name: PropTypes.string
};
export default MyComponent;