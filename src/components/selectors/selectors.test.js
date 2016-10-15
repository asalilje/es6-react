import {AuthorsForDropdown} from './selectors';
import expect from 'expect';

describe("Author selectors", () => {

  it("should return authors formatted for dropdown", () => {
    const authors = [
      {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
      {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
    ];

    const expected = [
      {value: 'cory-house', text: 'Cory House'},
      {value: 'scott-allen', text: 'Scott Allen'}
    ];

    expect(AuthorsForDropdown(authors)).toEqual(expected);
  });

});
