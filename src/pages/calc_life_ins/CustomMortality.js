import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import { Controller } from 'react-hook-form';
import { InputCheckbox } from './FormInput';
import { DataLifeIns } from '../../data/pages/calc/DataLifeIns';
import { DataFormInput as formInput } from '../../data/pages/calc/DataCalcLifeIns';
// import { DataIMT4 } from '../../data/DataIMT4';
// import { DataIMT3 } from '../../data/DataIMT3';

export const CustomMortality = ({
  control,
  setValue,
  error,
  dependence,
  template,
  templateMortality,
  templateGender,
}) => {
  return (
    <>
      <ToggleCustomMortalityOpen
        control={control}
        form={formInput.customMortality.toggleOpen}
        dependence={dependence}
        complementary
      />
      {dependence && (
        <div className="custom-mortality-overlay">
          <div className="custom-mortality-container">
            <div className="custom-mortality-header">
              <h3 className="title">Custom Tabel Mortalita</h3>
              <ToggleCustomMortalityOpen
                control={control}
                form={formInput.customMortality.toggleOpen}
                dependence={dependence}
                complementary
              />
            </div>
            <div className="custom-mortality-body">
              <div className="custom-mortality-template">
                <InputCheckbox
                  control={control}
                  form={formInput.customMortality.toggleTemplate}
                />
                {template && (
                  <>
                    <div className="custom-mortality-template-input-container">
                      <div className="line" />
                      <div className="custom-mortality-template-input-box">
                        <div className="custom-mortality-template-input-item">
                          <span className="custom-mortality-template-label">
                            Pilih Tabel
                          </span>
                          <div
                            className={`custom-mortality-template-input ${formInput.customMortality.template.class.mortality}`}
                          >
                            <ToggleTemplateMortality
                              control={control}
                              form={formInput.customMortality.template.imt4}
                              dependence={templateMortality}
                            />
                            <ToggleTemplateMortality
                              control={control}
                              form={formInput.customMortality.template.imt3}
                              dependence={templateMortality}
                            />
                          </div>
                        </div>
                        <div className="custom-mortality-template-input-item">
                          <span className="custom-mortality-template-label">
                            Pilih Jenis Kelamin
                          </span>
                          <div
                            className={`custom-mortality-template-input ${formInput.customMortality.template.class.gender}`}
                          >
                            <ToggleTemplateMortality
                              control={control}
                              form={formInput.customMortality.template.male}
                              dependence={templateGender}
                            />
                            <ToggleTemplateMortality
                              control={control}
                              form={formInput.customMortality.template.female}
                              dependence={templateGender}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <ToggleTemplateMortalityApply
                      control={control}
                      setValue={setValue}
                      form={formInput.customMortality.toggleApply}
                    />
                  </>
                )}
              </div>
              <TableCustomMortality
                control={control}
                error={error}
                templateMortality={templateMortality}
                templateGender={templateGender}
              />
              <ToggleCustomMortalitySubmit
                control={control}
                setValue={setValue}
                form={formInput.customMortality.toggleSave}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const ToggleTemplateMortality = ({ control, form, dependence }) => {
  return (
    <Controller
      name={form.name}
      control={control}
      render={({ field: { onChange } }) => {
        return (
          <>
            <label
              htmlFor={form.id}
              className={dependence === form.id ? 'active' : 'inactive'}
            >
              <input
                type="radio"
                name={form.name}
                id={form.id}
                value={form.id}
                onChange={onChange}
              />
              <span className="checkmark"></span>
              {form.label}
            </label>
          </>
        );
      }}
    />
  );
};
export const ToggleTemplateMortalityApply = ({ control, setValue, form }) => {
  return (
    <p className="apply">
      <small>{form.text[0]} </small>
      <Controller
        name={form.name}
        control={control}
        render={({ field: { onChange } }) => {
          const changeInput = () => {
            onChange();
            setValue('toggleCustomMortality.save', true);
            setValue('toggleCustomMortality.template', false);
            setValue('toggleCustomMortality.open', false);
          };

          return (
            <>
              <label htmlFor={form.name}>
                {form.label}
                <input type="checkbox" id={form.name} onChange={changeInput} />
              </label>
            </>
          );
        }}
      />
      <small> {form.text[1]}</small>
    </p>
  );
};

export const ToggleCustomMortalitySubmit = ({ control, setValue, form }) => {
  return (
    <div className={`input-toggle ${form.class}`}>
      <Controller
        name={form.name}
        control={control}
        render={({ field: { onChange } }) => {
          const changeInput = () => {
            onChange();
            setValue('toggleCustomMortality.save', true);
            setValue('toggleCustomMortality.template', false);
            setValue('toggleCustomMortality.open', false);
          };

          return (
            <>
              <label htmlFor={form.name} className="button-regular">
                {form.label}
              </label>
              <input type="checkbox" id={form.name} onChange={changeInput} />
            </>
          );
        }}
      />
    </div>
  );
};

export const ToggleCustomMortalityOpen = ({
  control,
  form,
  complementary,
  dependence,
}) => {
  return (
    <div className={`${form.class}${dependence !== true ? '-close' : '-open'}`}>
      <Controller
        name={form.name}
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <>
              <label
                htmlFor={form.name}
                className={`${!dependence && 'button-regular'} ${
                  !dependence && complementary && 'button-complementary'
                }`}
              >
                {dependence !== true ? (
                  form.label
                ) : (
                  <IconContext.Provider value={{ className: 'close-icon' }}>
                    <AiIcons.AiOutlineClose />
                  </IconContext.Provider>
                )}
              </label>
              <input
                type="checkbox"
                id={form.name}
                onChange={onChange}
                defaultValue={value || undefined}
              />
            </>
          );
        }}
      />
    </div>
  );
};

const DataIMT4 = DataLifeIns.imt4;
const DataIMT3 = DataLifeIns.imt3;

const TableCustomMortality = ({
  control,
  error,
  templateMortality,
  templateGender,
}) => {
  document.addEventListener('wheel', function (event) {
    if (
      document.activeElement.type === 'number' &&
      document.activeElement.classList.contains('noscroll')
    ) {
      document.activeElement.blur();
    }
  });

  let row = [];
  for (let i = 0; i <= 111; i++) {
    row.push(
      <tr key={i}>
        <td>{i}</td>
        <td>
          <Controller
            name={`customMortality.${i}`}
            control={control}
            rules={{
              validate: {
                min: (v) =>
                  v === undefined ||
                  v === '' ||
                  v >= 0 ||
                  formInput.customMortality.table.validate.min,
                max: (v) =>
                  v === undefined ||
                  v === '' ||
                  v <= 1 ||
                  formInput.customMortality.table.validate.max,
                distract: (v) => v === '' || v !== '',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <input
                type="number"
                className="noscroll"
                onChange={onChange}
                defaultValue={
                  value ||
                  (templateMortality === 'imt4' &&
                    templateGender === 'male' &&
                    DataIMT4.male[i].qx) ||
                  (templateMortality === 'imt4' &&
                    templateGender === 'female' &&
                    DataIMT4.female[i].qx) ||
                  (templateMortality === 'imt3' &&
                    templateGender === 'male' &&
                    DataIMT3.male[i].qx) ||
                  (templateMortality === 'imt3' &&
                    templateGender === 'female' &&
                    DataIMT3.female[i].qx) ||
                  undefined
                }
              />
            )}
          />
        </td>
        <td className={error && error[i] && 'error'}>
          {error ? (error[i] ? error[i].message : '-') : '-'}
        </td>
      </tr>
    );
  }

  return (
    <table className="custom-mortality-table">
      <thead>
        <tr>
          <th>Usia (x)</th>
          <th>
            Probabilitas Kematian (q<small>x</small>)
          </th>
          <th>Error Check</th>
        </tr>
      </thead>
      <tbody>{[row]}</tbody>
    </table>
  );
};
