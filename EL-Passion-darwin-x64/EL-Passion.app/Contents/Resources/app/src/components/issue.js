var React = require('react');
var ReactDOM = require('react-dom');


var Issue = React.createClass({

    getInitialState: function() {
        return {
            star: this.props.star
        };
    },

    changeState: function(){

        var newState = "";

        if (this.state.star == "on") {
            newState = "off";
        } else if (this.state.star == "off") {
            newState = "on";
        }

        this.setState({
            star: newState
        });
    },

    render: function(){

        return (
            <div className="issue">
                <span>{this.props.title}</span>
                <span onClick={this.changeState} className={this.state.star}></span>
            </div>
        )
    }
});

module.exports = Issue;
