require('../less/main.less');
var React = require('react');
var ReactDOM = require('react-dom');
var Navi = require('./components/navi');
var Day = require('./components/day');
var Data = require('./data');

'use strict';

var Main = React.createClass({



render: function(){

    var Days = [];

    for (var i = 0; i < Data.length; i++) {
         Days.push(<Day
                    key={i} 
                    date={Data[i]['day']}
                    issues={Data[i]['issues']}
                    />);
    }

    return (
        <div id="wrapper">

            <div id="left">
                <Navi />
            </div>

            <div id="right">
                <div className="right-wrap">
                    {Days}
                </div>
            </div>

        </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById('content'));
