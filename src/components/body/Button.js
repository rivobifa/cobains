import { Link } from 'react-router-dom';

export const Button = ({
  className,
  regular,
  complementary,
  refRegular,
  refComplementary,
  pathRegular,
  pathComplementary,
  normalLinkRegular,
  normalLinkComplementary,
}) => {
  return (
    <div className={`content-link ${className ? className : ''}`}>
      {regular &&
        (normalLinkRegular ? (
          <a
            className='button-regular'
            href={pathRegular ? pathRegular : '#'}
            onClick={refRegular ? refRegular : null}
          >
            {regular}
          </a>
        ) : (
          <Link
            className='button-regular'
            to={pathRegular ? pathRegular : '#'}
            onClick={refRegular ? refRegular : null}
          >
            {regular}
          </Link>
        ))}
      {complementary && (
        <>
          <div className='button-separator'></div>
          {normalLinkComplementary ? (
            <a
              className='button-regular'
              href={pathComplementary ? pathComplementary : '#'}
              onClick={refComplementary ? refComplementary : null}
            >
              {complementary}
            </a>
          ) : (
            <Link
              className='button-edu button-regular button-complementary'
              to={pathComplementary ? pathComplementary : '#'}
              onClick={refComplementary ? refComplementary : null}
            >
              {complementary}
            </Link>
          )}
        </>
      )}
    </div>
  );
};
