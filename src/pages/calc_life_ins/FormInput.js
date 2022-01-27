import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import NumberFormat from 'react-number-format';
import { Controller } from 'react-hook-form';
import { IconContext } from 'react-icons';
import * as AiIcons from 'react-icons/ai';
import { FormatText } from '../../functions/FormatText';

export const InputToggleAdv = ({
  register,
  trigger,
  form,
  value,
  complementary,
}) => {
  return (
    <div className={`input-toggle ${value && 'close'}`}>
      {value && <div>{form.close.message}</div>}
      <input
        type='checkbox'
        id={form.name}
        value={true}
        name={form.name}
        {...register(`${form.name}`)}
        onKeyUp={() => {
          trigger(`${form.name}`);
        }}
      />
      <label
        htmlFor={form.name}
        className={`input-toggle-label button-regular ${
          complementary && 'button-complementary'
        }`}
      >
        {value ? form.close.value : form.open.value}
      </label>
    </div>
  );
};

export const InputCheckbox = ({ control, form }) => {
  return (
    <div className={`input-form input-checkbox ${form.class}`}>
      <Controller
        name={form.name}
        control={control}
        render={({ field: { onChange } }) => (
          <>
            <input type='checkbox' id={form.name} onChange={onChange} />
            <LabelInput form={form} />
          </>
        )}
      />
    </div>
  );
};

export const InputNumber = ({
  control,
  form,
  error,
  dependence,
  dependenceInfo,
}) => {
  return (
    <div className={`input-form ${form.class}`}>
      <Controller
        name={form.name}
        control={control}
        rules={{
          required: form.required,
          validate: {
            min: form.min || form.distract,
            limit: form.hasOwnProperty('limit')
              ? dependence
                ? generateLimit({ form, dependence })
                : form.distract
              : form.max || form.distract,
          },
        }}
        render={({ field: { onChange } }) => (
          <>
            <LabelInput
              control={control}
              form={form}
              error={error}
              dependence={dependence}
              dependenceInfo={dependenceInfo}
            />
            <NumberFormat
              thousandSeparator={
                form.name === 'tsi' || form.name === 'premium' || false
              }
              onChange={onChange}
              customInput={TextField}
              placeholder={form.placeholder}
              inputProps={{ inputMode: 'numeric' }}
              InputProps={{
                className: 'input-number',
                startAdornment: startAdornment({ form }),
                endAdornment: endAdornment({ form, dependence }),
              }}
              fullWidth
              variant='outlined'
              margin='normal'
              size='small'
              error={error && true}
              helperText={HelperText({ error })}
            />
          </>
        )}
      />
    </div>
  );
};

export const InputSelect = ({
  control,
  form,
  error,
  dependence,
  age,
  installment,
  dependenceInfo,
}) => {
  return (
    <div className={`input-form ${form.class}`}>
      <Controller
        name={form.name}
        control={control}
        rules={{
          required: form.required,
          validate: {
            required: (v) => v !== form.options[0] || form.required,
            ordinaryAnnuity: (v) =>
              form.name !== 'annuity' ||
              v !== form.options[2] ||
              (v === form.options[2] && (!installment || !age)) ||
              (v === form.options[2] &&
                parseInt(installment) + parseInt(age) + 1 <= 111) ||
              form.validate.message,
          },
        }}
        render={({ field: { onChange } }) => (
          <>
            <LabelInput
              control={control}
              form={form}
              error={error}
              dependenceInfo={dependenceInfo}
            />
            <TextField
              select
              onChange={onChange}
              inputProps={{ style: { maxHeight: '1rem' } }}
              InputProps={{
                className: `input-select ${
                  dependence !== undefined || 'input-placeholder'
                }`,
              }}
              fullWidth
              variant='outlined'
              margin='normal'
              size='small'
              error={error && true}
              helperText={HelperText({ error })}
              defaultValue={form.options[0]}
            >
              {generateOptions({ form })}
            </TextField>
          </>
        )}
      />
    </div>
  );
};

export const LabelInput = ({
  control,
  form,
  error,
  dependence,
  dependenceInfo,
}) => {
  return (
    <div className={`input-label ${error && 'input-label-error'}`}>
      <label htmlFor={form.name}>
        {form.name === 'premium'
          ? dependence === true
            ? form.label[1]
            : form.label[0]
          : form.label}{' '}
        {form.required && <span className='required'> *</span>}
      </label>
      {form.info && (
        <InfoButton
          control={control}
          form={form.info}
          dependenceInfo={dependenceInfo}
        />
      )}
    </div>
  );
};

export const InfoButton = ({ control, form, dependenceInfo }) => {
  return (
    <>
      <Controller
        name={form.name}
        control={control}
        render={({ field: { onChange } }) => (
          <label className='info-icon-container'>
            <input type='checkbox' onChange={onChange} />
            <div className='info-icon-box'>
              <IconContext.Provider value={{ className: 'info-icon' }}>
                <AiIcons.AiOutlineInfoCircle />
              </IconContext.Provider>
            </div>
          </label>
        )}
      />
      <div className={`info-container ${dependenceInfo && 'display'}`}>
        {form.content.map((val, i) => {
          return (
            <p key={i} className='info-text'>
              <small>
                {val.map((text, i) => {
                  return FormatText({ text, i });
                })}
              </small>
            </p>
          );
        })}
      </div>
    </>
  );
};

export const HelperText = ({ error }) => {
  return (
    error && (
      <>
        <IconContext.Provider value={{ className: 'input-error-icon' }}>
          <AiIcons.AiFillCloseCircle />
        </IconContext.Provider>
        {error.message}
      </>
    )
  );
};

export const generateLimit = ({ form, dependence }) => {
  return (v) =>
    v === undefined ||
    v === '' ||
    parseInt(v) + parseInt(dependence) <= form.limit.value ||
    `${form.limit.message} ${form.limit.value - parseInt(dependence)}`;
};

export const startAdornment = ({ form }) => {
  return (
    form.adornment.includes('currency') && (
      <InputAdornment position='start'>Rp</InputAdornment>
    )
  );
};

export const endAdornment = ({ form, dependence }) => {
  return (
    <>
      {form.adornment.includes('year') &&
        ((form.name === 'premium' && dependence === true && (
          <InputAdornment position='end'>/ Tahun</InputAdornment>
        )) ||
          (form.name !== 'premium' && (
            <InputAdornment position='end'>Tahun</InputAdornment>
          )))}
      {form.adornment.includes('percentage') && (
        <InputAdornment position='end'>%</InputAdornment>
      )}
    </>
  );
};

export const generateOptions = ({ form }) => {
  return form.options.map((value, i) => {
    return (
      <MenuItem key={i} disabled={i === 0 || false} value={value}>
        {value}
      </MenuItem>
    );
  });
};
