import React from "react";

class UserClass extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    }
    
    render() {

        const {count} = this.state;

        return (
            <div className="userCard">
                <h1>count: {count}</h1>
                <button className="border-2 border-blue-400" onClick={() => { this.setState({
                    count : this.state.count + 1,
                }) }}>count increase</button>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: Chalisgoan</h3>
                <h4>Contact: 7744876005</h4>
            </div>
          )
    }
}

export default UserClass;