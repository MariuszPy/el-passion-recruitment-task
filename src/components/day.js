var React = require('react');
var ReactDOM = require('react-dom');
var Issue = require('./issue');
var Data = require('../data');

var Day = React.createClass({

    render: function(){

        var topics = [];

        for (var i =0; i < this.props.issues.length; i++) {
            topics.push(<Issue key={i} title={this.props.issues[i].title} star={this.props.issues[i].star}/>);
        }

        return (
            <div className="day">
                <p>{this.props.date}</p>
                {topics}
            </div>
        )
    }
});

module.exports = Day;
