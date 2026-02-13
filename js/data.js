// ============================================
// FILM DATA - Nathan Dalton's Filmography
// ============================================
const films = [
    {
        id: 1,
        title: "Soul of a Sister",
        year: "2025",
        trailer: "https://www.youtube.com/watch?v=_JfFCumJWww",
        description: "A powerful BET+ Original Drama following a once-promising singer whose bright future is dimmed by the harsh realities of the music industry. A decade later, despite struggling with addiction and depression, she rises up to overcome her challenges. Premieres March 27, 2025 on BET+.",
        poster: "https://m.media-amazon.com/images/M/MV5BOGFjYWYzNzQtMTU1My00N2RhLTkxZWQtNTEyOTE4ZjgyZDY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        streaming: [
            { name: "BET+", url: "https://www.bet.plus/" }
        ],
        imdb: "https://www.imdb.com/title/tt23777476/"
    },
    {
        id: 2,
        title: "Haunted House of Pancakes",
        year: "2025",
        trailer: "https://www.youtube.com/watch?v=lLBAOYRpLP0",
        description: "A horror-comedy where a demonic possession takes over a diner on Halloween night, transforming the food into bloodthirsty creatures out for revenge. A waiter and college student must battle killer food in this cursed diner.",
        poster: "https://m.media-amazon.com/images/M/MV5BNTEzMTU4ZDEtZDQ2ZC00MTIyLTkyNjctOTQ4ZGU2NzY1Zjk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        streaming: [
            { name: "Tubi", url: "https://tubitv.com/movies/100050803/haunted-house-of-pancakes" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=VrgwhFfXYjI" }
        ],
        imdb: "https://www.imdb.com/title/tt30274534/"
    },
    {
        id: 3,
        title: "Bad Apples",
        year: "2025",
        trailer: "https://youtu.be/qo6hr_0VY-c",
        description: "A bombastic satire of the modern classroom. Director Steven Morris helms this comedic take on education, with Nathan Dalton as writer and executive producer. Now available worldwide.",
        poster: "https://m.media-amazon.com/images/M/MV5BY2QwY2I3MTQtY2Q4Yi00ZjZmLWE4MGUtNWQ4ZDM1YTY3ODBmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        streaming: [
            { name: "Rent on Amazon", url: "https://www.amazon.com/gp/video/detail/B0GKRBVSH6/ref=atv_dp_share_cu_r" }
        ],
        imdb: "https://www.imdb.com/title/tt22030122/"
    },
    {
        id: 4,
        title: "Shady Grove",
        year: "2022",
        trailer: "https://www.youtube.com/watch?v=18njbzzRIWs",
        description: "An occult horror-thriller that won Best Feature at the Days of the Dead film festival. A young couple seeking tranquility in an isolated rental cabin discovers they've checked into a nightmare. Distributed worldwide by Gravitas Ventures.",
        poster: "https://m.media-amazon.com/images/M/MV5BY2JhZjg1MmYtZmZjZi00MzlmLTkwODgtYTQ4Y2MzMTE4YjExXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        streaming: [
            { name: "Tubi", url: "https://tubitv.com/movies/705483/shady-grove" },
            { name: "YouTube", url: "https://www.youtube.com/watch?v=7rZU9xdZiHg" },
            { name: "Prime Video", url: "https://www.primevideo.com/detail/Shady-Grove/0LBD2VD84BA01MFEYHG702S5ZR" }
        ],
        imdb: "https://www.imdb.com/title/tt15262652/"
    },
    {
        id: 5,
        title: "Attack of the Killer Donuts",
        year: "2016",
        trailer: "https://www.youtube.com/watch?v=T1rT1K3cEGs",
        description: "A horror-comedy that premiered at Cannes! When a chemical accident turns ordinary donuts into bloodthirsty killers, a small town must fight back against the most delicious threat they've ever faced. Distributed by Cardinal XD.",
        poster: "https://m.media-amazon.com/images/M/MV5BMmU3ZDFlNzQtN2UwZC00NDQ0LWFhMTItNjkyNjFlYTE2Zjg2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        streaming: [
            { name: "Tubi", url: "https://tubitv.com/movies/555131/attack-of-the-killer-donuts" },
            { name: "YouTube", url: "https://youtu.be/E4Y5UGDniZk" },
            { name: "Prime Video", url: "https://www.primevideo.com/detail/Attack-of-the-Killer-Donuts/0HGF224DAVN9Q12A7N1N8H4WMR" },
            { name: "Plex", url: "https://watch.plex.tv/movie/attack-of-the-killer-donuts" }
        ],
        imdb: "https://www.imdb.com/title/tt4480398/"
    }
];

// ============================================
// NEWS DATA - Recent updates
// ============================================
const news = [
    {
        id: 1,
        date: "February 2025",
        title: "'Soul of a Sister' Premieres on BET+",
        content: "Excited to announce that 'Soul of a Sister,' a BET+ Original Film I co-wrote, premieres March 27th, 2025! This powerful drama stars Paula Jai Parker and explores one woman's journey to overcome addiction and reclaim her dreams."
    },
    {
        id: 2,
        date: "January 2025",
        title: "'Haunted House of Pancakes' Now Streaming",
        content: "The full horror-comedy feature is now available to stream on YouTube! Watch as a demonic possession takes over a diner on Halloween night. Free to watch - link in the film section!"
    },
    {
        id: 3,
        date: "October 2022",
        title: "'Shady Grove' Release & Award Win",
        content: "'Shady Grove' won Best Feature at the Days of the Dead Film Festival and is now available on all major digital platforms including Amazon Prime Video, Tubi, and free with ads on The Roku Channel!"
    }
];
