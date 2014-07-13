/**
 * @jsx React.DOM
 */

var App = React.createClass({displayName: 'App',

    render: function(){
        return (
            React.DOM.div(null, 
                "Application is Ready",
                Label(null, "Label Text")
            )
            );
    }
});

var appInstance  = App( {key:"AppKey"} );

React.renderComponent(
    appInstance,
    document.getElementById('container')
);

