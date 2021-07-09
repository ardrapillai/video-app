import React, { Component } from "react";
import Movie from "./Movie";
import "../App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      Movie: [
        {
          mvId: 1,
          mvName: "SULTHAN",
          mvLanguage: "Tamil, Telugu",
          mvImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0e5e2b68rDCy2ezltvQK847zBKopcIJlRyA&usqp=CAU",
          movieList: [
            {
              mId: 1,
              mName: "Name:",
              mName1: "Sulthan",
            },
            {
              mId: 2,
              mName: "Actors:",
              mName1: "Karthi, Rashmika Mandanna",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Action/Romance",
            },
            {
              mId: 4,
              mName: "Year:",
              mName1: "2021",
            },
            {
              mId: 5,
              mName: "Rating:",
              mName1: "6.4/10",
            },
          ],
        },
        {
          mvId: 2,
          mvName: "LOVE STORY",
          mvLanguage: "Telugu",
          mvImage:
            "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Love_Story_Poster.jpeg/220px-Love_Story_Poster.jpeg",
          movieList: [
            {
              mId: 1,
              mName: "Name:",
              mName1: "Love Story",
            },
            {
              mId: 2,
              mName: "Actors:",
              mName1: "Naga Chaitanya ,Sai Pallavi",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Romance/Drama",
            },
            {
              mId: 4,
              mName: "Year:",
              mName1: "2021",
            },
            {
              mId: 50,
              mName: "Rating:",
              mName1: "4.8/5",
            },
          ],
        },
        {
          mvId: 3,
          mvName: "RANGASTHALAM",
          mvLanguage: "Telugu",
          mvImage:
            "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Rangasthalam.jpg/220px-Rangasthalam.jpg",
          movieList: [
            {
              mId: 1,
              mName: "Name:",
              mName1: "Rangasthalam",
            },
            {
              mId: 2,
              mName: "Actors:",
              mName1: "Ram Charan, Samantha Akkineni, Aadhi Pinisetty",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Action/Drama",
            },
            {
              mId: 4,
              mName: "Year:",
              mName1: "2018",
            },
            {
              mId: 5,
              mName: "Rating:",
              mName1: "4/5",
            },
          ],
        },
        {
          mvId: 4,
          mvName: "V",
          mvLanguage: "Telugu",
          mvImage:
            "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/V_%28film%29.jpg/220px-V_%28film%29.jpg",
          movieList: [
            {
              mId: 1,
              mName: "Name:",
              mName1: "V",
            },
            {
              mId: 2,
              mName: "Actors:",
              mName1: "Nani, Sudheer Babu, Nivetha Thomas, Aditi Rao Hydari",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Thriller/Action",
            },
            {
              mId: 4,
              mName: "Year:",
              mName1: "2020",
            },
            {
              mId: 5,
              mName: "Rating:",
              mName1: "6.7/10",
            },
          ],
        },
        {
          mvId: 5,
          mvName: "SREEKARAM",
          mvLanguage: "Telugu",
          mvImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiF7l8lGW5RvNlr0ZH7La3g09ZAS67WQoiCg&usqp=CAU",
          movieList: [
            {
              mId: 1,
              mName: "Name:",
              mName1: "Sreekaram",
            },
            {
              mId: 2,
              mName: "Actors:",
              mName1: "Sharwanand, Priyanka Arul Mohan",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Drama",
            },
            {
              mId: 4,
              mName: "Year:",
              mName1: "2021",
            },
            {
              mId: 5,
              mName: "Rating:",
              mName1: "7/10",
            },
          ],
        },
        {
          mvId: 6,
          mvName: "RED",
          mvLanguage: "Telugu",
          mvImage:
            "https://i2.wp.com/khabarilonda.com/wp-content/uploads/2021/01/875478b87a43933236a96a2a55b20f58-1.jpg?resize=696,497&ssl=1",
          movieList: [
            {
              mId: 1,
              mName: "Name:",
              mName1: "Red",
            },
            {
              mId: 2,
              mName: "Actors:",
              mName1:
                "	Ram Pothineni, Nivetha Pethuraj, Malvika Sharma, Amritha Aiyer",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Action/Thriller",
            },
            {
              mId: 4,
              mName: "Year:",
              mName1: "2021",
            },
            {
              mId: 5,
              mName: "Rating:",
              mName1: "6.7/10",
            },
          ],
        },
        {
          mvId: 7,
          mvName: "VAKEEL SAAB",
          mvLanguage: "Telugu",
          mvImage:
            "https://snagfilms-a.akamaihd.net/38c1e2aa-64c1-41c3-8b5e-674247d490c8/images/2021/05/5/1620237476655_2watchvakeelsaab1920x1080_16x9Images.jpg",
          movieList: [
            {
              mId: 1,
              mName: "Name:",
              mName1: "Vakeel Sabb",
            },
            {
              mId: 2,
              mName: "Actors:",
              mName1: "pawankalyan, Nivetha Thomos, Anjali, Ananya",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Action/Drama/Thriller",
            },
            {
              mId: 4,
              mName: "Year:",
              mName1: "2021",
            },
            {
              mId: 5,
              mName: "Rating:",
              mName1: "7.9/10",
            },
          ],
        },
        {
          mvId: 8,
          mvName: "JAI LAVA KUSA",
          mvLanguage: "Telugu",
          mvImage: "https://f4.bcbits.com/img/a0387216152_10.jpg",
          movieList: [
            {
              mId: 1,
              mName: "Name:",
              mName1: "Jai Lava Kusa",
            },
            {
              mId: 2,
              mName: "Actors:",
              mName1: "Jr Ntr, Nivetha Thomos",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Action/Romance",
            },
            {
              mId: 4,
              mName: "Year:",
              mName1: "2017",
            },
            {
              mId: 5,
              mName: "Rating:",
              mName1: "7/10",
            },
          ],
        },
        {
          mvId: 9,
          mvName: "MAHANATI",
          mvLanguage: "Telugu",
          mvImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3i6U_lq1vwARcbog7myASNzbIyj-pp8w8w&usqp=CAU",
          movieList: [
            {
              mId: 1,
              mName: "Name:",
              mName1: "Mahanati",
            },
            {
              mId: 2,
              mName: "Actors:",
              mName1:
                "Keerthy Suresh, Dulquer Salmaan, Samantha Akkineni, Vijay Deverakonda",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Drama",
            },
            {
              mId: 4,
              mName: "Year:",
              mName1: "2018",
            },
            {
              mId: 5,
              mName: "Rating:",
              mName1: "8.5/10",
            },
          ],
        },
        {
          mvId: 10,
          mvName: "HELLO",
          mvLanguage: "Telugu",
          mvImage:
            "https://akamaividz1.zee5.com/resources/0-0-movie_1399103403/cover/270x405/hellotelugu1920x770.jpg",
          movieList: [
            {
              mId: 1,
              mName: "Name:",
              mName1: "Hello",
            },
            {
              mId: 2,
              mName: "Actors:",
              mName1: "Akhil Akkineni, Kalyani Priyadarshan",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Action/Romance",
            },
            {
              mId: 4,
              mName: "Year:",
              mName1: "2017",
            },
            {
              mId: 5,
              mName: "Rating:",
              mName1: "7.3/10",
            },
          ],
        },
        {
          mvId: 11,
          mvName: "JAANU",
          mvLanguage: "Telugu",
          mvImage:
            "https://th.bing.com/th/id/OIP.7eYgCKCacpviEKb_y_hGKAHaE8?w=250&h=180&c=7&o=5&dpr=1.5&pid=1.7",
          movieList: [
            {
              mId: 1,
              mName: "Name:",
              mName1: "Jaanu",
            },
            {
              mId: 2,
              mName: "Actors:",
              mName1: "Sharwanand, Samantha Akkineni",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Romance/Drama",
            },
            {
              mId: 4,
              mName: "Year:",
              mName1: "2020",
            },
            {
              mId: 5,
              mName: "Rating:",
              mName1: "7/10",
            },
          ],
        },
        {
          mvId: 12,
          mvName: "DEAR COMRADE",
          mvLanguage: "Telugu",
          mvImage:
            "https://th.bing.com/th/id/OIP.OroQjg90JQsqKYOHHVLmKgHaDG?pid=ImgDet&rs=1",
          movieList: [
            {
              mId: 1,
              mName: "Name:",
              mName1: "Dear Comrade",
            },
            {
              mId: 2,
              mName: "Actors:",
              mName1:
                "	Vijay Deverakonda, Rashmika Mandanna, Shruti Ramachandran",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Romance/Drama",
            },
            {
              mId: 4,
              mName: "Year:",
              mName1: "2019",
            },
            {
              mId: 5,
              mName: "Rating:",
              mName1: "7.4/10",
            },
          ],
        },
        {
          mvId: 13,
          mvName: "MAJILI",
          mvLanguage: "Telugu",
          mvImage:
            "https://th.bing.com/th/id/OIP.9JU9L-gX95riDMGELh0XeQHaJ4?pid=ImgDet&rs=1",
          movieList: [
            {
              mId: 1,
              mName: "Name:",
              mName1: "Majili",
            },
            {
              mId: 2,
              mName: "Actors:",
              mName1: "	Naga Chaitanya, Samantha Akkineni, Divyansha Kaushik",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Romance/Drama",
            },
            {
              mId: 4,
              mName: "Year:",
              mName1: "2019",
            },
            {
              mId: 5,
              mName: "Rating:",
              mName1: "7.2/10",
            },
          ],
        },
        {
          mvId: 14,
          mvName: "SAAHO",
          mvLanguage: "Telugu",
          mvImage:
            "https://upload.wikimedia.org/wikipedia/en/6/6b/Saaho_poster.jpg",
          movieList: [
            {
              mId: 1,
              mName: "Name:",
              mName1: "Saaho",
            },
            {
              mId: 2,
              mName: "Actors:",
              mName1:
                "Prabhas, Shraddha Kapoor, Jackie Shroff, Neil Nitin Mukesh, Arun Vijay, Chunky Pandey",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Action/Thriller",
            },
            {
              mId: 4,
              mName: "Year:",
              mName1: "2019",
            },
            {
              mId: 5,
              mName: "Rating:",
              mName1: "5.2/10",
            },
          ],
        },
        {
          mvId: 15,
          mvName: "JATHI RATNALU",
          mvLanguage: "Telugu",
          mvImage:
            "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Jathi_Ratnalu_poster.jpg/220px-Jathi_Ratnalu_poster.jpg",
          movieList: [
            {
              mId: 1,
              mName: "Name:",
              mName1: "Jathi Ratnalu",
            },
            {
              mId: 2,
              mName: "Actors:",
              mName1:
                "Naveen Polishetty, Priyadarshi, Rahul Ramakrishna, Faria Abdullah",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Comedy/Drama",
            },
            {
              mId: 4,
              mName: "Year:",
              mName1: "2021",
            },
            {
              mId: 5,
              mName: "Rating:",
              mName1: "7.6/10",
            },
          ],
        },
        {
          mvId: 16,
          mvName: "KGF",
          mvLanguage: "Telugu",
          mvImage:
            "https://4.bp.blogspot.com/-wltpacXvjDQ/W-RYuNnF_9I/AAAAAAAApJA/AThbWbbGNMoLpEn5PgWr8WN4_Lq1LFXoACLcBGAs/s1600/KGF-Poster-8.jpg",
          movieList: [
            {
              mId: 1,
              mName: "NAME:",
              mName1: "KGF",
            },
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Yash, Srinidhi Shetty",
            },
            {
              mId: 3,
              mName: "Genre::",
              mName1: "Action",
            },
            {
              mId: 4,
              mName: "YEAR::",
              mName1: "2018",
            },
            {
              mId: 5,
              mName: "RATING::",
              mName1: "3.5/5",
            },
          ],
        },
        {
          mvId: 17,
          mvName: "SOORARAI POTTRU",
          mvLanguage: "Tamil",
          mvImage:
            "https://th.bing.com/th/id/OIP.3s1YLSNMFvBR2XpIl5d9YgHaLP?pid=ImgDet&rs=1",
          movieList: [
            {
              mId: 1,
              mName: "NAME:",
              mName1: "Soorarai Pottru",
            },
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Suriya,Aparna Balamurali",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "biopic",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2020",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "4.5/5",
            },
          ],
        },
        {
          mvId: 18,
          mvName: "AVENGERS ENDGAME",
          mvLanguage: "English",
          mvImage:
            "https://th.bing.com/th/id/OIP.DZ6cdDbQStoBcl7VeJi3WgHaK9?pid=ImgDet&rs=1",
          movieList: [
            {
              mId: 1,
              mName: "NAME:",
              mName1: "Avengers Endgame",
            },
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Robert Downey Jr & more",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Sci- fiction/action",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2019",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "4.1/5",
            },
          ],
        },
        {
          mvId: 19,
          mvName: "MASTER",
          mvLanguage: "Tamil",
          mvImage:
            "https://th.bing.com/th/id/OIP.9ECvVNuwzZaLQRwyItObsQHaJ4?pid=ImgDet&rs=1",
          movieList: [
            {
              mId: 1,
              mName: "NAME:",
              mName1: "Master",
            },
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Vijay & Vijay Sethupathi",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Action",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2021",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "4.1/5",
            },
          ],
        },
        {
          mvId: 20,
          mvName: "The CONJURING",
          mvLanguage: "English",
          mvImage:
            "https://th.bing.com/th/id/OIP.k-gNPzlVM9VslktklUlyNgAAAA?pid=ImgDet&rs=1'",
          movieList: [
            {
              mId: 1,
              mName: "NAME:",
              mName1: "The Conjuring:The Devil Made Me Do It",
            },
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Patrick Wilson & more",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Horror",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2021",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "4.1/5",
            },
          ],
        },
        {
          mvId: 21,
          mvName: "BLACK WIDOW",
          mvLanguage: "English",
          mvImage:
            "https://th.bing.com/th/id/OIP.ERTq50RNKQLp6qlZUYwAZQHaK-?pid=ImgDet&rs=1",
          movieList: [
            {
              mId: 1,
              mName: "NAME:",
              mName1: "Black Widow",
            },
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Scarlett Johanson & more",
            },
            {
              mId: 3,
              mName: "Genre:",
              mName1: "Adventure",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2021",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "4.5/5",
            },
          ],
        },
        {
          mvId: 22,
          mvName: "TRANCE",
          mvLanguage: "Malayalam",
          mvImage:
            "https://m.media-amazon.com/images/M/MV5BYjJhYmM3MWQtMWM3NC00MWQyLTliZWItNDI3NGYwZTU0MDAyXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg",
          movieList: [
            {
              mId: 1,
              mName: "NAME:",
              mName1: "TRANCE",
            },
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Fahadh Faasil,Dileesh",
            },
            {
              mId: 3,
              mName: "GENRE:",
              mName1: "Action",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2020",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "3.7/5",
            },
          ],
        },
        {
          mvId: 23,
          mvName: "24",
          mvLanguage: "Tamil",
          mvImage:
            "https://images-na.ssl-images-amazon.com/images/I/71IUL9fWHZL._RI_.jpg",
          movieList: [
            {
              mId: 1,
              mName: "NAME:",
              mName1: "24",
            },
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Suriya, Samantha",
            },
            {
              mId: 3,
              mName: "GENRE:",
              mName1: "Sci-fiction",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2016",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "3.9/5",
            },
          ],
        },
        {
          mvId: 24,
          mvName: "M.S. Dhoni: The Untold Story",
          mvLanguage: "Hindi",
          mvImage:
            "https://m.media-amazon.com/images/M/MV5BZjAzZjZiMmQtMDZmOC00NjVmLTkyNTItOGI2Mzg4NTBhZTA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
          movieList: [
            {
              mId: 1,
              mName: "NAME:",
              mName1: "M.S. Dhoni: The Untold Story",
            },
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Sushant Singh,Kiara",
            },
            {
              mId: 3,
              mName: "GENRE:",
              mName1: "Biopic",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2016",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "3.9/5",
            },
          ],
        },
        {
          mvId: 25,
          mvName: "Drishyam 2",
          mvLanguage: "Malayalam",
          mvImage:
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNqhWqGb1KTBYX3cUVCk_Y5IlAwY7sL4MI2jcQpMLMUToV6Vm4",
          movieList: [
            {
              mId: 1,
              mName: "NAME:",
              mName1: "ARDRA",
            },
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Mohanlal, Meena",
            },
            {
              mId: 3,
              mName: "GENRE:",
              mName1: "Action",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2021",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "4.4/5",
            },
          ],
        },
        {
          mvId: 26,
          mvName: "13B: Fear Has a New Address",
          mvLanguage: "Hindi",
          mvImage:
            "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_Xyh4g8wGMHI8KFJo3MeE4ECj5tupYVOkDsShdwKI3PYBwCfe",
          movieList: [
            {
              mId: 1,
              mName: "NAME:",
              mName1: "13B: Fear Has a New Address",
            },
            {
              mId: 2,
              mName: "STARS:",
              mName1: "Madhavan,Neetu Chandra",
            },
            {
              mId: 3,
              mName: "GENRE:",
              mName1: "Horror",
            },
            {
              mId: 4,
              mName: "YEAR:",
              mName1: "2009",
            },
            {
              mId: 5,
              mName: "RATING:",
              mName1: "3.7/5",
            },
          ],
        },
      ],
    };
  }

  mapMovies() {
    const card = this.state.Movie.map((movie, index) => (
      <Movie key={movie.rId} movie={movie} />
    ));

    return card;
  }

  render() {
    return (
      <div>
        <p className="h1 text-primary my-3 mx-2" id="heading">
          TRENDING NOW!!
        </p>
        <div className="carousal w-100 mx-1">
          <div className="carousel">
            <div
              className="my-image"
              id="carouselExampleCaptions"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="http://2.bp.blogspot.com/-bYDlIpGp2hU/T4lZnawFqEI/AAAAAAAAO8M/PlNiOEG-rns/s1600/EP-Walld-Hd-Ptl-Unw+(11).jpg"
                    class="d-block w-100"
                    alt="..."
                    style={{ height: 450, width: 300 }}
                  ></img>
                  <div class="carousel-caption d-none d-md-block"></div>
                </div>
                <div class="carousel-item">
                  <img
                    src="https://www.teahub.io/photos/full/300-3008515_3-attarintiki-daredi-movie-poster.jpg"
                    class="d-block w-100"
                    alt="..."
                    style={{ height: 450, width: 300 }}
                  ></img>
                  <div class="carousel-caption d-none d-md-block"></div>
                </div>
                <div class="carousel-item">
                  <img
                    src="https://www.cinejosh.com/photos/2020/07/movies/most_eligible_bachelor_new_poster_and_photo_291150/most_eligible_bachelor_new_poster_and_photo_01.jpg"
                    class="d-block w-100"
                    alt="..."
                    style={{ height: 450, width: 300 }}
                  ></img>
                  <div class="carousel-caption d-none d-md-block"></div>
                </div>
                <div class="carousel-item">
                  <img
                    src="https://data1.ibtimes.co.in/en/full/660772/jai-lava-kusa.jpg"
                    class="d-block w-100"
                    alt="..."
                    style={{ height: 450, width: 300 }}
                  ></img>
                  <div class="carousel-caption d-none d-md-block">
                    <p class="fw-bold">Coming on theaters soon..</p>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">{this.mapMovies()}</div>
        </div>
      </div>
    );
  }
}

export default App;
