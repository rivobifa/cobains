import { useForm } from 'react-hook-form';
import {
  InputNumber,
  InputSelect,
  InputToggleAdv,
  InputCheckbox,
} from './FormInput';
import { CustomMortality } from './CustomMortality';
import FormSubmit from './FormSubmit';
import useInput from '../../functions/calc/useInput';
import { DataFormInput as form } from '../../data/pages/calc/DataCalcLifeIns';

const Input = ({ setUserData }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    trigger,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    mode: 'onChange',
  });

  const user = watch();
  const toggleAdv = user.toggleAdv;

  // console.log(user);

  const { onSubmit } = useInput({
    reset,
    user,
    toggleAdv,
    setUserData,
  });

  return (
    <section className="input-container">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="input-control">
          <InputSelect
            control={control}
            form={form.gender}
            error={errors.gender}
            dependence={user.gender}
          />
        </div>
        <div className="input-control">
          <InputNumber
            control={control}
            form={form.age}
            error={errors.age}
            dependence={user.age}
            dependenceInfo={user.info && user.info.age}
          />
        </div>
        <div className="input-control">
          <InputSelect
            control={control}
            form={form.product}
            error={errors.product}
            dependence={user.product}
            dependenceInfo={user.info && user.info.product}
          />
          {(user.product === form.product.options[1] ||
            user.product === form.product.options[2] ||
            user.product === form.product.options[3] ||
            user.product === form.product.options[4]) && (
            <div className="input-sub-container">
              <div className="input-sub-line" />
              <div className="input-sub-box">
                {(user.product === form.product.options[1] ||
                  user.product === form.product.options[2] ||
                  user.product === form.product.options[4]) && (
                  <div className="input-sub">
                    <InputNumber
                      control={control}
                      form={form.period}
                      error={errors.period}
                      dependence={user.age}
                      dependenceInfo={user.info && user.info.period}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="input-control">
          <InputSelect
            control={control}
            form={form.calc}
            error={errors.calc}
            dependence={user.calc}
            dependenceInfo={user.info && user.info.calc}
          />
          {(user.calc === form.calc.options[1] ||
            user.calc === form.calc.options[2]) && (
            <div className="input-sub-container">
              <div className="input-sub-line" />
              <div className="input-sub-box">
                {user.calc === form.calc.options[1] && (
                  <div className="input-sub">
                    <InputNumber
                      control={control}
                      form={form.tsi}
                      error={errors.tsi}
                      dependenceInfo={user.info && user.info.tsi}
                    />
                  </div>
                )}
                {user.calc === form.calc.options[2] && (
                  <>
                    <div className="input-sub">
                      <InputNumber
                        control={control}
                        form={form.premium}
                        error={errors.premium}
                        dependence={user.aPremium}
                        dependenceInfo={user.info && user.info.premium}
                      />
                    </div>
                    {user.aPremium === true && (
                      <div className="input-sub">
                        <InputNumber
                          control={control}
                          form={form.installment}
                          error={errors.installment}
                          dependence={user.age}
                          dependenceInfo={user.info && user.info.installment}
                        />
                      </div>
                    )}
                    <div className="input-sub">
                      <InputCheckbox control={control} form={form.aPremium} />
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
        {toggleAdv && (
          <>
            <InputToggleAdv
              register={register}
              trigger={trigger}
              form={form.add.toggleAdv}
              value={toggleAdv}
              complementary
            />
            {user.aPremium !== true && (
              <div className="input-control">
                <InputNumber
                  control={control}
                  form={form.installment}
                  error={errors.installment}
                  dependence={user.age}
                  dependenceInfo={user.info && user.info.installment}
                />
              </div>
            )}
            <div className="input-control">
              <InputNumber
                control={control}
                form={form.interest}
                error={errors.interest}
                dependenceInfo={user.info && user.info.interest}
              />
            </div>
            {(user.product === form.product.options[2] ||
              user.product === form.product.options[3] ||
              user.product === form.product.options[4]) && (
              <div className="input-sub">
                <InputSelect
                  control={control}
                  form={form.tbp}
                  error={errors.tbp}
                  dependence={user.tbp}
                  dependenceInfo={user.info && user.info.tbp}
                />
              </div>
            )}
            <div className="input-control">
              <InputSelect
                control={control}
                form={form.mortality}
                error={errors.mortality}
                dependence={user.mortality}
                dependenceInfo={user.info && user.info.mortality}
              />
              {user.mortality === form.mortality.options[3] && (
                <div className="input-sub-container">
                  <div className="input-sub-line" />
                  <div className="input-sub-box">
                    <div className="input-sub">
                      <CustomMortality
                        control={control}
                        setValue={setValue}
                        mortality={user.mortality}
                        error={errors.customMortality}
                        dependence={
                          user.toggleCustomMortality &&
                          user.toggleCustomMortality.open
                        }
                        template={
                          user.toggleCustomMortality &&
                          user.toggleCustomMortality.template
                        }
                        templateMortality={
                          user.toggleTemplate && user.toggleTemplate.mortality
                        }
                        templateGender={
                          user.toggleTemplate && user.toggleTemplate.gender
                        }
                      />
                    </div>
                    <div className="input-sub"></div>
                  </div>
                </div>
              )}
            </div>
            <div className="input-control">
              <InputSelect
                control={control}
                form={form.annuity}
                error={errors.annuity}
                dependence={user.annuity}
                age={user.age}
                installment={user.installment}
                dependenceInfo={user.info && user.info.annuity}
              />
            </div>
          </>
        )}
        <FormSubmit dependence={user.calc} />
        {!toggleAdv && (
          <InputToggleAdv
            register={register}
            trigger={trigger}
            form={form.add.toggleAdv}
            value={toggleAdv}
            complementary
          />
        )}
      </form>
    </section>
  );
};

export default Input;
