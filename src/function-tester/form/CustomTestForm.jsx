import VariableInput from './VariableInput.jsx';
import { FormProvider, useForm } from 'react-hook-form';
import Modal from '../../components/Modal.jsx';

function CustomTestForm({ input, selectedTest, setSelectedTest }) {
  const formMethods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: selectedTest,
  });

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const onClose = () => {
    setSelectedTest(null);
  };

  return (
    <Modal open onClose={onClose}>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <div className='form-control w-full max-w-3xl mx-auto bg-neutral-focus rounded-lg p-8'>
            <label className='label'>
              <span className='label-text'>Test name</span>
            </label>
            <input
              type='text'
              placeholder='Test name'
              className='input input-md input-bordered w-full'
              {...formMethods.register('testName', {
                required: true,
                maxLength: 50,
              })}
            />
            {Object.keys(input).map((it) => (
              <VariableInput
                key={JSON.stringify(it)}
                type={input[it]}
                name={it}
              />
            ))}
            <button className='btn btn-success mt-8'>Update!</button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}

export default CustomTestForm;
