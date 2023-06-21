export type MovieDataToSave = {
  country: string;
  nameRU: string;
  nameEN: string;
  year: string;
  director: string;
  description: string;
  image: string; //url
  trailerLink: string; //url
  thumbnail: string; //url
  duration: number; //time in minutes
  movieId: number; //id from beatfilm
};

export type Movie = {
  country: string;
  nameRU: string;
  nameEN: string;
  year: string;
  director: string;
  description: string;
  trailerLink: string; //not full url
  duration: number; //time in minutes
  id: number; //id from beatfilm
  image: object; // image.url - not full image url; image.formats.thumbnail.url - not full thumbnail url;
};

export type SavedMovie = {
  _id: string;
  owner: string; //user id
  country: string;
  nameRU: string;
  nameEN: string;
  year: string;
  director: string;
  description: string;
  image: string; //url
  trailerLink: string; //url
  thumbnail: string; //url
  duration: number; //time in minutes
  movieId: number; //id from beatfilm
};
