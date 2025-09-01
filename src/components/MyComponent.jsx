import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MyComponent.css';

class MyComponent extends Component {
    //컴포넌트 내부에 상태변수를 포함하는 state 객체선언
    state = {
        value: 0,
        message: '',
        username: '',
        isValid: false,
        messageArr: ['Angular', 'React', 'Vue', 'Ember'];
    };
    //event handler 함수선언
    handleDecrement = () => {
        this.setState({
            value: this.state.value - 1
        });
    };
    handleChange = (e) => {
        this.setState({

            [e.target.name]: e.target.value
        })
    }; //handleChange

    handleEnter = (e) => {
        const {message, messageArr} = this.state
        if (e.keyCode === 13) {
            this.setState({
                isValid: true,
                messageArr:[...messageArr, message],
                //첫번쨰 Input 엘리먼트 필드 초기화
                message: '',
            });
            this.myUsername.focus();
        }
    } //handleEnter

    render() {
        //destructuring assigment
        const { name, age } = this.props;
        const { value, message, username, isValid, messageArr } = this.state;
        const { handleDecrement, handleChange, handleEnter } = this;
        const messageList = messageArr.map((msg,idx) => (<li key={idx}>{msg}</li>));
        return (
            <div>
                <h2>클래스 타입 컴포넌트</h2>
                <h3>안녕하세요! <b>{name} - {age} </b></h3>
                <p>상태변수 value = {value}</p>
                <button onClick={() => (
                    this.setState({ value: value + 1 })
                )}
                >증가</button>
                <button onClick={handleDecrement}>감소</button>
                <dr />
                <p>상태변수 message = {message}</p>
                <input name="message" value={message} onChange={handleChange} onKeyDown={handleEnter} />
                <dr />
                <ul>
                    {messageList}
                </ul>
                <p>상태변수 username = {username}</p>
                <input name="username" value={username} onChange={handleChange}
                    className={isValid ? 'success' : 'failure'}
                    ref={(ref) => this.myUsername = ref}
                />

            </div>
        );
    }
}
MyComponent.defaultProps = {
    name: '리액트JS'
};
MyComponent.propTypes = {
    name: PropTypes.string, //name props 타입을 문자열로 설정함
    age: PropTypes.number.isRequired
};
export default MyComponent;