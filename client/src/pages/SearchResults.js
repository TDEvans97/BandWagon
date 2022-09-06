import React from 'react';
import ArtistCard from '../components/ArtistCard';
import SearchBar from '../components/SearchBar';

const SearchResults = () => {
  return (
    <div>
        This is the searchbar:
        <SearchBar/>
        Loop over the results with ArtistCard:
        <ArtistCard/>
    </div>
  )
}

export default SearchResults;