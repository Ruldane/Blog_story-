import {useState} from 'react'
import SideMneu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/MovieList";
import {getCategories, getMovies} from '../actions'

const Home = (props) => {

    const {images, movies,  categories} = props;
    const [filter, setFilter]=useState('all')

    const changeCategory = (category) => {
        setFilter(category)
    }

    const filterMovies = movies => {
        if (filter === 'all') {
            return movies
        }
        return movies.filter((m) => {
            return m.genre && m.genre.includes(filter)
        })
    }

    return (
        <div>
            <div className="home-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <SideMneu
                                activeCategory={filter}
                                changeCategory={changeCategory}
                                categories={categories}
                                appName={"Movie DB"}
                            />
                        </div>
                        <div className="col-lg-9">
                            <h1>Displaying {filter} movies</h1>
                            <Carousel images={images}/>
                            <div className="row">
                                <MovieList movies={filterMovies(movies) || []} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

Home.getInitialProps = async () => {
    const movies = await getMovies();
    const categories = await getCategories();
  const images = movies.map((movie) => {
      return {
          id: `image-${movie.id}`,
          url : movie.image,
          cover: movie.cover,
          name: movie.name,
      }
  });
  return {
      movies:movies,
      images:images,
      categories: categories
  }
};


export default Home;
