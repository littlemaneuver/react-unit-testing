/**
 * @jsx React.DOM
 */

"use strict";

var ReactTestUtils;

describe("Label Test",function(){
    beforeEach(function() {
        ReactTestUtils = React.addons.ReactTestUtils;
    });


    it("Check Text Assignment", function () {
        var label = <Label>Some Text We Need for Test</Label>;
        ReactTestUtils.renderIntoDocument(label);
        expect(label.refs.p).toBeDefined();
        expect(label.refs.p.props.children).toBe("Some Text We Need for Test");
        expect(label.state.clicked).toBeFalsy();
    });

    it("Click", function () {
        var label  = <Label>Some Text We Need to Test</Label>;
        ReactTestUtils.renderIntoDocument(label);

        ReactTestUtils.Simulate.click(label.refs.p);
        expect(label.refs.p.props.children).toBe("Text After Click");
        expect(label.state.clicked).toBeTruthy();


        ReactTestUtils.Simulate.click(label.refs.p);
        expect(label.refs.p.props.children).toBe("Some Text We Need to Test");
        expect(label.state.clicked).toBeFalsy();
    });

});
