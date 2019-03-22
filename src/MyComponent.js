import React, {Component} from 'react';
// import propTypes from 'prop-Types';

// const propTypes ={
//     name: PropTypes.string,
//     onClick: PropTypes.func,
//     title: Proptypes.string,
// }

class MyComponent extends Component {
    render() {
        const {title, name, onClick} = this.props
        return (
            <div className="component">
                <h1>title: {title}</h1>
                <h2> Name: {name}</h2> 
                <div onClick = {onClick}>Click me</div> 
            </div>
        );
    }
}

myComponent.propTypes = propTypes;

export default MyComponent