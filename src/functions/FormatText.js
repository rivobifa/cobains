import { Link } from 'react-router-dom';

export const FormatText = ({ text, i }) => {
  if (text.type) {
    if (text.type === 'bold') {
      return <b key={i}>{text.text}</b>;
    }
    if (text.type === 'bold-italic') {
      return (
        <b key={i}>
          <i>{text.text}</i>
        </b>
      );
    }
    if (text.type === 'bold-underline') {
      return (
        <b key={i}>
          <u>{text.text}</u>
        </b>
      );
    }
    if (text.type === 'bold-italic-underline') {
      return (
        <b key={i}>
          <i>
            <u>{text.text}</u>
          </i>
        </b>
      );
    }
    if (text.type === 'italic') {
      return <i key={i}>{text.text}</i>;
    }
    if (text.type === 'italic-underline') {
      return (
        <i key={i}>
          <u>{text.text}</u>
        </i>
      );
    }
    if (text.type === 'underline') {
      return <u key={i}>{text.text}</u>;
    }
    if (text.type === 'link') {
      return (
        <a key={i} href={text.path} target='_blank' rel='noreferrer'>
          {text.text}
        </a>
      );
    }
    if (text.type === 'link-page') {
      return (
        <Link key={i} to={text.path}>
          {text.text}
        </Link>
      );
    }
    if (text.type === 'ins-term') {
      return (
        <span key={i} className='term-text'>
          {text.text}
        </span>
      );
    } else {
      return text.text;
    }
  } else {
    return text.text;
  }
};
