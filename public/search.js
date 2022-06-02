document.querySelector('#searchBar') = searchBar
document.querySelector('#autoComplete') = autoList

const movieSearch = async userInput => {
  const res = await fetch('../seeds/movie.js');
  const results = await res.json();
  let matches = results.filter(match => {
    const compare = new RegExp(`^${userInput}`, 'gi');
    return match.name.match(compare) || match.director.match(compare);
  });

  if (userInput.length === 0) {
    matches = [];
    autoList.innerHTML = '';
  }

  renderHTML(matches);
};

const renderHTML = matches => {
  if (matches.length > 0) {
    const html = matches.map(match => `
    <div class='card card-body mb-1' id='selectMovie'>
      <h4>${match.name} (${match.director})</h4>
    </div>
    `).join('');
    autoList.innerHTML = html;
  }
}

searchBar.addEventListener('input', () => movieSearch(search.value))