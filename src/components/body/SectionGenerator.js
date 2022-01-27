import { IconContext } from 'react-icons';
import * as TiIcons from 'react-icons/ti';
import { FormatText } from '../../functions/FormatText';

export const WarningText = ({ data }) => {
  return (
    <div className='warning-text'>
      <div className='icon-container'>
        <IconContext.Provider value={{ className: 'warning-icon' }}>
          <TiIcons.TiWarningOutline />
          <TiIcons.TiWarning />
        </IconContext.Provider>
      </div>
      <small>{data.map((text, i) => FormatText({ text, i }))}</small>
    </div>
  );
};

export const RegularText = ({ data, dataChild }) => {
  return (
    <>
      {data.title && <Title data={data.title} />}
      {data.subInfo && <SubInfo data={data.subInfo} />}
      {data.content && (
        <div className='content'>
          <Content data={data.content} />
          {dataChild
            ? dataChild.map((val, i) => {
                return (
                  <div key={i} className='sub-content'>
                    {val.title && <Title data={val.title} />}
                    {val.content && (
                      <div className='content'>
                        <Content data={val.content} />
                      </div>
                    )}
                  </div>
                );
              })
            : null}
        </div>
      )}
    </>
  );
};

export const Title = ({ data }) => {
  return (
    <h1 className='title'>{data.map((text, i) => FormatText({ text, i }))}</h1>
  );
};

export const SubInfo = ({ data }) => {
  const SubInfoSeparator = ({ before, after }) => {
    return before && after && <span className='separator'> | </span>;
  };

  const SubInfoContent = ({ data, author, timestamp, location }) => {
    return (
      <span
        className={`${
          author
            ? 'author'
            : timestamp
            ? 'timestamp'
            : location
            ? 'location'
            : ''
        }`}
      >
        {data}
      </span>
    );
  };

  return (
    <div className='sub-info'>
      {data.author && <SubInfoContent author data={data.author} />}
      <SubInfoSeparator before={data.author} after={data.timestamp} />
      {data.timestamp && <SubInfoContent timestamp data={data.timestamp} />}
      <SubInfoSeparator before={data.timestamp} after={data.location} />
      {data.location && <SubInfoContent location data={data.location} />}
    </div>
  );
};

export const Content = ({ data }) => {
  return data.map((content, i) => {
    return (
      <div key={i}>
        {content.paragraph && <Paragraph data={content.paragraph} key={i} />}
        {content.list && <List data={content.list} key={i} />}
        {content.quote && <Quote data={content.quote} key={i} />}
      </div>
    );
  });
};

export const Paragraph = ({ data, i }) => {
  return data.map((val, i) => {
    return (
      <p key={i} className='content-paragraph'>
        <span className='content-paragraph-text'>
          {val.map((text, i) => {
            return FormatText({ text, i });
          })}
        </span>
      </p>
    );
  });
};

export const List = ({ data, i }) => {
  return (
    <ul key={i} className='content-list'>
      {data.map((val, i) => {
        return (
          <li key={i} className='content-list-item'>
            <span className='content-list-text'>
              {val.map((text, i) => {
                return FormatText({ text, i });
              })}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export const Quote = ({ data, i }) => {
  return (
    <div key={i} className='content-quote'>
      <div className='content-quote-text'>
        <span className='content-quote-text'>
          {data.content.map((text, i) => {
            return FormatText({ text, i });
          })}
        </span>
      </div>
      <div className='content-quote-author'>
        <span>{data.author}</span>
        {data.source &&
          (data.source.path ? (
            <a href={data.source.path} target='_blank' rel='noreferrer'>
              {data.source.text}
            </a>
          ) : (
            <span>{data.source.text}</span>
          ))}
      </div>
    </div>
  );
};
