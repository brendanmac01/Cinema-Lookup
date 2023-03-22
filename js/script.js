let mediaData, userInput;

const $input = $(`input[type="text"]`)
const $multiMedia = $(`#multiMedia`)
const $releaseDate = $(`#releaseDate`)
const $genres = $(`#genres`)
const $actors = $(`#actors`)
const $plot = $(`#plot`)

$(`form`).on(`submit`, handleGetData)

function handleGetData(event) {
    event.preventDefault()
    userInput = $input.val()
$.ajax({
    url: `https://api.themoviedb.org/3/search/movie?api_key=79e62173ebd1cd7d36b96a19ae897878&language=en-US&query=` + userInput + `&include_adult=true`
}).then(
    (data) => {
        mediaData = data.results[0];
        render();
        $("p").css("display", "block");
    },
    (error) => {
     console.log('bad request', error);
    }
  );
}
function render() {
    $plot.text(mediaData.overview);
    $releaseDate.text(mediaData.release_date)
    const posterPath = mediaData.poster_path;
    const imgUrl = `https://image.tmdb.org/t/p/w500/${posterPath}`;

    $("body").css({
        "background-image": `url(${imgUrl})`,
        // "background-repeat": "no-repeat",
        "background-size": "100% auto",
        "background-position-x": "center",
        "background-position-y": "-50px"
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