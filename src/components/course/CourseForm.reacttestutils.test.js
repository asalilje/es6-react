import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import CourseForm from './CourseForm';


function setup(saving) {
  const props = {
    course: {},
    onSave: () => {},
    onChange: () => {},
    saving: saving,
    errors: {},
    allAuthors: []
  };

  let renderer = ReactTestUtils.createRenderer();
  renderer.render(<CourseForm {...props} />);
  let output = renderer.getRenderOutput();
  return {
    props,
    renderer,
    output
  };
}


describe("Testing course form with react test utils", () => {

  it("should contain a form and an h1", () => {
    const {output} = setup(false);
    expect(output.type).toBe('form');

    const [h1, textinput] = output.props.children;
    expect(h1.type).toBe('h1');
    expect(h1.props.children).toBe("Manage Course");
  });

  it("should say 'save' when not saving", () => {
    const {output} = setup(false);
    const submit = output.props.children[5];
    expect(submit.props.value).toBe("Save");
  });

  it("should say 'saving' when saving", () => {
    const {output} = setup(true);
    const submit = output.props.children[5];
    expect(submit.props.value).toBe("Saving");
  });

});
