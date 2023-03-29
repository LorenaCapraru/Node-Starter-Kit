//WEEK 1

// const trainees = [
//   { name: "Lorena", region: "north-west" },
//   { name: "Magda", region: "west" },
//   { name: "Emilia", region: "South" },
//   { name: "Joe", region: "south-west" },
//   { name: "John", region: "north-est" },
// ];

// const express = require("express");
// const app = express();

// app.listen(9090, () => {
//   console.log("Server is listening on port 9090. Ready to accept requests!");
// });
// app.get("/", function (request, response) {
//   response.send("Yey from server to the client");
// });
// app.get("/trainees", function (request, response) {
//   console.log(request.query.region, "request.query.region");

//   response.send(trainees.filter((el) => el.region === request.query.region));
// });

//WEEK 2 YouTube Videos
// const express = require("express");
// const app = express();

// app.listen(9090, (request, response) => {
//   console.log("Server listening on port 9090");
// });

// const movies = [
//   {
//     id: 82,
//     url: "https://www.tvmaze.com/shows/82/game-of-thrones",
//     name: "Game of Thrones",
//     type: "Scripted",
//     language: "English",
//   },
//   {
//     id: 34,
//     url: "https://www.tvmaze.com/shows/34/helix",
//     name: "Helix",
//     type: "Scripted",
//     language: "English",
//   },
// ];

// app.get("/", (request, response) => {
//   response.status(200).send("WELCOME to my movie API");
// });

// app.get("/movies", (request, response) => {
//   response.status(200).send(movies);
// });

// app.use(express.json());
// app.post("/movies", (request, response) => {
//   const newMovie = request.body;
//   movies.push(newMovie);
//   response.send({ newMovie });
// });

// app.get("/movies/:id", (request, response) => {
//   const elementId = movies.find((el) => el.id === Number(request.params.id));
//   response.send(elementId);
//   // console.log(request.params);
// });

//Week 2 Lesson
const express = require("express");
const app = express();

app.listen(9090, (request, response) => {
  console.log("Server listening on port 9090");
});

app.use(express.json());

const albumsData = [
  {
    albumId: "10",
    artistName: "Beyoncé",
    collectionName: "Lemonade",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music20/v4/23/c1/9e/23c19e53-783f-ae47-7212-03cc9998bd84/source/100x100bb.jpg",
    releaseDate: "2016-04-25T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/PeonBmeFR8o?rel=0&amp;controls=0&amp;showinfo=0",
  },
  {
    albumId: "11",
    artistName: "Beyoncé",
    collectionName: "Dangerously In Love",
    artworkUrl100:
      "http://is1.mzstatic.com/image/thumb/Music/v4/18/93/6d/18936d85-8f6b-7597-87ef-62c4c5211298/source/100x100bb.jpg",
    releaseDate: "2003-06-24T07:00:00Z",
    primaryGenreName: "Pop",
    url: "https://www.youtube.com/embed/ViwtNLUqkMY?rel=0&amp;controls=0&amp;showinfo=0",
  },
];

app.get("/albums", function (req, res) {
  res.send(albumsData);
});

app.post("/albums", function (request, response) {
  const newAlbum = request.body;
  albumsData.push(newAlbum);
  response.status(200).send(newAlbum);
});

app.get("/albums/:id", function (request, response) {
  const album = albumsData.find((album) => album.albumId === request.params.id);
  response.send(album);
});

app.delete("/albums/:id", function (request, response) {
  const albumDeleted = albumsData.find(
    (album) => album.albumId === request.params.id
  );
  albumsData.splice(albumsData.indexOf(albumDeleted), 1);
  response.send(albumDeleted);
});

app.put('albums/:id', (request, response)=>{
  
})