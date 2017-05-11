import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'cory', firstName: 'Cory', lastName: 'House'}
      ];

      const expected = [
        {value: 'cory', text: 'Cory House'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    })
  })
})