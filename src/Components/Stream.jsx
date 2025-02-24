import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Fade } from 'react-slideshow-image';

const slideImages = [
  {
    url: 'https://mb.cision.com/Public/14247/2902071/856b720fb81856ec_org.jpg',
  },
  {
    url: 'https://wallpapers.com/images/hd/fantastic-beasts-and-where-to-find-them-horizontal-poster-86utad5c6nr65k54.jpg',
  },
  {
    url: 'https://pbs.twimg.com/media/D2jvOdmUgAALnnx.jpg',
  },
  {
    url: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/62804b18669443.562cd567cbcd8.jpg',
  },
];

const MOVIES = [
  {
    id: 1,
    title: 'A.R.M',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/arm-et00407124-1726144274.jpg',
  },
  {
    id: 2,
    title: 'Vaazhai',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vaazhai-et00408594-1724233930.jpg',
  },
  {
    id: 3,
    title: 'G.O.A.T',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-greatest-of-all-time-et00401439-1725014428.jpg',
  },
  {
    id: 4,
    title: 'Lubber Pandhu',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/lubber-pandhu-et00409924-1725002124.jpg',
  },
 {
    id: 5,
    title: 'Nandhan',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/nandhan-et00410955-1725626073.jpg',
  },
  {
    id: 6,
    title: 'Kadaisi Ulaga Por',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kadaisi-ulaga-por-et00412085-1726478794.jpg',
  },
  {
    id: 7,
    title: 'Dhonima',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/dhonima-et00410644-1725981213.jpg',
  },
  {
    id: 8,
    title: 'Thozhar ',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/thozhar-cheguevara-et00412154-1726485232.jpg',
  },
  {
    id: 9,
    title: 'Chelladurai',
    image: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kozhipannai-chelladurai-et00411870-1726560826.jpg',
  },
  {
    id: 9,
    title: 'Transformers One',
    image: 'https://preview.redd.it/if-transformers-one-got-a-sequel-what-would-you-like-the-v0-n17rlzm9elrd1.jpeg?width=1080&crop=smart&auto=webp&s=a16a68465838a0e82bc805716d85117332da58f5',
  },
  

];

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '700px',
  backgroundSize: 'cover',
};

function Stream() {
  return (
    <>
      <div className="slide-container">
        <Fade>
          {slideImages.map((image, index) => (
            <div key={index}>
              <div style={{ ...divStyle, backgroundImage: `url(${image.url})` }}></div>
            </div>
          ))}
        </Fade>
      </div>
      <h1>Streaming NOW</h1>
      <div className="movie-selection">
        {MOVIES.map((movie) => (
          <div
            className="movie"
            key={movie.id}
            onClick={() => setSelectedMovie(movie)}
          >
            <img className="movie-poster" src={movie.image} alt={movie.title} />
            <div className="movie-title">{movie.title}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Stream;