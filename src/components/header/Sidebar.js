import { NavLink } from 'react-router-dom';
import { DataNav } from '../../data/DataLink';
import { IconContext } from 'react-icons';

const SideBar = ({
  sidebar,
  toggleSidebar,
  linkTransition,
  setLinkTransition,
}) => {
  const toggleLinkTransition = () => {
    toggleSidebar();
    setLinkTransition(true);
  };
  return (
    <div className='navigation-side'>
      <button
        className={`hamburger ${sidebar ? 'hamburger-close' : ''} ${
          linkTransition ? 'transition-none' : ''
        }`}
        onClick={toggleSidebar}
      >
        <div
          className={`hamburger-line ${
            linkTransition ? 'transition-none' : ''
          }`}
        />
        <div
          className={`hamburger-line ${
            linkTransition ? 'transition-none' : ''
          }`}
        />
      </button>
      <nav
        className={`sidebar ${sidebar ? 'sidebar-open' : 'sidebar-close'} ${
          linkTransition ? 'transition-none' : ''
        }`}
      >
        {DataNav.map((val, i) => {
          return (
            <NavLink
              key={i}
              className={val.class}
              activeclassname='active'
              exact={i === 0 ? 'true' : 'false'}
              to={val.path}
              onClick={toggleLinkTransition}
            >
              <IconContext.Provider value={{ className: 'nav-icon' }}>
                {val.icon}
              </IconContext.Provider>
              <span className='nav-text'>{val.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default SideBar;
