/**
 * @jsx React.DOM
 */

var Label = React.createClass({
    propTypes: {

    }
    getInitialState: function () {
      return {
        clicked: false
      };
    },

    handleClick: function(){
        if (this.state.clicked === false) {
          this.setState({
            textBeforeClick: this.props.children,
            clicked: true
          });
          this.props.children = "Text After Click";
        } else {
          this.setState({
            clicked: false
          });
          this.props.children = this.state.textBeforeClick;
        }
    },

    render: function () {
        return (
            <p ref="p" onClick={this.handleClick}>{this.props.children}</p>
            );
    }
});

