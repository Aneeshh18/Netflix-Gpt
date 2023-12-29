import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMoviesList: null,
        popularMoviesList: null,
        trailerVideo: null,
        TopRatedMovieList : null,
        UpComingMovieList : null,
        TvTrendingList : null,
        TopRatedTvShowList : null,
        AiringTvShowList : null,
        PopularTvShowList : null,
        SearchMovieList : null,
        SearchTvList : null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            // console.log('Adding now playing movies:', action.payload);
            state.nowPlayingMoviesList = action.payload;
        },
        addPopularMovies: (state, action) => {
            // console.log('Adding popular movies:', action.payload);
            state.popularMoviesList = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
        addTopRatedMovies : (state , action ) => {
            state.TopRatedMovieList = action.payload
        },
        addUpcomingMovies : (state , action ) => {
            state.UpComingMovieList = action.payload
        },
        addTvTrendingList:(state, action) => {
            state.TvTrendingList = action.payload
        },
        addTopRatedTvShow : (state , action ) => {
            state.TopRatedTvShowList = action.payload
        },
        addAiringTvShow : (state , action ) => {
            state.AiringTvShowList = action.payload
        },
        addPopularTvShow:(state, action) => {
            state.PopularTvShowList = action.payload
        },
        
    },
});

export const { addNowPlayingMovies,addPopularMovies, addTrailerVideo, addTopRatedMovies, addUpcomingMovies ,addTvTrendingList,addTopRatedTvShow, addAiringTvShow, addPopularTvShow, addTVSearchList } = moviesSlice.actions;
export default moviesSlice.reducer;