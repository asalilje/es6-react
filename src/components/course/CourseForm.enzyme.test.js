import expect from 'expect';
import React from 'react';
import {shallow, mount} from 'enzyme';
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

  return shallow(<CourseForm {...props} />);
}

describe("Testing CourseForm with Enzyme", () => {

  it("should contain a form and an H1", () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toBe("Manage Course");
  });

  it("should say 'save' when not saving", () => {
    const wrapper = setup(false);
    expect(wrapper.find('input[type="submit"]').props().value).toBe("Save");
  });

  it("should say 'saving' when saving", () => {
    const wrapper = setup(true);
    expect(wrapper.find('input[type="submit"]').props().value).toBe("Saving");
  });


});
