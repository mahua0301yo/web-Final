const apiKey = '49d824bc';
    const categories = {
  '首頁': [],
'動畫': [
    'Spirited Away', 'Your Name', 'Howl\'s Moving Castle', 'Princess Mononoke', 'My Neighbor Totoro',
    'Kiki\'s Delivery Service', 'Ponyo', 'The Wind Rises', 'Weathering with You', 'The Tale of the Princess Kaguya',
    'Akira', 'Ghost in the Shell', 'Nausicaä of the Valley of the Wind', 'Grave of the Fireflies', 'Paprika',
    'A Silent Voice', 'The Garden of Words', '5 Centimeters per Second', 'Perfect Blue', 'Tokyo Godfathers',
    'The Boy and the Beast', 'Belle', 'Summer Wars', 'Wolf Children', 'The Girl Who Leapt Through Time',
    'In This Corner of the World', 'Redline', 'The Secret World of Arrietty', 'When Marnie Was There', 'Big Hero 6',
    'Zootopia', 'Frozen', 'Frozen II', 'Encanto', 'Tangled', 'Moana', 'Raya and the Last Dragon', 'Luca', 'Turning Red',
    'Coco', 'Soul', 'Inside Out', 'Brave', 'Finding Nemo', 'Finding Dory', 'Wall-E', 'Up', 'Toy Story', 'Toy Story 2',
    'Toy Story 3', 'Toy Story 4'
  ],
  '動作': [
    'Mad Max: Fury Road', 'John Wick', 'John Wick: Chapter 2', 'John Wick: Chapter 3', 'John Wick: Chapter 4',
    'The Dark Knight', 'Inception', 'The Matrix', 'The Matrix Reloaded', 'The Matrix Revolutions',
    'Tenet', 'Interstellar', 'The Batman', 'Avengers: Endgame', 'Avengers: Infinity War',
    'Captain America: Civil War', 'Iron Man', 'Iron Man 2', 'Iron Man 3', 'Thor: Ragnarok',
    'Guardians of the Galaxy', 'Black Panther', 'Doctor Strange', 'Shang-Chi', 'The Marvels',
    'The Equalizer', 'The Equalizer 2', 'The Equalizer 3', 'Taken', 'Taken 2', 'Taken 3',
    'Skyfall', 'No Time to Die', 'Casino Royale', 'Quantum of Solace', 'Spectre',
    'Fast & Furious', 'Furious 7', 'Fast Five', 'Hobbs & Shaw', 'Mission: Impossible – Fallout',
    'Mission: Impossible – Dead Reckoning', 'Top Gun: Maverick', 'Edge of Tomorrow',
    'Transformers', 'Transformers: Dark of the Moon', 'Bumblebee', 'The Bourne Identity', 'The Bourne Ultimatum'
  ],
  '喜劇': [
    'Superbad', 'The Hangover', 'The Hangover Part II', 'The Hangover Part III', 'Step Brothers',
    'Anchorman', 'Anchorman 2', 'Dumb and Dumber', 'Tropic Thunder', 'Bridesmaids',
    'Mean Girls', 'Clueless', 'Pitch Perfect', '21 Jump Street', '22 Jump Street',
    'Zombieland', 'Zombieland: Double Tap', 'Deadpool', 'Deadpool 2', 'Free Guy',
    'The Nice Guys', 'Game Night', 'Crazy Rich Asians', 'The Grand Budapest Hotel', 'The French Dispatch',
    'The Intern', 'The Proposal', 'Yes Man', 'Liar Liar', 'The Mask',
    'Shaun of the Dead', 'Hot Fuzz', 'Scott Pilgrim vs. The World', 'Palm Springs', 'Eurovision Song Contest',
    'Night at the Museum', 'Night at the Museum: Battle of the Smithsonian', 'School of Rock', 'The 40-Year-Old Virgin',
    'Forgetting Sarah Marshall', 'Knives Out', 'Glass Onion', 'Juno', 'Napoleon Dynamite',
    'Ferris Bueller\'s Day Off', 'The Breakfast Club', 'Super Troopers', 'White Chicks', 'Get Smart'
  ],
  '科幻': [
    'Inception', 'Interstellar', 'The Matrix', 'The Matrix Resurrections', 'Tenet',
    'Blade Runner', 'Blade Runner 2049', 'Dune', 'Dune: Part Two', 'Arrival',
    '2001: A Space Odyssey', 'Ad Astra', 'Gravity', 'The Martian', 'Edge of Tomorrow',
    'Ready Player One', 'Minority Report', 'Oblivion', 'Elysium', 'District 9',
    'Ex Machina', 'Annihilation', 'The Fifth Element', 'Ghost in the Shell', 'I, Robot',
    'AI: Artificial Intelligence', 'Her', 'Looper', 'Snowpiercer', 'Passengers',
    'Sunshine', 'Contact', 'War of the Worlds', 'Independence Day', 'Star Trek',
    'Star Trek Into Darkness', 'Star Trek Beyond', 'Avatar', 'Avatar: The Way of Water',
    'Guardians of the Galaxy', 'Ant-Man and the Wasp: Quantumania', 'The Tomorrow War', 'Ender\'s Game',
    'Love and Monsters', 'Chaos Walking', 'Moon', 'The Prestige', 'Dark City', 'The Island'
  ],
  '恐怖': [
    'The Conjuring', 'The Conjuring 2', 'The Conjuring: The Devil Made Me Do It', 'Annabelle', 'Annabelle: Creation',
    'Annabelle Comes Home', 'The Nun', 'The Nun II', 'Insidious', 'Insidious: Chapter 2',
    'Insidious: The Red Door', 'Sinister', 'The Exorcist', 'The Exorcist: Believer', 'Hereditary',
    'Midsommar', 'The Babadook', 'The Witch', 'It Follows', 'The Ring',
    'The Grudge', 'It', 'It Chapter Two', 'A Quiet Place', 'A Quiet Place Part II',
    'The Boogeyman', 'Smile', 'Barbarian', 'X', 'Pearl',
    'Texas Chainsaw Massacre', 'Halloween', 'Halloween Kills', 'Halloween Ends', 'Scream',
    'Scream VI', 'Scream 4', 'The Cabin in the Woods', 'Don\'t Breathe', 'Us',
    'Get Out', 'Nope', 'The Visit', 'The Others', 'The Mist',
    '1408', 'The Shining', 'Doctor Sleep', 'Final Destination', 'The Orphan'
  ]
    };

    const allMovies = [...new Set(Object.values(categories).flat())];

    const storiesEl   = document.getElementById('stories');
    const feedEl      = document.getElementById('feed');
    const spinnerEl   = document.getElementById('spinner');
    const searchInput = document.getElementById('searchInput');

    let searchQuery = '';
    let currentPage = 1;
    let totalPages  = 1;
    let isLoading   = false;

    
    Object.keys(categories).forEach(cat => {
      if (cat === '首頁') {
        const home = document.createElement('div');
        home.className = 'story';
        home.dataset.cat = cat;
        home.innerHTML = `<div class="icon">🏠</div><div class="label">首頁</div>`;
        home.addEventListener('click', () => {
          deactivateStories(); home.classList.add('active');
          resetSearch(); renderHome();
        });
        storiesEl.appendChild(home);
        return;
      }

      const div = document.createElement('div');
      div.className = 'story';
      div.dataset.cat = cat;
      div.innerHTML = `<div class="icon">${cat}</div><div class="label">${cat}</div>`;
      div.addEventListener('click', () => {
        deactivateStories(); div.classList.add('active');
        resetSearch(); renderCategory(cat);
      });
      storiesEl.appendChild(div);
    });

    function deactivateStories() {
      document.querySelectorAll('.story').forEach(s => s.classList.remove('active'));
    }
    function resetSearch() {
      searchQuery = '';
      searchInput.value = '';
      currentPage = 1;
      totalPages = 1;
    }

    function showSpinner() { spinnerEl.style.display = 'block'; }
    function hideSpinner() { spinnerEl.style.display = 'none'; }

    async function renderCategory(cat) {
      feedEl.innerHTML = '';
      showSpinner();
      await Promise.all(categories[cat].map(title => fetchCategoryMovie(title, cat)));
      hideSpinner();
    }

    async function fetchCategoryMovie(title, category) {
      try {
        const res  = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}&plot=short`);
        const data = await res.json();
        if (data.Response === 'True') appendCard(data, category);
      } catch (e) { console.error(e); }
    }

    async function searchMovies(query, page=1) {
      if (isLoading) return;
      isLoading = true; showSpinner();
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(query)}&page=${page}`);
        const data = await res.json();
        if (data.Response === 'True') {
          await Promise.all(data.Search.map(async item => {
            const resDetail = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${item.imdbID}&plot=short`);
            const detail = await resDetail.json();
            if (detail.Response === 'True') appendCard(detail);
          }));
          const total = parseInt(data.totalResults,10);
          totalPages = Math.ceil(total/10);
          currentPage = page;
        }
      } catch (e) { console.error(e); }
      hideSpinner(); isLoading = false;
    }

    function appendCard(data, category='') {
      const card = document.createElement('div');
      card.className = 'movie-card';
      card.innerHTML = `
        <img src="${data.Poster!=='N/A'?data.Poster:'https://via.placeholder.com/600x900?text=No+Image'}" alt="${data.Title}">
        <div class="info">
          ${category ? `<div class="category-tag">@${category}</div>` : ''}
          <div class="title">${data.Title}</div>
          <div class="year">${data.Year}</div>
          <div class="plot">${data.Plot && data.Plot !== 'N/A' ? data.Plot : '（無電影簡介）'}</div>
        </div>`;
      feedEl.appendChild(card);
    }

    searchInput.addEventListener('keypress', e => {
      if (e.key==='Enter') {
        const q = searchInput.value.trim();
        if (!q) return;
        deactivateStories();
        resetSearch();
        feedEl.innerHTML='';
        searchQuery = q;
        searchMovies(q,1);
      }
    });

    window.addEventListener('scroll', () => {
      if (searchQuery && !isLoading && currentPage < totalPages) {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 50) {
          searchMovies(searchQuery, currentPage + 1);
        }
      }
    });

    document.addEventListener('DOMContentLoaded', () => {
      deactivateStories();
      hideSpinner();
      const randomCount = 30;
      const shuffled = allMovies.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, randomCount);
      feedEl.innerHTML = ''; showSpinner();
      Promise.all(selected.map(title => fetchCategoryMovie(title, '推薦電影'))).then(hideSpinner);
    });