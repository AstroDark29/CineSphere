
        // Sample movie database
        const movies = [
            // Original English Movies
            {id: 1, title: "Inception", genre: "Sci-Fi, Thriller", year: 2010, rating: 8.8, director: "Christopher Nolan", cast: "Leonardo DiCaprio, Tom Hardy", runtime: "148 min", description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.", icon: "🌀", poster: "https://images.moviesanywhere.com/828288e8eff24b4e7851f6404ec98b67/ed5440ea-03ce-4038-8538-10845b0c7d82.jpg", type: "Movie", language: "English"},
            {id: 2, title: "The Shawshank Redemption", genre: "Drama", year: 1994, rating: 9.3, director: "Frank Darabont", cast: "Tim Robbins, Morgan Freeman", runtime: "142 min", description: "Two imprisoned men bond over years, finding solace and eventual redemption.", icon: "🔒", poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg", type: "Movie", language: "English"},
            {id: 3, title: "The Dark Knight", genre: "Action, Crime", year: 2008, rating: 9.0, director: "Christopher Nolan", cast: "Christian Bale, Heath Ledger", runtime: "152 min", description: "Batman must accept one of the greatest psychological and physical tests to fight injustice.", icon: "🦇", poster: "https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg", type: "Movie", language: "English"},
            {id: 4, title: "Pulp Fiction", genre: "Crime, Drama", year: 1994, rating: 8.9, director: "Quentin Tarantino", cast: "John Travolta, Uma Thurman", runtime: "154 min", description: "Various interconnected stories of Los Angeles criminals, gangsters, and their activities.", icon: "🔫", poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg", type: "Movie", language: "English"},
            {id: 5, title: "Forrest Gump", genre: "Drama, Romance", year: 1994, rating: 8.8, director: "Robert Zemeckis", cast: "Tom Hanks, Robin Wright", runtime: "142 min", description: "The presidencies of Kennedy and Johnson unfold through the perspective of an Alabama man.", icon: "🏃", poster: "https://image.tmdb.org/t/p/w500/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg", type: "Movie", language: "English"},
            {id: 6, title: "The Matrix", genre: "Sci-Fi, Action", year: 1999, rating: 8.7, director: "Wachowski Brothers", cast: "Keanu Reeves, Laurence Fishburne", runtime: "136 min", description: "A computer hacker learns from mysterious rebels about the true nature of his reality.", icon: "💊", poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", type: "Movie", language: "English"},
            {id: 7, title: "Interstellar", genre: "Sci-Fi, Adventure", year: 2014, rating: 8.6, director: "Christopher Nolan", cast: "Matthew McConaughey, Anne Hathaway", runtime: "169 min", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", icon: "🚀", poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", type: "Movie", language: "English"},
            {id: 8, title: "Goodfellas", genre: "Crime, Drama", year: 1990, rating: 8.7, director: "Martin Scorsese", cast: "Robert De Niro, Ray Liotta", runtime: "146 min", description: "The story of Henry Hill and his life in the mob, covering his relationship with his wife and partners.", icon: "🎰", poster: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg", type: "Movie", language: "English"},
            {id: 9, title: "The Silence of the Lambs", genre: "Crime, Thriller", year: 1991, rating: 8.6, director: "Jonathan Demme", cast: "Jodie Foster, Anthony Hopkins", runtime: "118 min", description: "A young FBI cadet must receive help from an incarcerated cannibal killer to catch another serial killer.", icon: "🦋", poster: "https://m.media-amazon.com/images/I/61o-mUgN++L.jpg", type: "Movie", language: "English"},
            {id: 10, title: "Parasite", genre: "Drama, Thriller", year: 2019, rating: 8.5, director: "Bong Joon Ho", cast: "Song Kang-ho, Lee Sun-kyun", runtime: "132 min", description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.", icon: "🏠", poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", type: "Movie", language: "English"},
            {id: 11, title: "The Godfather", genre: "Crime, Drama", year: 1972, rating: 9.2, director: "Francis Ford Coppola", cast: "Marlon Brando, Al Pacino", runtime: "175 min", description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", icon: "👔", poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg", type: "Movie", language: "English"},
            {id: 12, title: "Fight Club", genre: "Drama", year: 1999, rating: 8.8, director: "David Fincher", cast: "Brad Pitt, Edward Norton", runtime: "139 min", description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club.", icon: "👊", poster: "https://image.tmdb.org/t/p/w500/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg", type: "Movie", language: "English"},
            
            // New English Movies
            {id: 13, title: "Oppenheimer", genre: "Biography, Drama", year: 2023, rating: 8.5, director: "Christopher Nolan", cast: "Cillian Murphy, Emily Blunt", runtime: "180 min", description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.", icon: "💣", poster: "https://m.media-amazon.com/images/M/MV5BM2RmYmVmMzctMzc5Ny00MmNiLTgxMGUtYjk1ZDRhYjA2YTU0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", type: "Movie", language: "English"},
            {id: 14, title: "Dune", genre: "Sci-Fi, Adventure", year: 2021, rating: 8.0, director: "Denis Villeneuve", cast: "Timothée Chalamet, Zendaya", runtime: "155 min", description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset.", icon: "🏜️", poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", type: "Movie", language: "English"},
            {id: 15, title: "Everything Everywhere All at Once", genre: "Action, Comedy", year: 2022, rating: 8.0, director: "Daniels", cast: "Michelle Yeoh, Stephanie Hsu", runtime: "139 min", description: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence.", icon: "🌈", poster: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg", type: "Movie", language: "English"},
            {id: 16, title: "Top Gun: Maverick", genre: "Action, Drama", year: 2022, rating: 8.3, director: "Joseph Kosinski", cast: "Tom Cruise, Miles Teller", runtime: "131 min", description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator.", icon: "✈️", poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg", type: "Movie", language: "English"},
            {id: 17, title: "The Batman", genre: "Action, Crime", year: 2022, rating: 7.9, director: "Matt Reeves", cast: "Robert Pattinson, Zoë Kravitz", runtime: "176 min", description: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.", icon: "🦇", poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", type: "Movie", language: "English"},
            {id: 18, title: "Avatar: The Way of Water", genre: "Sci-Fi, Adventure", year: 2022, rating: 7.7, director: "James Cameron", cast: "Sam Worthington, Zoe Saldana", runtime: "192 min", description: "Jake Sully and his family fight to stay together and survive on Pandora.", icon: "🌊", poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", type: "Movie", language: "English"},
            {id: 19, title: "Spider-Man: No Way Home", genre: "Action, Adventure", year: 2021, rating: 8.3, director: "Jon Watts", cast: "Tom Holland, Zendaya", runtime: "148 min", description: "Spider-Man's identity is revealed, and he asks Doctor Strange for help, leading to multiverse chaos.", icon: "🕷️", poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", type: "Movie", language: "English"},
            {id: 20, title: "Joker", genre: "Crime, Drama", year: 2019, rating: 8.4, director: "Todd Phillips", cast: "Joaquin Phoenix, Robert De Niro", runtime: "122 min", description: "In Gotham City, mentally troubled comedian Arthur Fleck embarks on a downward spiral into revolution.", icon: "🤡", poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", type: "Movie", language: "English"},
            {id: 21, title: "1917", genre: "War, Drama", year: 2019, rating: 8.3, director: "Sam Mendes", cast: "George MacKay, Dean-Charles Chapman", runtime: "119 min", description: "Two British soldiers must cross enemy territory to deliver a message that will stop a deadly attack.", icon: "⚔️", poster: "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg", type: "Movie", language: "English"},
            {id: 22, title: "Avengers: Endgame", genre: "Action, Adventure", year: 2019, rating: 8.4, director: "Anthony and Joe Russo", cast: "Robert Downey Jr., Chris Evans", runtime: "181 min", description: "The Avengers assemble once more to reverse the damage caused by Thanos.", icon: "⚡", poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", type: "Movie", language: "English"},

            // Hindi Movies
            {id: 23, title: "3 Idiots", genre: "Comedy, Drama", year: 2009, rating: 8.4, director: "Rajkumar Hirani", cast: "Aamir Khan, Kareena Kapoor", runtime: "170 min", description: "Two friends embark on a quest to find their long-lost companion and reminisce about their college days.", icon: "🎓", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKcCQzVVeVI5K9wirde6fTA6IY6B77OIlKBg&s", type: "Movie", language: "Hindi"},
            {id: 24, title: "Dangal", genre: "Biography, Drama", year: 2016, rating: 8.3, director: "Nitesh Tiwari", cast: "Aamir Khan, Fatima Sana Shaikh", runtime: "161 min", description: "A former wrestler trains his daughters to become world-class wrestlers.", icon: "🤼", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Dangal_Poster.jpg/250px-Dangal_Poster.jpg", type: "Movie", language: "Hindi"},
            {id: 25, title: "PK", genre: "Comedy, Drama", year: 2014, rating: 8.1, director: "Rajkumar Hirani", cast: "Aamir Khan, Anushka Sharma", runtime: "153 min", description: "An alien on Earth loses his communication device and questions religious dogmas.", icon: "👽", poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11290399_p_v8_ad.jpg", type: "Movie", language: "Hindi"},
            {id: 26, title: "Taare Zameen Par", genre: "Drama, Family", year: 2007, rating: 8.3, director: "Aamir Khan", cast: "Darsheel Safary, Aamir Khan", runtime: "165 min", description: "An eight-year-old dyslexic boy finds understanding and inspiration from an art teacher.", icon: "🎨", poster: "https://upload.wikimedia.org/wikipedia/en/b/b4/Taare_Zameen_Par_Like_Stars_on_Earth_poster.png", type: "Movie", language: "Hindi"},
            {id: 27, title: "Drishyam", genre: "Crime, Drama", year: 2015, rating: 8.2, director: "Nishikant Kamat", cast: "Ajay Devgn, Tabu", runtime: "163 min", description: "A man goes to extreme lengths to save his family from the dark consequences of their actions.", icon: "🔍", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Drishyam_2015_film.jpg/250px-Drishyam_2015_film.jpg", type: "Movie", language: "Hindi"},
            {id: 28, title: "Andhadhun", genre: "Crime, Thriller", year: 2018, rating: 8.3, director: "Sriram Raghavan", cast: "Ayushmann Khurrana, Tabu", runtime: "139 min", description: "A blind pianist witnesses a murder and gets entangled in a web of deceit.", icon: "🎹", poster: "https://m.media-amazon.com/images/I/71Zk8KSESoL._AC_UF1000,1000_QL80_.jpg", type: "Movie", language: "Hindi"},
            {id: 29, title: "Zindagi Na Milegi Dobara", genre: "Comedy, Drama", year: 2011, rating: 8.1, director: "Zoya Akhtar", cast: "Hrithik Roshan, Farhan Akhtar", runtime: "155 min", description: "Three friends on a bachelor trip in Spain discover themselves and their friendship.", icon: "🏖️", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Zindagi_Na_Milegi_Dobara.jpg/250px-Zindagi_Na_Milegi_Dobara.jpg", type: "Movie", language: "Hindi"},
            {id: 30, title: "Bajrangi Bhaijaan", genre: "Action, Drama", year: 2015, rating: 8.0, director: "Kabir Khan", cast: "Salman Khan, Harshaali Malhotra", runtime: "163 min", description: "An Indian man helps a mute Pakistani girl reunite with her family across the border.", icon: "🙏", poster: "https://upload.wikimedia.org/wikipedia/en/d/dd/Bajrangi_Bhaijaan_Poster.jpg", type: "Movie", language: "Hindi"},
            {id: 31, title: "Queen", genre: "Comedy, Drama", year: 2014, rating: 8.1, director: "Vikas Bahl", cast: "Kangana Ranaut, Rajkummar Rao", runtime: "146 min", description: "A shy woman embarks on a solo honeymoon to Europe and discovers herself.", icon: "👸", poster: "https://upload.wikimedia.org/wikipedia/en/4/45/QueenMoviePoster7thMarch.jpg", type: "Movie", language: "Hindi"},
            {id: 32, title: "Article 15", genre: "Crime, Drama", year: 2019, rating: 8.1, director: "Anubhav Sinha", cast: "Ayushmann Khurrana, Nassar", runtime: "130 min", description: "A police officer investigates the disappearance of three young girls in rural India.", icon: "⚖️", poster: "https://upload.wikimedia.org/wikipedia/en/1/11/Article_15_Poster.jpg", type: "Movie", language: "Hindi"},

            // South Indian Movies
            {id: 33, title: "Baahubali: The Beginning", genre: "Action, Drama", year: 2015, rating: 8.0, director: "S.S. Rajamouli", cast: "Prabhas, Rana Daggubati", runtime: "159 min", description: "A young man learns about his royal heritage and begins a journey to claim his throne.", icon: "⚔️", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Baahubali_The_Beginning_poster.jpg/250px-Baahubali_The_Beginning_poster.jpg", type: "Movie", language: "South Indian"},
            {id: 34, title: "Baahubali 2: The Conclusion", genre: "Action, Drama", year: 2017, rating: 8.2, director: "S.S. Rajamouli", cast: "Prabhas, Rana Daggubati", runtime: "167 min", description: "The epic saga continues as Baahubali seeks revenge and reclaims his kingdom.", icon: "👑", poster: "https://m.media-amazon.com/images/I/81T4v8GOhBL._AC_UF1000,1000_QL80_.jpg", type: "Movie", language: "South Indian"},
            {id: 35, title: "KGF: Chapter 1", genre: "Action, Drama", year: 2018, rating: 8.3, director: "Prashanth Neel", cast: "Yash, Srinidhi Shetty", runtime: "156 min", description: "Rocky rises from poverty to become the kingpin of a gold mine.", icon: "💎", poster: "https://a.ltrbxd.com/resized/film-poster/4/9/2/8/9/4/492894-k-g-f-chapter-1-0-230-0-345-crop.jpg?v=5dc2d7039d", type: "Movie", language: "South Indian"},
            {id: 36, title: "KGF: Chapter 2", genre: "Action, Drama", year: 2022, rating: 8.4, director: "Prashanth Neel", cast: "Yash, Sanjay Dutt", runtime: "168 min", description: "Rocky continues his quest for dominance while facing powerful enemies.", icon: "🔥", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/K.G.F_Chapter_2.jpg/250px-K.G.F_Chapter_2.jpg", type: "Movie", language: "South Indian"},
            {id: 37, title: "RRR", genre: "Action, Drama", year: 2022, rating: 8.0, director: "S.S. Rajamouli", cast: "N.T. Rama Rao Jr., Ram Charan", runtime: "187 min", description: "Two legendary revolutionaries embark on a journey away from their homeland.", icon: "🦁", poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg", type: "Movie", language: "South Indian"},
            {id: 38, title: "Pushpa: The Rise", genre: "Action, Crime", year: 2021, rating: 7.6, director: "Sukumar", cast: "Allu Arjun, Rashmika Mandanna", runtime: "179 min", description: "A laborer rises through the ranks of a red sandalwood smuggling syndicate.", icon: "🌲", poster: "https://resizing.flixster.com/AE8lfGOaDoyaRMtXGKUvm1imjuk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21200456_v_v8_aa.jpg", type: "Movie", language: "South Indian"},
            {id: 39, title: "Vikram", genre: "Action, Thriller", year: 2022, rating: 8.3, director: "Lokesh Kanagaraj", cast: "Kamal Haasan, Vijay Sethupathi", runtime: "174 min", description: "A former RAW agent investigates a series of murders linked to drug cartels.", icon: "🕵️", poster: "https://upload.wikimedia.org/wikipedia/en/5/59/Vikram_soundtrack.jpg", type: "Movie", language: "South Indian"},
            {id: 40, title: "Soorarai Pottru", genre: "Drama", year: 2020, rating: 8.9, director: "Sudha Kongara", cast: "Suriya, Aparna Balamurali", runtime: "153 min", description: "Inspired by the life of Captain GR Gopinath, a man dreams of making flying affordable for everyone.", icon: "✈️", poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17982732_p_v8_aa.jpg", type: "Movie", language: "South Indian"},
            {id: 41, title: "Jai Bhim", genre: "Crime, Drama", year: 2021, rating: 8.8, director: "T. J. Gnanavel", cast: "Suriya, Lijomol Jose", runtime: "164 min", description: "A lawyer fights for the rights of tribal people wrongfully accused of theft.", icon: "⚖️", poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20749753_p_v10_aa.jpg", type: "Movie", language: "South Indian"},
            {id: 42, title: "Kantara", genre: "Action, Drama", year: 2022, rating: 8.3, director: "Rishab Shetty", cast: "Rishab Shetty, Sapthami Gowda", runtime: "148 min", description: "A tribal warrior battles against a corrupt landlord to protect his village's forest.", icon: "🌳", poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p23030032_p_v12_ab.jpg", type: "Movie", language: "South Indian"},

            // Web Series
            {id: 43, title: "Stranger Things", genre: "Sci-Fi, Horror", year: 2016, rating: 8.7, director: "The Duffer Brothers", cast: "Millie Bobby Brown, Finn Wolfhard", runtime: "4 Seasons", description: "A group of kids in a small town uncover supernatural mysteries and secret government experiments.", icon: "🔦", poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", type: "Series", language: "English"},
            {id: 44, title: "Breaking Bad", genre: "Crime, Drama", year: 2008, rating: 9.5, director: "Vince Gilligan", cast: "Bryan Cranston, Aaron Paul", runtime: "5 Seasons", description: "A chemistry teacher turned methamphetamine producer partners with a former student.", icon: "🧪", poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg", type: "Series", language: "English"},
            {id: 45, title: "Game of Thrones", genre: "Fantasy, Drama", year: 2011, rating: 9.2, director: "David Benioff", cast: "Emilia Clarke, Kit Harington", runtime: "8 Seasons", description: "Noble families vie for control of the Iron Throne in the Seven Kingdoms of Westeros.", icon: "🐉", poster: "https://image.tmdb.org/t/p/w500/7WUHnWGx5OO145IRxPDUkQSh4C7.jpg", type: "Series", language: "English"},
            {id: 46, title: "The Crown", genre: "Biography, Drama", year: 2016, rating: 8.6, director: "Peter Morgan", cast: "Claire Foy, Olivia Colman", runtime: "6 Seasons", description: "The life and reign of Queen Elizabeth II and the political rivalries and romance of her era.", icon: "👑", poster: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcZ8wsEuB1z96AEBK2hvlxHDwKMCEGbE4i0wzXlPo0PYxqQnpyJZzO3VUVE_nXEoe6AW2spo-3ylQ2DkbOfuig_7ND2Szl75xlLW.jpg?r=844", type: "Series", language: "English"},
            {id: 47, title: "Sacred Games", genre: "Crime, Thriller", year: 2018, rating: 8.6, director: "Anurag Kashyap", cast: "Saif Ali Khan, Nawazuddin Siddiqui", runtime: "2 Seasons", description: "A troubled police officer discovers a criminal's prophetic call and embarks on a dangerous mission.", icon: "🎯", poster: "https://resizing.flixster.com/j3Pk-1QBwBZ7_pn6rGObBhi4eoY=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjMxNTc1OC53ZWJw", type: "Series", language: "Hindi"},
            {id: 48, title: "Mirzapur", genre: "Action, Crime", year: 2018, rating: 8.4, director: "Karan Anshuman", cast: "Pankaj Tripathi, Ali Fazal", runtime: "3 Seasons", description: "Two brothers are drawn into the lawless world of the mafia that rules eastern India.", icon: "🔫", poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16201106_b_v8_aa.jpg", type: "Series", language: "Hindi"},
            {id: 49, title: "The Family Man", genre: "Action, Drama", year: 2019, rating: 8.7, director: "Raj & DK", cast: "Manoj Bajpayee, Samantha Ruth Prabhu", runtime: "2 Seasons", description: "A middle-class man secretly works for a national intelligence agency while managing his family life.", icon: "🕴️", poster: "https://resizing.flixster.com/ikoYIY6lKYyOO4wV6JKXn-zGbQE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17362077_b_v8_aa.jpg", type: "Series", language: "Hindi"},
            {id: 50, title: "Wednesday", genre: "Comedy, Horror", year: 2022, rating: 8.1, director: "Tim Burton", cast: "Jenna Ortega, Gwendoline Christie", runtime: "1 Season", description: "Wednesday Addams attempts to master her psychic abilities at Nevermore Academy.", icon: "🕸️", poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg", type: "Series", language: "English"},

            // Animations
            {id: 51, title: "Spirited Away", genre: "Animation, Fantasy", year: 2001, rating: 8.6, director: "Hayao Miyazaki", cast: "Daveigh Chase, Suzanne Pleshette", runtime: "125 min", description: "A young girl enters a magical world ruled by a witch and must work to free her parents.", icon: "🏮", poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg", type: "Animation", language: "English"},
            {id: 52, title: "Your Name", genre: "Animation, Romance", year: 2016, rating: 8.4, director: "Makoto Shinkai", cast: "Ryunosuke Kamiki, Mone Kamishiraishi", runtime: "106 min", description: "Two teenagers share a mysterious connection that transcends time and space.", icon: "☄️", poster: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg", type: "Animation", language: "English"},
            {id: 53, title: "Spider-Man: Into the Spider-Verse", genre: "Animation, Action", year: 2018, rating: 8.4, director: "Bob Persichetti", cast: "Shameik Moore, Jake Johnson", runtime: "117 min", description: "Teen Miles Morales becomes Spider-Man and meets other Spider-People from parallel dimensions.", icon: "🕷️", poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg", type: "Animation", language: "English"},
            {id: 54, title: "Coco", genre: "Animation, Family", year: 2017, rating: 8.4, director: "Lee Unkrich", cast: "Anthony Gonzalez, Gael García Bernal", runtime: "105 min", description: "A young boy journeys to the Land of the Dead to unlock his family's musical history.", icon: "🎸", poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg", type: "Animation", language: "English"},

            // New Series & Anime
            {id: 55, title: "Panchayat", genre: "Comedy, Drama", year: 2020, rating: 8.9, director: "Deepak Kumar Mishra", cast: "Jitendra Kumar, Neena Gupta", runtime: "2 Seasons", description: "An engineering graduate joins as secretary in a remote village panchayat.", icon: "🏡", poster: "https://i.pinimg.com/474x/fb/fb/a4/fbfba4e5c6bb004f2852e96bc89994b0.jpg", type: "Series", language: "Hindi", streaming: "Prime Video"},
            {id: 56, title: "Made in Heaven", genre: "Drama", year: 2019, rating: 8.2, director: "Zoya Akhtar", cast: "Sobhita Dhulipala, Arjun Mathur", runtime: "2 Seasons", description: "Two wedding planners navigate Delhi high society and its secrets.", icon: "💍", poster: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16599826_b_v8_aa.jpg", type: "Series", language: "Hindi", streaming: "Prime Video"},
            {id: 57, title: "Scam 1992", genre: "Biography, Drama", year: 2020, rating: 9.3, director: "Hansal Mehta", cast: "Pratik Gandhi, Shreya Dhanwanthary", runtime: "1 Season", description: "Rise and fall of stockbroker Harshad Mehta.", icon: "📈", poster: "https://upload.wikimedia.org/wikipedia/en/c/c8/Scam_1992_poster.png", type: "Series", language: "Hindi", streaming: "Sony LIV"},
            {id: 58, title: "Dark", genre: "Sci-Fi, Thriller", year: 2017, rating: 8.8, director: "Baran bo Odar", cast: "Louis Hofmann, Lisa Vicari", runtime: "3 Seasons", description: "A time-twisting mystery across four families in a German town.", icon: "⏳", poster: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg", type: "Series", language: "English", streaming: "Netflix"},
            {id: 59, title: "The Boys", genre: "Action, Comedy", year: 2019, rating: 8.7, director: "Eric Kripke", cast: "Karl Urban, Jack Quaid", runtime: "4 Seasons", description: "A vigilante crew battles corrupt superheroes.", icon: "🦸", poster: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg", type: "Series", language: "English", streaming: "Prime Video"},
            {id: 60, title: "The Last of Us", genre: "Drama, Adventure", year: 2023, rating: 8.8, director: "Craig Mazin", cast: "Pedro Pascal, Bella Ramsey", runtime: "1 Season", description: "A smuggler escorts a teen with a secret through a post-apocalyptic US.", icon: "🍄", poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg", type: "Series", language: "English", streaming: "HBO / JioCinema"},
            {id: 61, title: "Succession", genre: "Drama", year: 2018, rating: 8.8, director: "Jesse Armstrong", cast: "Brian Cox, Jeremy Strong", runtime: "4 Seasons", description: "A media dynasty family battles for power and legacy.", icon: "📺", poster: "https://i.pinimg.com/736x/51/a2/91/51a2915f44cfd57680cd8053ed2b288b.jpg", type: "Series", language: "English", streaming: "HBO / JioCinema"},
            {id: 62, title: "Attack on Titan", genre: "Anime, Action", year: 2013, rating: 9.1, director: "Tetsurō Araki", cast: "Yuki Kaji, Marina Inoue", runtime: "4 Seasons", description: "Humans fight for survival behind walls against man-eating titans.", icon: "🛡️", poster: "https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg", type: "Anime", language: "Japanese", streaming: "Crunchyroll / Netflix"},
            {id: 63, title: "Demon Slayer", genre: "Anime, Adventure", year: 2019, rating: 8.6, director: "Haruo Sotozaki", cast: "Natsuki Hanae, Akari Kitō", runtime: "3 Seasons", description: "A boy joins the Demon Slayer Corps to save his sister.", icon: "⚔️", poster: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg", type: "Anime", language: "Japanese", streaming: "Crunchyroll / Netflix"},
            {id: 64, title: "Jujutsu Kaisen", genre: "Anime, Action", year: 2020, rating: 8.6, director: "Sunghoo Park", cast: "Junya Enoki, Yuma Uchida", runtime: "2 Seasons", description: "A student swallows a cursed talisman and joins sorcerers to fight curses.", icon: "💠", poster: "https://m.media-amazon.com/images/I/71esFqJZhSL._AC_UF894,1000_QL80_.jpg", type: "Anime", language: "Japanese", streaming: "Crunchyroll / Netflix"},

            // Iranian Movies & Series
            {id: 65, title: "A Separation", genre: "Drama", year: 2011, rating: 8.3, director: "Asghar Farhadi", cast: "Leila Hatami, Peyman Moaadi", runtime: "123 min", description: "A couple's separation spirals into a web of family and societal tension.", icon: "🎭", poster: "https://image.tmdb.org/t/p/original/xQadpnoLokxzN3hRpCPbBGpxsiz.jpg", type: "Movie", language: "Iranian", streaming: "Netflix / Mubi"},
            {id: 66, title: "About Elly", genre: "Mystery, Drama", year: 2009, rating: 7.9, director: "Asghar Farhadi", cast: "Golshifteh Farahani, Taraneh Alidoosti", runtime: "119 min", description: "A seaside trip unravels when a guest disappears.", icon: "🌊", poster: "https://upload.wikimedia.org/wikipedia/en/a/aa/About_elly_xlg.jpg", type: "Movie", language: "Iranian", streaming: "Mubi"},
            {id: 67, title: "The Salesman", genre: "Drama, Thriller", year: 2016, rating: 7.8, director: "Asghar Farhadi", cast: "Shahab Hosseini, Taraneh Alidoosti", runtime: "125 min", description: "A couple's relationship is tested when the wife is assaulted in their new home.", icon: "🎪", poster: "https://upload.wikimedia.org/wikipedia/id/8/8c/The_Salesman.png", type: "Movie", language: "Iranian", streaming: "Mubi / Prime Video"},
            {id: 68, title: "The Past", genre: "Drama", year: 2013, rating: 7.6, director: "Asghar Farhadi", cast: "Bérénice Bejo, Ali Mosaffa", runtime: "130 min", description: "An Iranian man returns to Paris to finalize his divorce.", icon: "📜", poster: "https://a.ltrbxd.com/resized/film-poster/1/1/4/7/4/5/114745-the-past-0-230-0-345-crop.jpg?v=dca7370ee3", type: "Movie", language: "Iranian", streaming: "Mubi"},
            {id: 69, title: "Children of Heaven", genre: "Drama, Family", year: 1997, rating: 8.2, director: "Majid Majidi", cast: "Mohammad Amir Naji, Amir Farrokh Hashemian", runtime: "89 min", description: "A boy loses his sister's shoes and tries to find them.", icon: "👟", poster: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1629605182i/58826399.jpg", type: "Movie", language: "Iranian", streaming: "Netflix"},

            // Japanese Movies & Series
            {id: 70, title: "Shoplifters", genre: "Drama", year: 2018, rating: 8.0, director: "Hirokazu Kore-eda", cast: "Lily Franky, Sakura Ando", runtime: "121 min", description: "A family of small-time thieves takes in a young girl.", icon: "🛍️", poster: "https://upload.wikimedia.org/wikipedia/en/c/c9/Shoplifters_%28film%29.jpg", type: "Movie", language: "Japanese", streaming: "Prime Video / Mubi"},
            {id: 71, title: "Drive My Car", genre: "Drama", year: 2021, rating: 7.9, director: "Ryusuke Hamaguchi", cast: "Hidetoshi Nishijima, Tōko Miura", runtime: "179 min", description: "An actor-director confronts grief while staging Uncle Vanya.", icon: "🚗", poster: "https://upload.wikimedia.org/wikipedia/en/3/3d/Drive_My_Car_movie_poster.jpeg", type: "Movie", language: "Japanese", streaming: "HBO / Mubi"},
            {id: 72, title: "Tokyo Story", genre: "Drama", year: 1953, rating: 8.2, director: "Yasujirō Ozu", cast: "Chishū Ryū, Chieko Higashiyama", runtime: "136 min", description: "An elderly couple visit their children in Tokyo.", icon: "🏙️", poster: "https://m.media-amazon.com/images/I/618EcIp3bsL._AC_UF894,1000_QL80_.jpg", type: "Movie", language: "Japanese", streaming: "Criterion Channel"},
            {id: 73, title: "Rashomon", genre: "Crime, Drama", year: 1950, rating: 8.2, director: "Akira Kurosawa", cast: "Toshirō Mifune, Machiko Kyō", runtime: "88 min", description: "A crime is told from multiple perspectives.", icon: "⚔️", poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Rashomon_%28US_poster%29.jpg/250px-Rashomon_%28US_poster%29.jpg", type: "Movie", language: "Japanese", streaming: "Criterion Channel / HBO"},
            {id: 74, title: "Midnight Diner: Tokyo Stories", genre: "Drama, Slice of Life", year: 2016, rating: 8.4, director: "Joji Matsuoka", cast: "Kaoru Kobayashi, Mansaku Fuwa", runtime: "2 Seasons", description: "A late-night diner becomes the heart of Tokyo's stories.", icon: "🍜", poster: "https://upload.wikimedia.org/wikipedia/en/8/8e/Midnight_Diner_%28Japanese_TV_series%29.jpg", type: "Series", language: "Japanese", streaming: "Netflix"},
            {id: 75, title: "Terrace House", genre: "Reality, Drama", year: 2012, rating: 7.8, director: "Various", cast: "You, Tokui, Yamachan", runtime: "6 Seasons", description: "Six strangers live together in a beautiful house.", icon: "🏠", poster: "https://images.justwatch.com/poster/302260084/s718/terrace-house-opening-new-doors.jpg", type: "Series", language: "Japanese", streaming: "Netflix"},

            // Korean Movies & Series
            {id: 76, title: "Parasite", genre: "Thriller, Drama", year: 2019, rating: 8.5, director: "Bong Joon Ho", cast: "Song Kang-ho, Choi Woo-shik", runtime: "132 min", description: "A poor family schemes to work for a wealthy household.", icon: "🏠", poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg", type: "Movie", language: "Korean", streaming: "Prime Video / Hulu"},
            {id: 77, title: "Oldboy", genre: "Thriller, Mystery", year: 2003, rating: 8.4, director: "Park Chan-wook", cast: "Choi Min-sik, Yoo Ji-tae", runtime: "120 min", description: "A man seeks vengeance after 15 years of imprisonment.", icon: "🔒", poster: "https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg", type: "Movie", language: "Korean", streaming: "Prime Video"},
            {id: 78, title: "Train to Busan", genre: "Action, Horror", year: 2016, rating: 7.6, director: "Yeon Sang-ho", cast: "Gong Yoo, Ma Dong-seok", runtime: "118 min", description: "Passengers fight for survival during a zombie outbreak.", icon: "🚆", poster: "https://picfiles.alphacoders.com/402/thumb-402196.jpg", type: "Movie", language: "Korean", streaming: "Netflix"},
            {id: 79, title: "The Handmaiden", genre: "Thriller, Romance", year: 2016, rating: 8.1, director: "Park Chan-wook", cast: "Kim Min-hee, Kim Tae-ri", runtime: "145 min", description: "A con man hires a pickpocket to help him seduce a wealthy heiress.", icon: "🎭", poster: "https://images.plex.tv/photo?size=large-1280&url=https%3A%2F%2Fmetadata-static.plex.tv%2F3%2Fgracenote%2F3bbc7e8a6e53e01e4bcc2701525a2720.jpg", type: "Movie", language: "Korean", streaming: "Prime Video"},
            {id: 80, title: "Memories of Murder", genre: "Crime, Thriller", year: 2003, rating: 8.1, director: "Bong Joon Ho", cast: "Song Kang-ho, Kim Sang-kyung", runtime: "132 min", description: "Two detectives investigate a series of murders in a small town.", icon: "🔍", poster: "https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/eb/5e2f22dea3ad37237a8a58bed0a75ab1_300x442.jpg?t=1646980004", type: "Movie", language: "Korean", streaming: "Hulu / Prime Video"},
            {id: 81, title: "Crash Landing on You", genre: "Romance, Drama", year: 2019, rating: 8.7, director: "Lee Jeong-hyo", cast: "Hyun Bin, Son Ye-jin", runtime: "1 Season", description: "A South Korean heiress crash-lands in North Korea and meets a soldier.", icon: "🪂", poster: "https://images.justwatch.com/poster/176932032/s718/crash-landing-on-you.jpg", type: "Series", language: "Korean", streaming: "Netflix"},
            {id: 82, title: "Squid Game", genre: "Thriller, Drama", year: 2021, rating: 8.0, director: "Hwang Dong-hyuk", cast: "Lee Jung-jae, Park Hae-soo", runtime: "1 Season", description: "Contestants compete in deadly children's games for a cash prize.", icon: "🦑", poster: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", type: "Series", language: "Korean", streaming: "Netflix"},
            {id: 83, title: "Parasite: The Grey", genre: "Thriller, Drama", year: 2024, rating: 7.8, director: "Yeon Sang-ho", cast: "Jeon So-nee, Koo Kyo-hwan", runtime: "1 Season", description: "A new parasite outbreak threatens humanity.", icon: "🦠", poster: "https://resizing.flixster.com/2L8CfhlbG2VLHQuUj-I_LLAJAGY=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNjdhOWNhNTctNDliMS00ZTIxLWJmNDMtMmZjMDdiOGNjYTVlLmpwZw==", type: "Series", language: "Korean", streaming: "Netflix"},
            {id: 84, title: "My Mister", genre: "Drama", year: 2018, rating: 9.1, director: "Kim Won-seok", cast: "Lee Sun-kyun, IU", runtime: "1 Season", description: "A middle-aged man and a young woman form an unlikely friendship.", icon: "💙", poster: "https://images.justwatch.com/poster/257196210/s718/my-mister.jpg", type: "Series", language: "Korean", streaming: "Netflix"}
        ];

        const THEME_KEY = 'cinematch-theme';
        let watchlist = [];
        let userRatings = {};
        let currentMovie = null;
        let currentFilter = 'all';
        let currentYearFilter = 'all';
        let currentGenreFilter = 'all';
        let favoritesEditMode = false;
        let favoriteIds = [];
        const FALLBACK_POSTER = 'https://image.tmdb.org/t/p/w500/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg';
        
// Called from nav when clicking Profile
function showPage(pageName) {
  document.querySelectorAll(".page").forEach((page) =>
    page.classList.remove("active")
  );
  document.querySelectorAll(".nav-btn").forEach((btn) =>
    btn.classList.remove("active")
  );

  const page = document.getElementById(pageName);
  if (page) page.classList.add("active");
  if (event && event.target) event.target.classList.add("active");

  if (pageName === "watchlist") {
    renderWatchlist();
    renderWatchlistPreview();
  }
  if (pageName === 'profile') {
    if (currentUser) {
      renderProfile();
    }
  }

    document.getElementById(pageId).style.display = 'block';
}

const REVIEWS_KEY = "cineSphere-reviews";
const FAVORITES_KEY = "cineSphere-favorites";
const WATCHLIST_KEY = "cineSphere-watchlist";

// reviewsByMovieId: { [movieId]: [ { title, text, score, createdAt } ] }
let reviewsByMovieId = loadReviews();

function saveReviews() {
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviewsByMovieId));
}

function loadReviews() {
  try {
    const raw = localStorage.getItem(REVIEWS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveFavorites() {
  if (currentUser) {
    currentUser.favorites = favoriteIds;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    // Update in users array
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const uIndex = users.findIndex(u => u.email === currentUser.email);
    if (uIndex !== -1) {
      users[uIndex].favorites = favoriteIds;
      localStorage.setItem('users', JSON.stringify(users));
    }
  } else {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds));
  }
}

function loadFavorites() {
  if (currentUser && currentUser.favorites) {
    return currentUser.favorites;
  }
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveWatchlist() {
  if (currentUser) {
    currentUser.watchlist = watchlist;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    // Update in users array
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const uIndex = users.findIndex(u => u.email === currentUser.email);
    if (uIndex !== -1) {
      users[uIndex].watchlist = watchlist;
      localStorage.setItem('users', JSON.stringify(users));
    }
  } else {
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
  }
}

function loadWatchlist() {
  if (currentUser && currentUser.watchlist) {
    return currentUser.watchlist;
  }
  try {
    const raw = localStorage.getItem(WATCHLIST_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

// ----- Favorites -----

function renderFavorites() {
  const favMovies = favoriteIds
    .map((id) => movies.find((m) => m.id === id))
    .filter(Boolean);
  renderMovies("favoritesGrid", favMovies);
}

function renderFavoritesEditable() {
  const grid = document.getElementById("favoritesGrid");
  if (!grid) return;

  const favMovies = favoriteIds
    .map((id) => movies.find((m) => m.id === id))
    .filter(Boolean);

  if (!favoritesEditMode) {
    renderMovies("favoritesGrid", favMovies);
    return;
  }

  grid.innerHTML = favMovies
    .map(
      (movie) => `
      <div class="movie-card">
        <div class="movie-poster">
          <img
            class="poster-img"
            src="${getPosterSrc(movie)}"
            alt="${movie.title} poster"
            onerror="handlePosterError(event, '${movie.icon || ""}')"
          />
        </div>
        <div class="movie-info">
          <div class="movie-title">${movie.title}</div>
          <div class="movie-meta">${movie.year} • ${movie.genre.split(",")[0]}</div>
          <button class="chip-btn" style="margin-top: 8px"
                  onclick="removeFavorite(${movie.id})">
            Remove
          </button>
        </div>
      </div>
    `
    )
    .join("");
}

function toggleFavoritesEdit() {
  favoritesEditMode = !favoritesEditMode;
  renderFavoritesEditable();
}

function removeFavorite(id) {
  const idx = favoriteIds.indexOf(id);
  if (idx >= 0) {
    favoriteIds.splice(idx, 1);
    renderFavoritesEdittable();
    saveFavorites();
    renderProfile();
  }
}

function addFavoritePrompt() {
  const title = prompt("Add favorite by title (exact or partial match):");
  if (!title) return;

  const match = movies.find((m) =>
    m.title.toLowerCase().includes(title.toLowerCase())
  );

  if (match) {
    if (!favoriteIds.includes(match.id)) {
      favoriteIds.push(match.id);
      saveFavorites();
      renderProfile();
      alert(`${match.title} added to favorites.`);
    } else {
      alert("Already in favorites.");
    }
  } else {
    alert("No match found.");
  }
}

// Add to favorites (global)
function addToFavorites() {
  if (currentMovie && !favoriteIds.includes(currentMovie.id)) {
    favoriteIds.push(currentMovie.id);
    saveFavorites();
    renderProfile();
    alert(`${currentMovie.title} added to favorites!`);
  } else {
    alert('Already in favorites!');
  }
}

// Remove from favorites (global)
function removeFromFavorites() {
  if (currentMovie) {
    const idx = favoriteIds.indexOf(currentMovie.id);
    if (idx >= 0) {
      favoriteIds.splice(idx, 1);
      saveFavorites();
      document.getElementById('countFavs').innerText = favoriteIds.length;
      alert(`${currentMovie.title} removed from favorites!`);
      renderFavoritesEditable();
    }
  }
}

// ----- Watchlist preview -----

function renderWatchlistPreview() {
  const grid = document.getElementById("watchlistPreview");
  if (!grid) return;

  if (watchlist.length === 0) {
    grid.innerHTML =
      '<p style="grid-column: 1 / -1; text-align: center; opacity: 0.7;">No items yet. Add to watchlist to see them here.</p>';
  } else {
    renderMovies("watchlistPreview", watchlist.slice(0, 6));
  }
}

// ----- Reviews -----

function renderReviews() {
  const list = document.getElementById("reviewsList");
  if (!list) return;

  const allReviews = Object.values(reviewsByMovieId).flat();
  list.innerHTML = allReviews
    .map(
      (r) => `
      <li class="review-item">
        <strong>${r.title}</strong>
        <span>${r.score}/10</span>
        <p style="margin-top: 4px; color: var(--muted);">${r.text}</p>
      </li>
    `
    )
    .join("");
}

// ----- Profile entry point -----


        function setTheme(theme) {
            document.body.setAttribute('data-theme', theme);
            localStorage.setItem(THEME_KEY, theme);
            const toggle = document.getElementById('themeToggle');
            if (toggle) {
                const label = toggle.querySelector('.toggle-label');
                const icon = toggle.querySelector('.toggle-icon');
                const isLight = theme === 'light';
                label.textContent = isLight ? 'Dark' : 'Light';
                icon.textContent = isLight ? '🌙' : '☀️';
            }
        }

        function toggleTheme() {
            const current = document.body.getAttribute('data-theme') || 'dark';
            const next = current === 'dark' ? 'light' : 'dark';
            setTheme(next);
        }

        function hydrateTheme() {
            const saved = localStorage.getItem(THEME_KEY) || 'dark';
            setTheme(saved);
        }

        function getStreamingLabel(movie) {
            if (!movie) return 'Check your region';
            if (movie.streaming) return movie.streaming;
            if (movie.type === 'Anime' || movie.type === 'Animation') return 'Crunchyroll / Netflix / Disney+';
            if (movie.type === 'Series') return 'Netflix / Prime Video / Disney+';
            if (movie.language === 'Hindi') return 'Netflix / Prime Video / Hotstar';
            if (movie.language === 'South Indian') return 'Hotstar / Prime Video';
            return 'Netflix / Prime Video / HBO';
        }

        function getPosterSrc(movie) {
            return (movie && movie.poster) ? movie.poster : FALLBACK_POSTER;
        }

        function handlePosterError(event, fallbackIcon = '🎬') {
            if (!event || !event.target || !event.target.parentElement) return;
            const wrapper = event.target.parentElement;
            event.target.remove();
            const fallback = document.createElement('div');
            fallback.className = 'poster-fallback';
            fallback.textContent = fallbackIcon || '🎬';
            wrapper.appendChild(fallback);
        }

        // Initialize the app
        function init() {
            // Load user data
            if (currentUser) {
                watchlist = currentUser.watchlist || [];
                favoriteIds = currentUser.favorites || [];
            } else {
                watchlist = loadWatchlist();
                favoriteIds = loadFavorites();
            }
            renderMovies('trendingGrid', movies.slice(0, 6));
            renderMovies('popularGrid', movies.slice(6, 12));
            renderMovies('recentGrid', getRecentReleases());
            populateYearFilter();
            populateGenreFilter();
            applyTrendingFilters();
            renderRegionalSpotlights();
            generateRecommendations();
            renderProfile();
        }

        // Render movies to a grid
        function renderMovies(gridId, movieList, showStreaming = false) {
            const grid = document.getElementById(gridId);
            if (!grid) return;
            grid.innerHTML = movieList.map(movie => `
                <div class="movie-card" onclick="openModal(${movie.id})">
                    <div class="movie-poster">
                        <img class="poster-img" src="${getPosterSrc(movie)}" alt="${movie.title} poster" onerror="handlePosterError(event, '${movie.icon || '🎬'}')" />
                    </div>
                    <div class="movie-info">
                        <div class="movie-title">${movie.title}</div>
                        <div class="movie-meta">${movie.year} • ${movie.genre.split(',')[0]}</div>
                        ${showStreaming ? `<div class="streaming-meta">📺 ${getStreamingLabel(movie)}</div>` : ''}
                        <div class="rating">
                            <span class="stars">⭐</span>
                            <span>${movie.rating}</span>
                        </div>
                        <span class="content-badge">${movie.type} • ${movie.language}</span>
                    </div>
                </div>
            `).join('');
        }

        // Create a single movie card element
        function createMovieCard(movie) {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.onclick = () => openModal(movie.id);
            card.innerHTML = `
                <div class="movie-poster">
                    <img class="poster-img" src="${getPosterSrc(movie)}" alt="${movie.title} poster" onerror="handlePosterError(event, '${movie.icon || '🎬'}')" />
                </div>
                <div class="movie-info">
                    <div class="movie-title">${movie.title}</div>
                    <div class="movie-meta">${movie.year} • ${movie.genre.split(',')[0]}</div>
                    <div class="rating">
                        <span class="stars">⭐</span>
                        <span>${movie.rating}</span>
                    </div>
                    <span class="content-badge">${movie.type} • ${movie.language}</span>
                </div>
            `;
            return card;
        }

        // Show different pages
       
        // Open movie detail modal
        function openModal(movieId) {
            currentMovie = movies.find(m => m.id === movieId);
            if (!currentMovie) return;

            document.getElementById('modalTitle').textContent = currentMovie.title;
            document.getElementById('modalGenre').textContent = currentMovie.genre;
            document.getElementById('modalYear').textContent = currentMovie.year;
            document.getElementById('modalDirector').textContent = currentMovie.director;
            document.getElementById('modalCast').textContent = currentMovie.cast;
            document.getElementById('modalRuntime').textContent = currentMovie.runtime;
            document.getElementById('modalStreaming').textContent = getStreamingLabel(currentMovie);
            document.getElementById('modalRating').textContent = currentMovie.rating;
            document.getElementById('modalDescription').textContent = currentMovie.description;
            const modalPoster = document.getElementById('modalPoster');
            modalPoster.innerHTML = `
                <img class="poster-img" src="${getPosterSrc(currentMovie)}" alt="${currentMovie.title} poster" />
            `;
            const posterImg = modalPoster.querySelector('img');
            if (posterImg) {
                posterImg.onerror = (e) => handlePosterError(e, currentMovie.icon);
            }

            // Show user rating if exists
            if (userRatings[movieId]) {
                updateStarDisplay(userRatings[movieId]);
            } else {
                updateStarDisplay(0);
            }

            // Render similar movies
            const similar = movies.filter(m => 
                m.id !== movieId && 
                (m.genre.includes(currentMovie.genre.split(',')[0]) || m.director === currentMovie.director)
            ).slice(0, 4);
            renderMovies('similarGrid', similar);

            document.getElementById('movieModal').style.display = 'block';
        }

        // Close modal
        function closeModal() {
            document.getElementById('movieModal').style.display = 'none';
        }

        // Add to watchlist
        function addToWatchlist() {
            if (currentMovie && !watchlist.find(m => m.id === currentMovie.id)) {
                watchlist.push(currentMovie);
                saveWatchlist();
                renderProfile();
                alert(`${currentMovie.title} added to watchlist!`);
            } else {
                alert('Already in watchlist!');
            }
        }

        // Remove from watchlist
        function removeFromWatchlist() {
            if (currentMovie) {
                watchlist = watchlist.filter(m => m.id !== currentMovie.id);
                saveWatchlist();
                renderProfile();
                alert(`${currentMovie.title} removed from watchlist!`);
                renderWatchlist();
                renderWatchlistPreview();
            }
        }

        // Render watchlist
        function renderWatchlist() {
            const grid = document.getElementById('watchlistGrid');
            if (watchlist.length === 0) {
                grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; opacity: 0.7;">Your watchlist is empty. Start adding movies!</p>';
            } else {
                renderMovies('watchlistGrid', watchlist);
            }
        }

        // Rate movie
        function rateMovie(stars) {
            if (currentMovie) {
                userRatings[currentMovie.id] = stars;
                updateStarDisplay(stars);
                alert(`You rated ${currentMovie.title} ${stars} stars!`);
                generateRecommendations();
            }
        }
function submitReview() {
  if (!currentMovie) {
    alert("Open a movie first to review it.");
    return;
  }

  const textarea = document.getElementById("reviewText");
  if (!textarea) return;

  const text = textarea.value.trim();
  if (!text) {
    alert("Please write something for your review.");
    return;
  }

  // Optional: use the last star rating as a score; fall back to null
  let score = null;
  if (userRatings && userRatings[currentMovie.id]) {
    score = userRatings[currentMovie.id];
  }

  const entry = {
    title: currentMovie.title,
    text,
    score,
    createdAt: Date.now(),
    userId: currentUser.id
  };

  if (!reviewsByMovieId[currentMovie.id]) {
    reviewsByMovieId[currentMovie.id] = [];
  }
  reviewsByMovieId[currentMovie.id].unshift(entry); // newest first
  saveReviews();

  textarea.value = "";
  alert("Review added!");

  // Update profile reviews if profile is open
  renderReviews();
  renderProfile();
}

        // Update star display
        function updateStarDisplay(rating) {
            const stars = document.querySelectorAll('#starRating span');
            stars.forEach((star, index) => {
                if (index < rating) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
        }

        // Generate personalized recommendations
        function generateRecommendations() {
            const ratedMovies = Object.keys(userRatings).map(id => movies.find(m => m.id == id));
            
            if (ratedMovies.length === 0) {
                renderMovies('recommendedGrid', movies.slice(0, 6));
                renderMovies('becauseYouWatchedGrid', movies.slice(6, 10));
                return;
            }

            // Simple recommendation: find movies with similar genres
            const favoriteGenres = ratedMovies
                .filter(m => userRatings[m.id] >= 4)
                .flatMap(m => m.genre.split(',').map(g => g.trim()));

            const recommended = movies
                .filter(m => !userRatings[m.id])
                .filter(m => favoriteGenres.some(g => m.genre.includes(g)))
                .slice(0, 6);

            renderMovies('recommendedGrid', recommended.length ? recommended : movies.slice(0, 6));

            if (ratedMovies.length > 0) {
                const lastWatched = ratedMovies[ratedMovies.length - 1];
                const similar = movies
                    .filter(m => m.id !== lastWatched.id && m.genre.includes(lastWatched.genre.split(',')[0]))
                    .slice(0, 4);
                renderMovies('becauseYouWatchedGrid', similar);
            }
        }

        // Search movies
        function searchMovies() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            if (!query) return;

            const results = movies.filter(m => 
                m.title.toLowerCase().includes(query) ||
                m.genre.toLowerCase().includes(query) ||
                m.cast.toLowerCase().includes(query) ||
                m.director.toLowerCase().includes(query)
            );

            if (results.length > 0) {
                renderMovies('trendingGrid', results);
                document.getElementById('home').classList.add('active');
                document.querySelectorAll('.page').forEach(p => {
                    if (p.id !== 'home') p.classList.remove('active');
                });
            } else {
                alert('No movies found!');
            }
        }

        // Enter key for search
        document.getElementById('searchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') searchMovies();
        });

        // Filter content by type or language
        function filterContent(filter) {
            currentFilter = filter;
            
            // Update active tab
            document.querySelectorAll('.filter-tab').forEach(tab => tab.classList.remove('active'));
            if (event && event.target) {
                event.target.classList.add('active');
            }
            applyTrendingFilters();
        }

        function filterByYear(e) {
            currentYearFilter = e.target.value;
            applyTrendingFilters();
        }

        function filterByGenre(e) {
            currentGenreFilter = e.target.value;
            applyTrendingFilters();
        }

        function applyTrendingFilters() {
            let filtered = movies;
            if (currentFilter !== 'all') {
                filtered = filtered.filter(m => m.type === currentFilter || m.language === currentFilter);
            }
            if (currentYearFilter !== 'all') {
                const yearNum = parseInt(currentYearFilter, 10);
                filtered = filtered.filter(m => m.year === yearNum);
            }
            if (currentGenreFilter !== 'all') {
                filtered = filtered.filter(m => m.genre.toLowerCase().includes(currentGenreFilter.toLowerCase()));
            }
            renderMovies('trendingPageGrid', filtered, true);
        }

        function populateYearFilter() {
            const select = document.getElementById('yearFilter');
            if (!select) return;
            const years = Array.from(new Set(movies.map(m => m.year))).sort((a, b) => b - a);
            select.innerHTML = '<option value="all">All Years</option>' + years.map(y => `<option value="${y}">${y}</option>`).join('');
        }

        function populateGenreFilter() {
            const select = document.getElementById('genreFilter');
            if (!select) return;
            const genres = new Set();
            movies.forEach(m => m.genre.split(',').map(g => g.trim()).forEach(g => genres.add(g)));
            const options = Array.from(genres).sort();
            select.innerHTML = '<option value="all">All Genres</option>' + options.map(g => `<option value="${g}">${g}</option>`).join('');
        }

        function getRecentReleases() {
            return movies.filter(m => m.year >= 2022).sort((a, b) => b.year - a).slice(0, 8);
        }

        function renderRegionalSpotlights() {
            const iranian = movies.filter(m => m.language === 'Iranian').slice(0, 6);
            const japanese = movies.filter(m => m.language === 'Japanese').slice(0, 6);
            const korean = movies.filter(m => m.language === 'Korean').slice(0, 6);
            renderMovies('iranianGrid', iranian, true);
            renderMovies('japaneseGrid', japanese, true);
            renderMovies('koreanGrid', korean, true);
        }

        function renderFavorites() {
            const favMovies = favoriteIds.map(id => movies.find(m => m.id === id)).filter(Boolean);
            renderMovies('favoritesGrid', favMovies);
        }

        function renderWatchlistPreview() {
            const grid = document.getElementById('watchlistPreview');
            if (!grid) return;
            if (watchlist.length === 0) {
                grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; opacity: 0.7;">No items yet. Add to watchlist to see them here.</p>';
            } else {
                renderMovies('watchlistPreview', watchlist.slice(0, 6));
            }
        }

        function renderReviews() {
  const list = document.getElementById("reviewsList");
  if (!list) return;

  // flatten all reviews into a single list
  const all = [];
  Object.keys(reviewsByMovieId).forEach((movieId) => {
    reviewsByMovieId[movieId].forEach((r) => all.push(r));
  });

  // newest first
  all.sort((a, b) => b.createdAt - a.createdAt);

  const latest = all.slice(0, 10); // show up to 10

  if (latest.length === 0) {
    list.innerHTML =
      '<li class="review-item" style="opacity: 0.7;">No reviews yet. Start by reviewing a movie!</li>';
    return;
  }

  list.innerHTML = latest
    .map((r) => {
      const scorePart = r.score != null ? `<span>${r.score}/5</span>` : "";
      return `
        <li class="review-item">
          <strong>${r.title}</strong>
          ${scorePart}
          <p style="margin-top: 4px; color: var(--muted);">${r.text}</p>
        </li>
      `;
    })
    .join("");
}

        function toggleFavoritesEdit() {
            favoritesEditMode = !favoritesEditMode;
            renderFavoritesEditable();
        }

        function renderFavoritesEditable() {
            const grid = document.getElementById('favoritesGrid');
            if (!grid) return;
            const favMovies = favoriteIds.map(id => movies.find(m => m.id === id)).filter(Boolean);
            if (!favoritesEditMode) {
                renderMovies('favoritesGrid', favMovies);
                return;
            }
            grid.innerHTML = favMovies.map(movie => `
                <div class="movie-card">
                    <div class="movie-poster">
                        <img class="poster-img" src="${getPosterSrc(movie)}" alt="${movie.title} poster" onerror="handlePosterError(event, '${movie.icon || '🎬'}')" />
                    </div>
                    <div class="movie-info">
                        <div class="movie-title">${movie.title}</div>
                        <div class="movie-meta">${movie.year} • ${movie.genre.split(',')[0]}</div>
                        <button class="chip-btn" style="margin-top:8px;" onclick="removeFavorite(${movie.id})">Remove</button>
                    </div>
                </div>
            `).join('');
        }

        function removeFavorite(id) {
            const idx = favoriteIds.indexOf(id);
            if (idx >= 0) {
                favoriteIds.splice(idx, 1);
                document.getElementById('countFavs').innerText = favoriteIds.length;
                renderFavoritesEditable();
            }
        }

        function addFavoritePrompt() {
            const title = prompt('Add favorite by title (exact or partial match):');
            if (!title) return;
            const match = movies.find(m => m.title.toLowerCase().includes(title.toLowerCase()));
            if (match) {
                if (!favoriteIds.includes(match.id)) {
                    favoriteIds.push(match.id);
                    saveFavorites();
                    renderProfile();
                    alert(`${match.title} added to favorites.`);
                } else {
                    alert('Already in favorites.');
                }
            } else {
                alert('No match found.');
            }
        }
       
        // Function to update profile info and statistics
function renderProfile() {
    if (!currentUser) return;

    // Update Header Information
    document.getElementById('profNameLarge').innerText = currentUser.name || "Movie Enthusiast";
    document.getElementById('profEmailLarge').innerText = currentUser.email;
    document.getElementById('profJoinYearLarge').innerText = currentUser.joinYear || "2025";

    // Update Bio
    document.getElementById('profileBio').innerText = currentUser.bio || "Welcome to my cinematic journey! I love discovering new films and sharing my thoughts about them.";

    // Update Avatar
    const name = currentUser.name || "U";
    document.getElementById('avatarLetterLarge').innerText = name.charAt(0).toUpperCase();

    // Update User Rating Badge
    updateUserRating();

    // Update Stats
    document.getElementById('countWatchlistLarge').innerText = watchlist.length;
    document.getElementById('countFavsLarge').innerText = favoriteIds.length;

    let totalReviews = 0;
    Object.keys(reviewsByMovieId).forEach(id => {
        reviewsByMovieId[id].forEach(review => {
            if (review.userId === currentUser.id) totalReviews++;
        });
    });
    document.getElementById('countReviewsLarge').innerText = totalReviews;

    // Calculate watched movies (rough estimate based on reviews)
    document.getElementById('countWatched').innerText = Math.max(totalReviews, watchlist.length);

    // Update Trends
    updateStatTrends();

    // Initialize tabs (ensure overview is active)
    if (!document.querySelector('.profile-tab.active')) {
        switchProfileTab('overview');
    }

    // Render Tab Content
    renderFavoritesLarge();
    renderWatchlistLarge();
    renderReviewsLarge();
    renderActivityTimeline();

    // Load Settings
    loadUserSettings();

    // Add click listeners to stat cards (remove existing to avoid duplicates)
    const watchlistCard = document.querySelector('.stat-watchlist');
    const reviewsCard = document.querySelector('.stat-reviews');
    const favoritesCard = document.querySelector('.stat-favorites');

    // Remove any existing listeners
    watchlistCard.replaceWith(watchlistCard.cloneNode(true));
    reviewsCard.replaceWith(reviewsCard.cloneNode(true));
    favoritesCard.replaceWith(favoritesCard.cloneNode(true));

    // Re-query after cloning
    document.querySelector('.stat-watchlist').addEventListener('click', () => switchProfileTab('watchlist'));
    document.querySelector('.stat-reviews').addEventListener('click', () => switchProfileTab('reviews'));
    document.querySelector('.stat-favorites').addEventListener('click', () => switchProfileTab('favorites'));
}

function updateProfileStats() {
    document.getElementById('countWatchlistLarge').innerText = watchlist.length;
    document.getElementById('countFavsLarge').innerText = favoriteIds.length;

    let totalReviews = 0;
    Object.keys(reviewsByMovieId).forEach(id => {
        reviewsByMovieId[id].forEach(review => {
            if (review.userId === currentUser.id) totalReviews++;
        });
    });
    document.getElementById('countReviewsLarge').innerText = totalReviews;

    // Calculate watched movies (rough estimate based on reviews)
    document.getElementById('countWatched').innerText = Math.max(totalReviews, watchlist.length);
}

// Function to allow user to edit their name
function editName() {
    const newName = prompt("Update your CineSphere display name:", currentUser.name || "");
    if (newName && newName.trim() !== "") {
        currentUser.name = newName;

        // Save to current session
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        // Update the permanent user database
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const uIndex = users.findIndex(u => u.email === currentUser.email);
        if (uIndex !== -1) {
            users[uIndex].name = newName;
            localStorage.setItem('users', JSON.stringify(users));
        }

        renderProfile(); // Refresh UI
    }
}

// Enhanced profile editing
function editProfile() {
    // Create a modal for editing profile
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'flex';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
            <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            <h2>Edit Profile</h2>
            <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 20px;">
                <div>
                    <label style="display: block; margin-bottom: 8px; font-weight: 600;">Display Name</label>
                    <input type="text" id="editNameInput" class="search-input" value="${currentUser.name || ''}" style="width: 100%;">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 8px; font-weight: 600;">Bio</label>
                    <textarea id="editBioInput" class="search-input" rows="4" style="width: 100%; resize: vertical;">${currentUser.bio || ''}</textarea>
                </div>
                <div style="display: flex; gap: 12px; justify-content: flex-end;">
                    <button class="btn btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                    <button class="btn btn-primary" onclick="saveProfileChanges()">Save Changes</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function saveProfileChanges() {
    const newName = document.getElementById('editNameInput').value.trim();
    const newBio = document.getElementById('editBioInput').value.trim();

    if (newName) {
        currentUser.name = newName;
    }

    currentUser.bio = newBio;

    // Save to localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    // Update permanent user database
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const uIndex = users.findIndex(u => u.email === currentUser.email);
    if (uIndex !== -1) {
        users[uIndex] = { ...users[uIndex], ...currentUser };
        localStorage.setItem('users', JSON.stringify(users));
    }

    // Close modal and refresh profile
    document.querySelector('.modal').remove();
    renderProfile();
}

// Tab switching functionality
function switchProfileTab(tabName) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.profile-tab-content');
    contents.forEach(content => content.classList.remove('active'));

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.profile-tab');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show selected tab content
    document.getElementById(`profile-${tabName}`).classList.add('active');

    // Add active class to selected tab
    event.target.classList.add('active');
}

// Update user rating badge based on activity
function updateUserRating() {
    let totalReviews = 0;
    Object.keys(reviewsByMovieId).forEach(id => {
        totalReviews += reviewsByMovieId[id].length;
    });

    let rating = "Beginner";
    if (totalReviews >= 50) rating = "Expert";
    else if (totalReviews >= 20) rating = "Advanced";
    else if (totalReviews >= 10) rating = "Intermediate";
    else if (totalReviews >= 5) rating = "Enthusiast";

    document.getElementById('userRating').innerText = rating;
}

// Update stat trends
function updateStatTrends() {
    // Simple trend indicators (in a real app, these would be calculated from historical data)
    document.getElementById('watchlistTrend').innerText = watchlist.length > 0 ? "+2 this week" : "Start building!";
    document.getElementById('reviewsTrend').innerText = "Keep it up!";
    document.getElementById('favoritesTrend').innerText = favoriteIds.length > 0 ? "Your top picks" : "Add some favorites!";
    document.getElementById('watchedTrend').innerText = "This year";
}

// Render functions for different tabs
function renderFavoritesLarge() {
    const container = document.getElementById('favoritesGridLarge');
    container.innerHTML = '';

    if (favoriteIds.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--muted); padding: 40px;">No favorite movies yet. Start adding some!</p>';
        return;
    }

    favoriteIds.forEach(movieId => {
        const movie = movies.find(m => m.id === movieId);
        if (movie) {
            const movieCard = createMovieCard(movie);
            if (favoritesEditMode) {
                const removeBtn = document.createElement('button');
                removeBtn.className = 'remove-fav-btn';
                removeBtn.innerHTML = '✕';
                removeBtn.onclick = (e) => {
                    e.stopPropagation();
                    removeFavorite(movieId);
                };
                movieCard.appendChild(removeBtn);
            }
            container.appendChild(movieCard);
        }
    });
}

function toggleFavoritesEdit() {
    favoritesEditMode = !favoritesEditMode;
    const btn = document.getElementById('editFavBtn');
    if (favoritesEditMode) {
        btn.textContent = 'Done';
        btn.classList.add('active');
    } else {
        btn.textContent = 'Manage';
        btn.classList.remove('active');
    }
    renderFavoritesLarge();
}

function removeFavorite(movieId) {
    favoriteIds = favoriteIds.filter(id => id !== movieId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds));
    renderFavoritesLarge();
    updateProfileStats();
}

function renderWatchlistLarge() {
    const container = document.getElementById('watchlistGridLarge');
    container.innerHTML = '';

    if (watchlist.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--muted); padding: 40px;">Your watchlist is empty. Add some movies to watch!</p>';
        return;
    }

    watchlist.forEach(movie => {
        const movieCard = createMovieCard(movie);
        container.appendChild(movieCard);
    });
}

function renderReviewsLarge() {
    const container = document.getElementById('reviewsListLarge');
    container.innerHTML = '';

    let allReviews = [];
    Object.keys(reviewsByMovieId).forEach(movieId => {
        const movie = movies.find(m => m.id === parseInt(movieId));
        if (movie) {
            reviewsByMovieId[movieId].forEach(review => {
                if (review.userId === currentUser.id) { // Filter by current user
                    allReviews.push({
                        movie: movie,
                        review: review,
                        movieId: movieId
                    });
                }
            });
        }
    });

    if (allReviews.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--muted); padding: 40px;">No reviews yet. Share your thoughts on movies you\'ve watched!</p>';
        return;
    }

    // Sort by most recent
    allReviews.sort((a, b) => new Date(b.review.createdAt) - new Date(a.review.createdAt));

    allReviews.forEach(item => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'review-item-large';
        reviewElement.innerHTML = `
            <div class="review-header">
                <div class="review-movie-info">
                    <h4>${item.movie.title}</h4>
                    <span class="review-rating">${item.review.score ? '★'.repeat(item.review.score) + '☆'.repeat(5-item.review.score) : 'No rating'}</span>
                </div>
                <span class="review-date">${new Date(item.review.createdAt).toLocaleDateString()}</span>
            </div>
            <p class="review-text">${item.review.text}</p>
        `;
        container.appendChild(reviewElement);
    });
}

function renderActivityTimeline(filterBy = 'all') {
    const container = document.getElementById('activityTimeline');
    container.innerHTML = '';

    let activities = [];

    // Add review activities
    Object.keys(reviewsByMovieId).forEach(movieId => {
        const movie = movies.find(m => m.id === parseInt(movieId));
        if (movie) {
            reviewsByMovieId[movieId].forEach(review => {
                if (review.userId === currentUser.id) { // Filter by current user
                    activities.push({
                        type: 'review',
                        movie: movie,
                        timestamp: review.createdAt,
                        description: `Reviewed "${movie.title}"`
                    });
                }
            });
        }
    });

    // Add watchlist activities (mock timestamps)
    watchlist.forEach(movie => {
        activities.push({
            type: 'watchlist',
            movie: movie,
            timestamp: Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000, // Random date within last 30 days
            description: `Added "${movie.title}" to watchlist`
        });
    });

    // Add favorite activities (mock timestamps)
    favoriteIds.forEach(movieId => {
        const movie = movies.find(m => m.id === movieId);
        if (movie) {
            activities.push({
                type: 'favorite',
                movie: movie,
                timestamp: Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000,
                description: `Added "${movie.title}" to favorites`
            });
        }
    });

    // Filter activities based on filterBy
    if (filterBy !== 'all') {
        activities = activities.filter(activity => activity.type === filterBy);
    }

    // Sort by timestamp (most recent first)
    activities.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    if (activities.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--muted); padding: 40px;">No activity yet. Start exploring movies!</p>';
        return;
    }

    activities.slice(0, 20).forEach(activity => {
        const activityElement = document.createElement('div');
        activityElement.className = 'activity-item';
        activityElement.innerHTML = `
            <div class="activity-timeline-node"></div>
            <div class="activity-content">
                <div class="activity-icon">${getActivityIcon(activity.type)}</div>
                <div class="activity-details">
                    <p class="activity-description">${activity.description}</p>
                    <span class="activity-time">${new Date(activity.timestamp).toLocaleDateString()}</span>
                </div>
            </div>
        `;
        container.appendChild(activityElement);
    });
}

function getActivityIcon(type) {
    switch (type) {
        case 'review': return '✍️';
        case 'watchlist': return '📋';
        case 'favorite': return '❤️';
        default: return '🎬';
    }
}

// Settings management
function loadUserSettings() {
    // Load name
    document.getElementById('settingName').value = currentUser.name || '';

    // Load bio
    document.getElementById('settingBio').value = currentUser.bio || '';

    // Load favorite genres
    if (currentUser.favoriteGenres) {
        currentUser.favoriteGenres.forEach(genre => {
            const tag = document.querySelector(`.genre-tag[onclick*="${genre}"]`);
            if (tag) {
                tag.classList.add('active');
            }
        });
    }

    // Load notification preferences
    document.getElementById('emailNotif').checked = currentUser.emailNotifications !== false;
    document.getElementById('weeklySummary').checked = currentUser.weeklySummary !== false;
}

function updateSetting(type) {
    switch (type) {
        case 'name':
            const newName = document.getElementById('settingName').value.trim();
            if (newName) {
                currentUser.name = newName;
                saveUserData();
                renderProfile();
                showNotification('Name updated successfully!');
            }
            break;
        case 'bio':
            const newBio = document.getElementById('settingBio').value.trim();
            currentUser.bio = newBio;
            saveUserData();
            renderProfile();
            showNotification('Bio updated successfully!');
            break;
    }
}

function toggleGenre(genre) {
    if (!currentUser.favoriteGenres) {
        currentUser.favoriteGenres = [];
    }

    const index = currentUser.favoriteGenres.indexOf(genre);
    const tag = event.target;

    if (index > -1) {
        currentUser.favoriteGenres.splice(index, 1);
        tag.classList.remove('active');
    } else {
        currentUser.favoriteGenres.push(genre);
        tag.classList.add('active');
    }

    saveUserData();
}

function saveUserData() {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    // Update permanent user database
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const uIndex = users.findIndex(u => u.email === currentUser.email);
    if (uIndex !== -1) {
        users[uIndex] = { ...users[uIndex], ...currentUser };
        localStorage.setItem('users', JSON.stringify(users));
    }
}

function showNotification(message) {
    // Simple notification (in a real app, you'd use a proper notification system)
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: var(--shadow);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.innerText = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Account actions
function confirmLogout() {
    if (confirm('Are you sure you want to logout?')) {
        logout();
    }
}

function deleteAccount() {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
        // Remove from users database
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users = users.filter(u => u.email !== currentUser.email);
        localStorage.setItem('users', JSON.stringify(users));

        // Clear current session
        localStorage.removeItem('currentUser');
        currentUser = null;

        // Clear user data
        localStorage.removeItem('watchlist');
        localStorage.removeItem('favorites');
        localStorage.removeItem('reviews');

        location.reload();
    }
}

// Sorting functions
function sortWatchlist() {
    const sortBy = document.getElementById('watchlistSort').value;
    // Implementation would depend on available movie data properties
    renderWatchlistLarge();
}

function sortReviews() {
    const sortBy = document.getElementById('reviewsSort').value;
    // Implementation would depend on review data structure
    renderReviewsLarge();
}

function filterActivity() {
    const filterBy = document.getElementById('activityFilter').value;
    renderActivityTimeline(filterBy);
}

        // --- Authentication State ---
let isLoginMode = true;
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Initialize Auth on Load
function checkAuthStatus() {
    const authModal = document.getElementById('authModal');
    const logoutBtn = document.getElementById('logoutBtn');

    if (!currentUser) {
        authModal.style.display = 'flex'; // Show popup if not logged in
        logoutBtn.style.display = 'none';
    } else {
        authModal.style.display = 'none'; // Hide if already logged in
        logoutBtn.style.display = 'block';
    }
}

function toggleAuthMode() {
    isLoginMode = !isLoginMode;
    document.getElementById('authTitle').innerText = isLoginMode ? "Login" : "Sign Up";
    document.getElementById('mainAuthBtn').innerText = isLoginMode ? "Login" : "Register";
    document.getElementById('toggleAuthBtn').innerText = isLoginMode ? "Need an account? Sign Up" : "Already have an account? Login";
    document.getElementById('authMessage').innerText = "";
}

function handleAuth() {
    const email = document.getElementById('authEmail').value;
    const password = document.getElementById('authPassword').value;
    const msg = document.getElementById('authMessage');

    if (!email || !password) {
        msg.innerText = "Please fill in all fields.";
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (isLoginMode) {
        // LOGIN LOGIC
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            if (!user.id) {
                user.id = Date.now();
                localStorage.setItem('users', JSON.stringify(users)); // Save updated users
            }
            if (!user.watchlist) user.watchlist = [];
            if (!user.favorites) user.favorites = [];
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUser = user;
            // Load user-specific data
            watchlist = currentUser.watchlist;
            favoriteIds = currentUser.favorites;
            checkAuthStatus();
            renderProfile(); // Load user profile data
        } else {
            // Check if user exists but wrong password or doesn't exist at all
            const exists = users.find(u => u.email === email);
            if (!exists) {
                msg.innerText = "No account found. Please Sign Up first!";
            } else {
                msg.innerText = "Incorrect password.";
            }
        }
    } else {
        // SIGN UP LOGIC
        const exists = users.find(u => u.email === email);
        if (exists) {
            msg.innerText = "Account already exists. Please Login.";
        } else {
           const newUser = { 
            id: Date.now(), // Add unique id
            email: email, 
            password: password, 
            name: email.split('@')[0],           
            joinYear: new Date().getFullYear(),
            watchlist: [],
            favorites: []
        };
        
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
            msg.innerText = "Success! Now please Login.";
            toggleAuthMode(); // Switch back to login mode
        }
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    currentUser = null;
    location.reload(); // Refresh to trigger the login popup
}

// Update your init() function to include checkAuthStatus()
const originalInit = init;
init = function() {
    originalInit();
    checkAuthStatus();
};
        // Initialize app
        hydrateTheme();
        init();
        {
  // ... your existing init code ...
  renderMovies("trendingGrid", movies.slice(0, 6));
  // etc.
  renderProfile();
}
    