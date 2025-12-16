export const mockMovies = {
    trending: [
        // {
        //     id: 1,
        //     name: "Stranger Things",
        //     original_name: "Stranger Things",
        //     overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
        //     backdrop_path: "/56v2KjBlU4XaOv9rVYkJu64MILb.jpg", // Random hash, will need real URLs or placeholders if these 404
        //     poster_path: "/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        //     vote_average: 8.6,
        //     first_air_date: "2016-07-15",
        //     original_language: "en",
        //     popularity: 123.4
        // },
        {
            id: 2,
            name: "The Crown",
            title: "The Crown",
            overview: "The life and reign of Queen Elizabeth II.",
            backdrop_path: "/rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg",
            poster_path: "/scZlQQYnDVlnpxFTuEbNwKDzh92.jpg",
            vote_average: 8.2,
            release_date: "2016-11-04",
        },
        // {
        //     id: 3,
        //     title: "Inception",
        //     overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
        //     backdrop_path: "/s3TBrRGB1jav7loZ1Gj9tK9mMOR.jpg",
        //     poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
        //     vote_average: 8.4,
        //     release_date: "2010-07-15",
        // },
        {
            id: 4,
            title: "Dune",
            overview: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
            backdrop_path: "/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
            poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
            vote_average: 7.9,
            release_date: "2021-09-15"
        },
        {
            id: 5,
            title: "Spider-Man: No Way Home",
            overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
            backdrop_path: "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
            poster_path: "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
            vote_average: 8.0,
            release_date: "2021-12-15"
        }
    ],
    netflixOriginals: [
        // {
        //     id: 6,
        //     name: "Squid Game",
        //     backdrop_path: "/oaGvjB0DTHhX4M6p6lYjcNIuZSY.jpg",
        //     poster_path: "/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
        //     overview: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes.",
        //     vote_average: 7.8,
        //     first_air_date: "2021-09-17"
        // },
        {
            id: 7,
            title: "Dune",
            overview: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
            backdrop_path: "/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
            poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
            vote_average: 7.9,
            release_date: "2021-09-15"
        },
        {
            id: 8,
            title: "Spider-Man: No Way Home",
            overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
            backdrop_path: "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
            poster_path: "/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg",
            vote_average: 8.0,
            release_date: "2021-12-15"
        }
        // {
        //     id: 7,
        //     name: "Bridgerton",
        //     backdrop_path: "/nJ9yPZf6Z1jH7wV6aP0J7qK8d.jpg",
        //     poster_path: "/luoKHgfvX7Z9qJ0fJ7zF9vX7h.jpg",
        //     overview: "Wealth, lust, and betrayal set against the backdrop of Regency-era England.",
        //     vote_average: 7.3,
        //     first_air_date: "2020-12-25"
        // }
    ]
};

// Helper to generate more items by duplicating
export const getMockData = (type) => {
    let baseData = mockMovies.trending;
    if (type.includes('networks=213')) baseData = mockMovies.netflixOriginals;

    // Duplicate to fill a row
    return {
        data: {
            results: [...baseData, ...baseData, ...baseData, ...baseData].map((m, i) => ({ ...m, id: m.id + i * 100 }))
        }
    };
};
