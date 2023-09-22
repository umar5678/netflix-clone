import Row from "./Row";
import Banner from "./Banner"
import Nav from "./Nav"
import "./App.css";
import request from "./requests";


function App() {
  return (
    <div className="app">

      <Nav />
      <Banner />
      <Row
        title={"Netflix originals"}
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={"Trending"} fetchUrl={request.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={request.fetchTopRated} />
      <Row title={"Action movies"} fetchUrl={request.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={request.fetchComedyMovies} />
      <Row title={"Romance Movies"} fetchUrl={request.fetchRomanceMovies} />
      <Row title={"Horror Movies"} fetchUrl={request.fetchHorrorMovies} />
      <Row title={"Documentries"} fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
