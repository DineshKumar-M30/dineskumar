import React, { useState, useEffect } from 'react';
import axios from '../api/tmdb';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [scrollX, setScrollX] = useState(0);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    // Simple horizontal scroll handler (can be purely CSS too, but buttons are nice)
    const rowRef = React.useRef(null);

    const scroll = (offset) => {
        if (rowRef.current) {
            rowRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };


    return (
        <div className="ml-5 text-white">
            <h2 className="text-xl font-bold">{title}</h2>

            <div className="relative group">
                {/* Left Arrow */}
                <div
                    className="absolute left-0 top-0 bottom-0 z-40 w-12 bg-black/50 hover:bg-black/70 cursor-pointer hidden group-hover:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                    onClick={() => scroll(-500)}
                >
                    <ChevronLeft className="w-8 h-8 text-white" />
                </div>

                <div
                    ref={rowRef}
                    className="flex p-5 overflow-y-hidden overflow-x-scroll no-scrollbar gap-2.5 scroll-smooth"
                    style={{
                        scrollbarWidth: 'none', /* Firefox */
                        msOverflowStyle: 'none', /* IE/Edge */
                    }}
                >
                    {movies.map((movie) => (
                        ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                key={movie.id}
                                onClick={() => onMovieClick && onMovieClick(movie)}
                                className={`max-h-[100px] object-contain transition-transform duration-450 hover:scale-108 cursor-pointer ${isLargeRow ? "max-h-[250px]" : ""}`}
                                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.name}
                            />
                        )
                    ))}
                </div>

                {/* Right Arrow */}
                <div
                    className="absolute right-0 top-0 bottom-0 z-40 w-12 bg-black/50 hover:bg-black/70 cursor-pointer hidden group-hover:flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                    onClick={() => scroll(500)}
                >
                    <ChevronRight className="w-8 h-8 text-white" />
                </div>
            </div>
        </div>
    );
}

export default Row;
