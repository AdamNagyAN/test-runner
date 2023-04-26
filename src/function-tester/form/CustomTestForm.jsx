import React from 'react';
import VariableInput from './VariableInput.jsx';
import { FormProvider, useForm } from 'react-hook-form';

function CustomTestForm({ input }) {
  const formMethods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {},
  });

  const onSubmit = (formValues) => {
    console.log(formValues);
  };



  return (
    <div>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <div className='form-control w-full max-w-3xl mx-auto bg-neutral-focus rounded-lg p-8'>
            <label className='label'>
              <span className='label-text' {...formMethods.register("testName")}>Test name</span>
            </label>
            <input
              type='text'
              placeholder='Test name'
              className='input input-md input-bordered w-full'
            />
            {Object.keys(input).map((it) => (
              <VariableInput
                key={JSON.stringify(it)}
                type={input[it]}
                name={it}
              />
            ))}
            <button className="btn btn-success mt-8">Update!</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default CustomTestForm;
