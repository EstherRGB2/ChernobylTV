//fetch.mjs

fetch('https://api.tvmaze.com/shows')
.then(res => res.json())
.then(res => console.log(res))