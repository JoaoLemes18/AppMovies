import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  params: {
    api_key: "6b824597ac6a1c9203f4cc4f48e703bc",

    include_adult: false,
  },
});
