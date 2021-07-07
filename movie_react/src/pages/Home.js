import RecommendedMovies from '../components/Movies/RecommendedMovies'
import LastSeenMovies from '../components/Movies/LastSeenMovies'
import MostPopularMovies from '../components/Movies/MostPopularMovies'

const Home = () => {
    return <section>
        <div className="banner">Movies</div>
        <div className="menu-list-movie">
            <div className="list-movie">
                <RecommendedMovies />
            </div>
            <div className="list-movie">
                <LastSeenMovies />
            </div>
            <div className="list-movie">
                <MostPopularMovies />
            </div>
        </div>
    </section>
}

export default Home