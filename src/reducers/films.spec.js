import films from './films'

describe('films reducer', () => {
   it('should handle initial state', () => {
      expect(
         films(undefined, {})
      ).toEqual([]);
   });

   it('should handle ADD_FILM', () => {
      const testFilm = {title:"Test Title", year: 1990, genre: "Test Genre", rating: 5};
      expect(
         films([], {
            type: 'ADD_FILM',
            data: testFilm
         })
      ).toEqual([
         {title:"Test Title", year: 1990, genre: "Test Genre", rating: 5}
      ]);
   });

});
