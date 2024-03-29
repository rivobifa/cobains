import Input from './Input';
import { DataInputCalc } from '../../data/pages/calc/DataCalcLifeIns';
import {
  RegularText,
  WarningText,
} from '../../components/body/SectionGenerator';
import SideContent from '../../components/body/SideContent';

const PageCalcInput = ({ setUserData }) => {
  return (
    <div className="body-page">
      <div className="page-container page-calc-input">
        <section className="content-container">
          <RegularText data={DataInputCalc.section[0]} />
          <WarningText data={DataInputCalc.warn} />
        </section>
        <Input setUserData={setUserData} />
      </div>
      <SideContent sideInfoData={DataInputCalc.sideInfo} />
    </div>
  );
};

export default PageCalcInput;
