import expect from 'expect';
import * as CourseActions from './courseActions';
import * as ActionTypes from './actionTypes';
import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe("CourseActions", () => {

  describe("createCourseSuccess", () => {

    it("should create a CREATE_COURSE_SUCCESS action", ()=> {
      expect(CourseActions.createCourseSuccess({}).type).toBe("CREATE_COURSE_SUCCESS");
    });

    it("should create a LOAD_COURSES_SUCCESS action", ()=> {
      expect(CourseActions.loadCoursesSuccess({}).type).toBe("LOAD_COURSES_SUCCESS");
    });

  });

});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async actions", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses", (done) => {
    //nock("http://example.com")
    //  .get('/courses')
    //  .reply(200, {body: {courses: [{id:1, firstName: 'Cory', lastName: 'House'}]}});

    const expectedActions = [
      {type: ActionTypes.BEGIN_AJAX_CALL},
      {type: ActionTypes.LOAD_COURSES_SUCCESS, body:{courses: [{id:1, firstName: 'Cory', lastName: 'House'}]}}
    ];

    const store = mockStore({courses: [], expectedActions});
    store.dispatch(CourseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(ActionTypes.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(ActionTypes.LOAD_COURSES_SUCCESS);
      done();
    });

  });

})

