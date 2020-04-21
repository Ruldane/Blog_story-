import Head from 'next/head'
import Navbar from "../components/navbar";
import SideMneu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/MovieList";
import Footer from "../components/footer";
import {getCategories, getMovies} from '../actions'
import {useState, useEffect} from "react";
import {error} from "next/dist/build/output/log";

const Home = (props) => {
    // const [movies, setMovies] = useState([]);
    // const [count, setCount] = useState([]);
    //
    // useEffect(  () => {
    //     const fetchData = async () => {
    //         const resMovies = await getMovies();
    //         setMovies(resMovies)
    //     };
    //     fetchData();
        //getMovies().then((movies) => {
          //  setMovies(movies)
       // });

    // }, [count]);

    const {images, movies,  categories} = props;
    return (
        <div>
            <div className="home-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <SideMneu
                                categories={categories}
                                appName={"Movie DB"}
                            />
                        </div>
                        <div className="col-lg-9">
                            <Carousel images={images}/>
                            <div className="row">
                                <MovieList movies={movies || []}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

Home.getInitialProps = async () => {
    console.log('Test');
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

// class Home extends React.Component {
//
//     static async getInitialProps() {
//         const movies = await getMovies();
//         return {
//             movies: movies
//         }
//     }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         movies: [],
    //         error: '',
    //     }
    // }

    // Called only once when componenent is mounted!
    // async componentDidMount() {
    //   const movies = await getMovies()
    //   this.setState({movies})
    // }

    // ComponentDidMount is called only on the browser
    // componentDidMount() {
    //     getMovies().then((movies) => {
    //         this.setState({movies})
    //     })
    //         .catch((error) => {
    //             this.setState({errorMessage: error})
    //         })
    // }
//     render() {
//         const {movies} = this.props;
//         return (
//             <div>
//                 <Head>
//                     <title>Home</title>
//                     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//                           integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
//                           crossorigin="anonymous"/>
//                     <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
//                             integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
//                             crossorigin="anonymous"/>
//                     <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
//                             integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
//                             crossorigin="anonymous"/>
//                     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
//                             integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
//                             crossorigin="anonymous"/>
//                 </Head>
//                 <Navbar/>
//                 <div className="home-page">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-3">
//                                 <SideMneu
//                                     appName={"Movie DB"}
//                                 />
//                             </div>
//                             <div className="col-lg-9">
//                                 <Carousel/>
//                                 <div className="row">
//                                     <MovieList movies={movies}/>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Footer/>
//                 <style jsx>{`
//                     .home-page {
//                     padding-top:80px;
//                     }
//                     `}
//                 </style>
//             </div>
//         )
//     };
// }

export default Home;
