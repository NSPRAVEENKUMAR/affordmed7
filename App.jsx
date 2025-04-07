import { useState, useEffect } from "react";
import "./styles.css";

const sampleMovies = [
  {
    id: 1,
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
  },
  {
    id: 2,
    title: "The Witcher",
    image: "https://th.bing.com/th/id/OIP.sh_w2Q1l_AqfZpkWlkXPzAHaFS?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    title: "Money Heist",
    image: "https://th.bing.com/th/id/OIP.gYTCJdYGVv6-Jngj-qajIgHaD4?rs=1&pid=ImgDetMain",
  },
  {
    id: 4,
    title: "Wednesday",
    image: "https://image.tmdb.org/t/p/w500/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg",
  },
  {
    id: 5,
    title: "Squid Game",
    image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
  },
  {
    id: 6,
    title: "Dark",
    image: "https://th.bing.com/th/id/OIP.IqvMm3bkHe-NclAEjHUg8gHaKG?w=660&h=900&rs=1&pid=ImgDetMain",
  },
  {
    id: 7,
    title: "Lupin",
    image: "https://th.bing.com/th/id/OIP.XvcvDx5HSXdrv4O3mf0VgwHaK-?rs=1&pid=ImgDetMain",
  },
  {
    id: 8,
    title: "The Umbrella Academy",
    image: "https://image.tmdb.org/t/p/w500/uYHDQFEvbGQvYfYx60xtb1hApSy.jpg",
  },
  {
    id: 9,
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
  },
  {
    id: 10,
    title: "Peaky Blinders",
    image: "https://image.tmdb.org/t/p/w500/b4CyaqJ6QqKjXkWzR20fBx3xSSt.jpg",
  },
];

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    const random = Math.floor(Math.random() * sampleMovies.length);
    setFeatured(sampleMovies[random]);
  }, [isLoggedIn]);

  const handleLogin = () => {
    if (email && password) {
      setIsLoggedIn(true);
    } else {
      alert("Please enter both email and password.");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <div className="login-box">
          <h1>NETFLIX</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Sign In</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header>
        <h1>NETFLIX</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
        </nav>
      </header>

      {featured && (
        <section
          className="featured"
          style={{ backgroundImage: `url(${featured.image})` }}
        >
          <div className="featured-info">
            <h2>{featured.title}</h2>
            <p>Now streaming. Watch the latest episodes and more.</p>
            <div className="btns">
              <button className="play-btn">Play</button>
              <button className="info-btn">More Info</button>
            </div>
          </div>
        </section>
      )}

      <section className="movies-section">
        <h3>Trending Now</h3>
        <div className="movie-row">
          {sampleMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={movie.image}
                alt={movie.title}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/300x450?text=Image+Not+Found")
                }
              />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
