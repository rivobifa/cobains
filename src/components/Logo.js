import { Link } from 'react-router-dom';
import useWindowDimension from '../functions/useWindowDimension';
import { DataBreakpoint } from '../data/DataBreakpoint';

const Logo = ({ search }) => {
  const { screenWidth } = useWindowDimension();
  const breakpoint = DataBreakpoint;

  return (
    <div
      className={`logo ${
        screenWidth < breakpoint.large && search ? 'logo-hide' : ''
      }`}
    >
      <Link to='/'>
        coba
        <span>ins</span>
      </Link>
    </div>
  );
};

export default Logo;
