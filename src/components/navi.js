var React = require('react');
var ReactDOM = require('react-dom');
var NaviElement = require('./navi-element');

var Navi = React.createClass({

    render: function(){

        return (
            <div className="navi">
                <NaviElement quantity='12' isActive={true} caption="All"/>
                <NaviElement quantity='4' caption="Open"/>
                <NaviElement quantity='8' caption="Closed"/>
            </div>
        )
    }
});

module.exports = Navi;
