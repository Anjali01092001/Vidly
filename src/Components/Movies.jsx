import React, { Component } from 'react';
import Pagination from './Pagination';
import { paginate } from '../utils/paginate';
import Listgroup from './Listgroup';
import Searchbar from './Searchbar';

class Movies extends Component {
    state = {
        movies: [
            {
                _id: "5b21ca3eeb7f6fbccd471816",
                title: "Die Hard",
                genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
                numberInStock: 5,
                dailyRentalRate: 2.5,
                liked: false
            },
            {
                _id: "5b21ca3eeb7f6fbccd471817",
                title: "Get Out",
                genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
                numberInStock: 8,
                dailyRentalRate: 3.5
            },
            {
                _id: "5b21ca3eeb7f6fbccd471819",
                title: "Trip to Italy",
                genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
                numberInStock: 7,
                dailyRentalRate: 3.5
            },
            {
                _id: "5b21ca3eeb7f6fbccd47181a",
                title: "Airplane",
                genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
                numberInStock: 7,
                dailyRentalRate: 3.5
            },
            {
                _id: "5b21ca3eeb7f6fbccd47181b",
                title: "Wedding Crashers",
                genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
                numberInStock: 7,
                dailyRentalRate: 3.5
            },
            {
                _id: "5b21ca3eeb7f6fbccd47181e",
                title: "Gone Girl",
                genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
                numberInStock: 7,
                dailyRentalRate: 4.5
            }
        ],
        pageSize: 4,
        currentPage: 1
    };
    // componentDidMount(){
    //     this.setState({movies:this.state.movies(), genre:this.state.movies.genre()})
    // }
    handleDelete = movdelete => {
        console.log(movdelete);
        const movies = this.state.movies.filter(m => m._id !== movdelete._id);
        this.setState({ movies });
    }
    handleLiked = (movie) => {
        console.log('liked', movie);
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }
    handlePageChange = page => {
        console.log(page);
        this.setState({ currentPage: page });
    }

    render() {
        if (this.state.movies.length === 0) return <h3>OOOPS! There are no movies to show.</h3>
        const movies = paginate(this.state.movies, this.state.currentPage, this.state.pageSize);

        return (
            <>
                <div className="container text-center">
                    <div className="row align-items-start">
                        <div className='col-md-3'>
                            <Listgroup />
                            {/* <Listgroup genitems={this.state.movies.genre} /> */}
                        </div>
                        <div className='col'>
                            <h3>Showing {this.state.movies.length} movies.</h3>
                            <Searchbar />
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">Stock</th>
                                        <th scope="col">Rate</th>
                                        <th scope="col"></th>
                                        <th scope="col"><i class="fa-solid fa-trash" /></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        movies.map(movie => {
                                            return (
                                                <tr key={movie._id}>
                                                    <td >{movie.title}</td>
                                                    <td>{movie.genre.name}</td>
                                                    <td>{movie.numberInStock}</td>
                                                    <td>{movie.dailyRentalRate}</td>{
                                                        <td style={{ cursor: 'pointer' }} onClick={() => this.handleLiked(movie)}>
                                                            {
                                                                (movie.liked) ? (<i class="fa-solid fa-heart" />) : (<i class="fa-regular fa-heart" />)
                                                            }
                                                        </td>
                                                    }
                                                    <td><button type="button" className="btn btn-danger" onClick={() => this.handleDelete(movie)}>Delete</button></td>
                                                </tr>)
                                        })
                                    }
                                </tbody>
                            </table>
                            <Pagination
                                length={this.state.movies.length}
                                pageSize={this.state.pageSize}
                                currentPage={this.state.currentPage}
                                onPageChange={this.handlePageChange} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Movies;