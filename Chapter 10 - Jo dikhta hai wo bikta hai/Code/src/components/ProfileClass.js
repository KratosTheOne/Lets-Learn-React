import React from 'react';

class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy Name",
                followers: "0",
                following: "0",
            }
        };
        console.log("Child constructor " + this.props.name);
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log("Namaste React OP");
        }, 1000);
        console.log("Child componentDidMount " + this.props.name);
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("componentWillUnmount");
    }

    render() {
        console.log("Child render " + this.props.name);
        return (
            <div>
                <h1>This is a Profile Component using Class based Components</h1>
                <h2>Name: {this?.state?.userInfo?.name}</h2>
                <h2>Followers: {this?.state?.userInfo?.followers}</h2>
                <h2>following: {this?.state?.userInfo?.following}</h2>
            </div>
        );
    };
};

export default ProfileClass;