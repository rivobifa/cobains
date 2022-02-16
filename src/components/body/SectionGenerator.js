import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as TiIcons from 'react-icons/ti';
import { FormatText } from '../../functions/FormatText';
import { DataLinkPage } from '../../data/DataLink';

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

export const RegularText = ({
  data,
  dataChild,
  previewArticle,
  scrollToConclusion,
}) => {
  return (
    <>
      {data.title && <Title data={data.title} />}
      {data.subInfo && <SubInfo data={data.subInfo} />}
      {data.content && (
        <div className='content'>
          <Content
            data={data.content}
            previewArticle={previewArticle}
            scrollToConclusion={scrollToConclusion && scrollToConclusion}
          />
          {dataChild
            ? dataChild.map((val, i) => {
                return (
                  <div key={i} className='sub-content'>
                    {val.title && <Title dataChild={val.title} />}
                    {val.content && (
                      <div className='content'>
                        <Content
                          data={val.content}
                          previewArticle={previewArticle}
                        />
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

export const Title = ({ data, dataChild }) => {
  return (
    <>
      {data && (
        <h1 className='title outline-1'>
          {data.map((text, i) => FormatText({ text, i }))}
        </h1>
      )}
      {dataChild && (
        <h2 className='title outline-2'>
          {dataChild.map((text, i) => FormatText({ text, i }))}
        </h2>
      )}
    </>
  );
};

export const SubInfo = ({ data }) => {
  const SubInfoSeparator = ({ before, after }) => {
    return before && after && <span className='separator'> | </span>;
  };

  const SubInfoContent = ({
    data,
    author,
    timestamp,
    location,
    linkProfile,
  }) => {
    return author ? (
      <Link to={linkProfile || DataLinkPage[404]} className='author'>
        {data}
      </Link>
    ) : (
      <span
        className={`${timestamp ? 'timestamp' : location ? 'location' : ''}`}
      >
        {data}
      </span>
    );
  };

  return (
    <div className='sub-info'>
      {data.author && (
        <SubInfoContent
          author
          data={data.author}
          linkProfile={data.linkProfile}
        />
      )}
      <SubInfoSeparator before={data.author} after={data.timestamp} />
      {data.timestamp && <SubInfoContent timestamp data={data.timestamp} />}
      <SubInfoSeparator before={data.timestamp} after={data.location} />
      {data.location && <SubInfoContent location data={data.location} />}
    </div>
  );
};

export const Content = ({
  data,
  previewArticle,
  scrollToConclusion,
  className,
}) => {
  return data.map((content, i) => {
    return (
      <div key={i} className={className}>
        {content.paragraph && <Paragraph data={content.paragraph} />}
        {content.list && <List data={content.list} />}
        {content.quote && <Quote data={content.quote} />}
        {content.previewArticle && previewArticle && (
          <PreviewArticle
            data={content.previewArticle}
            onClick={scrollToConclusion}
          />
        )}
        {content.image && <Image data={content.image} />}
        {content.slider && <Slider data={content.slider} />}
      </div>
    );
  });
};

export const Slider = () => {
  return;
};

export const Image = ({ data }) => {
  return <div className='image-container'>{data}</div>;
};

export const PreviewArticle = ({ data, onClick }) => {
  return (
    <div onClick={onClick} className='preview-article-container'>
      {data}
    </div>
  );
};

export const Paragraph = ({ data }) => {
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

export const List = ({ data }) => {
  return (
    <ul className='content-list'>
      {data.map((val, i) => {
        return val.list ? (
          val.list.map((value, i) => {
            return (
              <ul key={i} className='content-list'>
                <li className='content-list-item'>
                  <span className='content-list-text'>
                    {value.map((text, i) => {
                      return FormatText({ text, i });
                    })}
                  </span>
                </li>
              </ul>
            );
          })
        ) : (
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

export const Quote = ({ data }) => {
  return (
    <div className='content-quote'>
      <p className='content-quote-text'>
        <span className='content-quote-text'>
          {data.content.map((text, i) => {
            return FormatText({ text, i });
          })}
        </span>
      </p>
      <p className='content-quote-author'>
        {data.author.path ? (
          <a
            href={data.author.path}
            target='_blank'
            rel='noreferrer'
            className='content-quote-author-text'
          >
            {data.author.text}
          </a>
        ) : (
          <span className='content-quote-author-text'>{data.author.text}</span>
        )}
        {data.source &&
          (data.source.path ? (
            <a
              href={data.source.path}
              target='_blank'
              rel='noreferrer'
              className='content-quote-author-source'
            >
              {data.source.text}
            </a>
          ) : (
            <span className='content-quote-author-source'>
              {data.source.text}
            </span>
          ))}
      </p>
    </div>
  );
};
