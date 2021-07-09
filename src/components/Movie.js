import React, { Component } from "react";
import MovieList from "./MovieList";
import "../index.css";
import "../App.css";

class Movie extends Component {
  constructor() {
    super();
  }

  mapMovieList() {
    const list = this.props.movie.movieList.map((movieList, index) => (
      <MovieList key={movieList.mId} movieList={movieList}></MovieList>
    ));
    return list;
  }

  render() {
    return (
      <div className="col-sm-2 px-1 py-1 ">
        <div className="card" id="imgCards">
          <img src={this.props.movie.mvImage} className="my-image" alt="..." />
          <div className="card-body bg-dark text-white">
            <h6 className="card-title">{this.props.movie.mvName}</h6>
            <p className="card-text">{this.props.movie.mvLanguage}</p>
            <button
              className="btn btn-info btn-sm"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapseExample" + this.props.movie.mvId}
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              View More
            </button>
          </div>
        </div>

        <div
          className="collapse mt-2"
          id={"collapseExample" + this.props.movie.mvId}
        >
          <div className="card card-body p-0 ">
            <ul className="list-group ">{this.mapMovieList()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
