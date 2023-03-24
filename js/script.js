let movieData, tvData, movieInput, tvInput;

const $movieInput = $('#movieInput');
const $tvInput = $('#tvInput');
const $releaseDate = $('#releaseDate');
const $plot = $('#plot');

$('form').on('submit', handleGetMovieData);

function handleGetMovieData(event) {
  event.preventDefault();
  movieInput = $movieInput.val();
  $.ajax({
    url: `https://api.themoviedb.org/3/search/movie?api_key=79e62173ebd1cd7d36b96a19ae897878&language=en-US&query=` + movieInput + `&include_adult=false`
  }).then(
    (data) => {
      movieData = data.results[0];
      renderMovie();
      $('p').css('display', 'block');
    },
    (error) => {
      console.log('bad request', error);
    }
  );
}

function renderMovie() {
  $plot.text(movieData.overview);
  $releaseDate.text(movieData.release_date);
  const posterPath = movieData.poster_path;
  const imgUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`;

  $('body').css({
    'background-image': `url(${imgUrl})`,
    'background-size': '100% auto',
    'background-position-x': 'center',
    'background-position-y': '-50px'
  });
}

$('#newForm').on('submit', handleGetTVData);

function handleGetTVData(event) {
  event.preventDefault();
  tvInput = $tvInput.val();
  $.ajax({
    url: `https://api.themoviedb.org/3/search/tv?api_key=79e62173ebd1cd7d36b96a19ae897878&language=en-US&query=` + tvInput + `&include_adult=false`
  }).then(
    (data) => {
      tvData = data.results[0];
      renderTV();
      $('p').css('display', 'block');
    },
    (error) => {
      console.log('bad request', error);
    }
  );
}

function renderTV() {
  $plot.text(tvData.overview);
  $releaseDate.text(tvData.first_air_date);
  const posterPath = tvData.poster_path;
  const imgUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`;

  $('body').css({
    'background-image': `url(${imgUrl})`,
    'background-size': '100% auto',
    'background-position-x': 'center',
    'background-position-y': '-50px'
  });
}







//    $("body").addClass("movie-bg").css("background-image", `url(${imgUrl})`);
   

   
   
   
   
   
   
    //    const $img = $("<img>").attr("src", imgUrl);

    // $multiMedia.append($img);
    // const backgroundPath = mediaData.background_path;
    // const imgUrl2 = `https://image.tmdb.org/t/p/w500/${backgroundPath}`;





// $.ajax({
//     url: 'https://api.themoviedb.org/3/search/movie',
//   type: 'GET',
//   dataType: 'json',
//   data: {
//     api_key: '79e62173ebd1cd7d36b96a19ae897878',
//     language: 'en-US',
//     query: userInput