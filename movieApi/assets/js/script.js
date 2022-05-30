var tableBody = document.getElementById('repo-table');
var fetchButton = document.getElementById('fetch-button');

const getApi = async (event) => {
  // fetch request gets a list of all the repos for the node.js organization
  //allMovies
  // var requestUrl =
  //   "https://api.themoviedb.org/3/search/multi?api_key=1df06dcdcb3f1f4a68ad1988533b0aab&language=en-US&query=movie&page=1&include_adult=false";
  //Popular movies
  // var requestUrl =
  //   "https://api.themoviedb.org/3/movie/popular?api_key=1df06dcdcb3f1f4a68ad1988533b0aab&language=en-US&page=1";
  // TopRated
  var requestUrl =
    'https://api.themoviedb.org/3/movie/top_rated?api_key=1df06dcdcb3f1f4a68ad1988533b0aab&language=en-US&page=1';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.results.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        // console.log(
        //   "https://image.tmdb.org/t/p/w600_and_h900_bestv2/" +
        //     data.results[i].poster_path
        // );
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('img');

        // Setting the text of link and the href of the link
        link.src = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.results[i].poster_path}`;
        // link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
};

fetchButton.addEventListener('click', getApi);
