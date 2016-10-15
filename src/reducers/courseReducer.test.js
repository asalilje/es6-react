import expect from 'expect';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe("CourseReducer", () => {

  it("should add course when passed CREATE_COURSE_SUCCESS", () => {
    //arrange
    const initialState = [
      {title: 'A'},
      {title: 'B'}
    ];
    const newCourse = {title: 'C'};
    const action = actions.createCourseSuccess(newCourse);

    //act
    const newState = courseReducer(initialState, action);

    //assert
    expect(newState.length).toBe(3);
    expect(newState[2]).toEqual(newCourse);
    expect(newState[0].title).toBe('A');

  });

  it("should update course when passed action UPDATE_COURSE_SUCCESS", () => {
    //arrange
    const initialState = [
      {id: 1, title: 'A'},
      {id: 2, title: 'B'},
      {id: 3, title: 'C'}
    ];
    const updatedCourse = {id: 2, title: 'BB'};
    const action = actions.updateCourseSuccess(updatedCourse);

    //act
    const newState = courseReducer(initialState, action);

    //assert
    expect(newState.length).toBe(3);
    expect(newState.find(x => x.id == 2)).toEqual(updatedCourse);
    expect(newState.find(x => x.id == 1).title).toBe('A');
    expect(newState.find(x => x.id == 3).title).toBe('C');

  })



});
