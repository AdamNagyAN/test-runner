import { useFormContext } from 'react-hook-form';
import VariableArrayInput from './VariableArrayInput.jsx';
import TreeViewWithLabel from './TreeViewWithLabel.jsx';

function VariableInput({ type, name, label }) {
  const { register } = useFormContext();

  if (type instanceof Array) {
    return <VariableArrayInput name={name} label={label} type={type[0]} />;
  }

  if (type instanceof Object) {
    return (
      <TreeViewWithLabel label={<span className='label-text'>{label}: Object</span>}>
        {Object.keys(type).map((key) => (
          <VariableInput key={key} type={type[key]} label={`${key}`} name={`${name}.${key}`} />
        ))}
      </TreeViewWithLabel>
    );
  }

  if (type === 'boolean') {
    return (
      <div className='w-full'>
        <label className='label' htmlFor={name}>
          <span className='label-text'>{label}:</span>
        </label>
        <input
          {...register(name)}
          type='checkbox'
          className='toggle toggle-success'
        />
      </div>
    );
  }

  if (type === 'number') {
    return (
      <div className='w-full'>
        <label className='label'>
          <span className='label-text'>{label}:</span>
        </label>
        <input
          {...register(name, {
            required: { value: true, message: `${label} field is required` },
            valueAsNumber: true,
          })}
          type='number'
          placeholder={label}
          className='input input-md input-bordered w-full'
        />
      </div>
    );
  }

  return (
    <div className='w-full'>
      <label className='label'>
        <span className='label-text'>{label}:</span>
      </label>
      <input
        {...register(name, {
          required: { value: true, message: `${label} field is required` },
        })}
        type='text'
        placeholder={label}
        className='input input-md input-bordered w-full'
      />
    </div>
  );
}

export default VariableInput;
