import VariableInput from './VariableInput.jsx';
import { v4 as uuidv4 } from 'uuid';
import { FormProvider, useForm } from 'react-hook-form';
import Modal from '../../components/Modal.jsx';
import ErrorList from './ErrorList.jsx';

function CustomTestForm({
  input,
  output,
  selectedTest,
  setSelectedTest,
  manualTests,
  setManualTests,
}) {
  const formMethods = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: selectedTest,
  });

  const onSubmit = (formValues) => {
    console.log(formValues);
    if (!selectedTest) {
      setManualTests([...manualTests, { ...formValues, id: uuidv4() }]);
    } else {
      setManualTests([
        ...manualTests.filter((test) => test.id !== selectedTest.id),
        formValues,
      ]);
    }
    onClose();
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
                required: { value: true, message: 'Test name is required!' },
                maxLength: {
                  value: 50,
                  message:
                    'the length of test name should be shorter then 50 characters!',
                },
              })}
            />
            <h3 className='my-2 text-lg text-white'>Input:</h3>
            {Object.keys(input).map((it) => (
              <VariableInput
                key={JSON.stringify(it)}
                type={input[it]}
                name={`input.${it}`}
                label={it}
              />
            ))}
            <h3 className='my-2 text-lg text-white'>Output:</h3>
            {Object.keys(output).map((it) => (
              <VariableInput
                key={JSON.stringify(it)}
                type={output[it]}
                name={`output.${it}`}
                label={it}
              />
            ))}
            <ErrorList />

            <button className='btn btn-success mt-8'>Update!</button>
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
}

export default CustomTestForm;
