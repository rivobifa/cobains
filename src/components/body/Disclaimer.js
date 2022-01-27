import { DataDisclaimer } from '../../data/DataDisclaimer';
import { FormatText } from '../../functions/FormatText';

const Disclaimer = ({ data }) => {
  return (
    <div className='disclaimer'>
      <h5 className='disclaimer-title'>
        {data ? data.title : DataDisclaimer.title}
      </h5>
      <p className='disclaimer-content'>
        <small>
          {data
            ? data.content.map((text, i) => FormatText({ text, i }))
            : DataDisclaimer.content.map((text, i) => FormatText({ text, i }))}
        </small>
      </p>
    </div>
  );
};

export default Disclaimer;
