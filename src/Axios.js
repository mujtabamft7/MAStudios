import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://video-backend-y112.onrender.com/api';

// Customer API
export const registerCustomer = (customerData) => {
    return axios.post(`${API_BASE_URL}/customers/register`, customerData);
};

export const loginCustomer = (loginData) => {
    return axios.post(`${API_BASE_URL}/customers/login`, loginData);
};

export const getAllCustomers = () => {
    return axios.get(`${API_BASE_URL}/customers`);
};

export const getCustomerById = (customerId) => {
    return axios.get(`${API_BASE_URL}/customers/${customerId}`);
};

export const deleteCustomerById = (customerId) => {
    return axios.delete(`${API_BASE_URL}/customers/${customerId}`);
};

// // Movie API
// export const createMovie = (movieData) => {
//     return axios.post(`${API_BASE_URL}/movies`, movieData);
// };

// export const getAllMovies = () => {
//     return axios.get(`${API_BASE_URL}/movies`);
// };

// export const getMovieById = (movieId) => {
//     return axios.get(`${API_BASE_URL}/movies/${movieId}`);
// };

// export const searchMoviesByTitle = (title) => {
//     return axios.get(`${API_BASE_URL}/movies/search`, {
//         params: { title }
//     });
// };

// export const getFeaturedMovies = () => {
//     return axios.get(`${API_BASE_URL}/movies/featured`);
// };

// export const updateMovie = (movieId, movieData) => {
//     return axios.put(`${API_BASE_URL}/movies/${movieId}`, movieData);
// };

// export const deleteMovieById = (movieId) => {
//     return axios.delete(`${API_BASE_URL}/movies/${movieId}`);
// };

// // TV Show API
// export const createTVShow = (tvShowData) => {
//     return axios.post(`${API_BASE_URL}/tvshows`, tvShowData);
// };

// export const getAllTVShows = () => {
//     return axios.get(`${API_BASE_URL}/tvshows`);
// };

// export const getTVShowById = (showId) => {
//     return axios.get(`${API_BASE_URL}/tvshows/${showId}`);
// };

// export const searchTVShowsByTitle = (title) => {
//     return axios.get(`${API_BASE_URL}/tvshows/search`, {
//         params: { title }
//     });
// };

// export const getFeaturedTVShows = () => {
//     return axios.get(`${API_BASE_URL}/tvshows/featured`);
// };

// export const updateTVShow = (showId, tvShowData) => {
//     return axios.put(`${API_BASE_URL}/tvshows/${showId}`, tvShowData);
// };

// export const deleteTVShowById = (showId) => {
//     return axios.delete(`${API_BASE_URL}/tvshows/${showId}`);
// };
