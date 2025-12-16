import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import { requests } from '../api/tmdb';

const base_url = "https://image.tmdb.org/t/p/original/";
import Modal from '../components/Modal';
import { GlobalContext } from '../context/GlobalState';
import { useContext, useState } from 'react';

function HomeScreen() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const { watchlist, addMovieToWatchlist, removeMovieFromWatchlist } = useContext(GlobalContext);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    const isInWatchlist = (movieId) => watchlist.some(m => m.id === movieId);

    return (
        <div className="bg-[#111] min-h-screen text-white">
            <Navbar />
            <Banner onMovieClick={handleMovieClick} />

            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow onMovieClick={handleMovieClick} />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} onMovieClick={handleMovieClick} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} onMovieClick={handleMovieClick} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} onMovieClick={handleMovieClick} />
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} onMovieClick={handleMovieClick} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} onMovieClick={handleMovieClick} />
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} onMovieClick={handleMovieClick} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} onMovieClick={handleMovieClick} />

            {selectedMovie && (
                <Modal
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                    onAddToWatchlist={addMovieToWatchlist}
                    onRemoveFromWatchlist={removeMovieFromWatchlist}
                    isInWatchlist={isInWatchlist(selectedMovie.id)}
                />
            )}
        </div>
    );
}

export default HomeScreen;
