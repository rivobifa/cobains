import { NavLink } from 'react-router-dom';
import useWindowDimension from '../../functions/useWindowDimension';
import { DataBreakpoint } from '../../data/DataBreakpoint';
import { DataNav } from '../../data/DataLink';

const Navigation = ({ search }) => {
  const { screenWidth } = useWindowDimension();
  const breakpoint = DataBreakpoint;

  return (
    screenWidth < breakpoint.medium || (
      <div className='navigation-top'>
        <nav
          className={`topbar ${
            screenWidth < breakpoint.large && search ? 'topbar-hide' : ''
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
              >
                <span className='nav-text'>{val.title}</span>
                <div className='nav-ornament' />
              </NavLink>
            );
          })}
        </nav>
      </div>
    )
  );
};

export default Navigation;
