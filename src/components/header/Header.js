import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Logo from '../Logo';
import Search from './Search';
import useScrollDir from '../../functions/useScrollDir';
import useScrollPosition from '../../functions/useScrollPosition';

const Header = () => {
  const scrollPosition = useScrollPosition();
  const scrollDir = useScrollDir();

  // Side bar overlay
  const [sidebar, setSidebar] = useState(false);
  const [linkTransition, setLinkTransition] = useState(false);

  const toggleSidebar = () => {
    const closeSearch = () => (search ? toggleSearch() : null);
    closeSearch();
    setLinkTransition(false);
    setSidebar((close) => !close);
  };

  const [search, setSearch] = useState(false);
  const toggleSearch = () => {
    const closeSidebar = () => (sidebar ? toggleSidebar() : null);
    closeSidebar();
    setSearch((close) => !close);
  };

  return (
    <header
      className={`header ${
        scrollDir === 'up' ||
        (scrollDir !== 'up' && (sidebar || search)) ||
        scrollPosition <= 50
          ? 'header-sticky'
          : ''
      }`}
    >
      <div className='header-container'>
        <Sidebar
          sidebar={sidebar}
          toggleSidebar={toggleSidebar}
          linkTransition={linkTransition}
          setLinkTransition={setLinkTransition}
        />
        {sidebar ? (
          <div className='sidebar-overlay' onClick={toggleSidebar} />
        ) : null}
        <Logo search={search}></Logo>
        <Topbar search={search} />
        <Search search={search} toggleSearch={toggleSearch} />
        {search ? (
          <div className='search-overlay' onClick={toggleSearch} />
        ) : null}
      </div>
    </header>
  );
};

export default Header;
