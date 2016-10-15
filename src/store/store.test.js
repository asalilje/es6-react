import {createStore} from 'redux';
import rootReducer from '../reducers/';
import expect from 'expect';
import * as CourseActions from '../actions/courseActions';
import initialState from '../reducers/initialState';

describe("Store", () => {

  it("should handle creating courses", () => {
    //arrange
    const store = createStore(rootReducer, initialState);
    const course = {id:1, title: 'A'};

    //act
    const action = CourseActions.createCourseSuccess(course);
    store.dispatch(action);

    //assert
    const actual = store.getState().courses[0];
    expect(actual).toEqual(course);
  })

});

