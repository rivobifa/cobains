import useWindowDimension from '../../functions/useWindowDimension';
import { DataBreakpoint } from '../../data/DataBreakpoint';

const Search = ({ search, toggleSearch }) => {
  const { screenWidth } = useWindowDimension();
  const breakpoint = DataBreakpoint;

  return (
    <div className='search'>
      <div
        className={`search-container ${search ? 'search-focused' : ''} ${
          screenWidth < breakpoint.large && search
            ? 'search-focused-mobile'
            : ''
        }`}
      >
        <form className='search-form' action='search?' target='_top'>
          <input
            className='search-input'
            type='search'
            placeholder='Cari di sini'
          />
          <input className='search-submit' type='submit' value='' />
        </form>
        <div className='search-left' />
        <div className='search-right' />
        <div className='search-stick' />
      </div>
      <button className='search-icon' onClick={toggleSearch} />
    </div>
  );
};

export default Search;
