var React = require('react');
var ReactDOM = require('react-dom');

var NaviElement = React.createClass({

    activate: function(e){
        var naviElementWrappers = document.querySelectorAll('.navi-element-wrapper');
        for (var i = 0; i < naviElementWrappers.length; i++) {
            naviElementWrappers[i].classList.remove('active');
        }

        if (e.target.className == 'navi-element-wrapper') {
            e.target.classList.add('active');
        } else if(e.target.className == 'navi-element') {
            e.target.parentNode.classList.add('active');
        } else {
            e.target.parentNode.parentNode.classList.add('active');
        }

    },

    render: function(){

        var addedClass = "";

        if (this.props.isActive) {
            addedClass = "active";
        }

        return (
            <div onClick={this.activate} className={"navi-element-wrapper " + addedClass}>
                <div className="navi-element">
                    <div className={"navi-icon " + this.props.caption.toLowerCase()}></div>
                    <div className="navi-caption">{this.props.caption}</div>
                    <div className="navi-quantity">{this.props.quantity}</div>
                </div>
            </div>
        )
    }
});

module.exports = NaviElement;
