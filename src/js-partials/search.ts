
import { renderGallery } from './gallery';
import { setMoviesFunction } from './pagination';
import { getMovies } from './themoviedbAPI';

const
  searchFilmForm = document.querySelector('.header-search') as HTMLFormElement & {
    elements: {
      searchMovie: HTMLInputElement
    }
  } | undefined

if (searchFilmForm) {
  const searchFilmInput = searchFilmForm.elements.searchMovie

  searchFilmForm.addEventListener('submit', e => {
    e.preventDefault();
    let query = searchFilmInput.value ?? '';
    // console.log(query);
    getNameFilmAPI(query);
  });
}

async function getNameFilmAPI(query: string) {
  setMoviesFunction(async (page = 1) => {
    const movies = await getMovies(query, page);
    renderGallery(movies);
    return movies
  })
}