import React from 'react';
import VariableInput from './VariableInput.jsx';
import TreeViewWithLabel from './TreeViewWithLabel.jsx';
import { useFieldArray } from 'react-hook-form';
import { AiFillCloseCircle, AiFillPlusCircle } from 'react-icons/ai';

function VariableArrayInput({ label, type }) {
  const { append, fields, remove } = useFieldArray({
    name: label,
  });


  return (
    <TreeViewWithLabel
      label={<span className='label-text'>{label}: Array</span>}
    >
      {Object.keys(fields).map((field, index) => (
        <>
          <VariableInput
            key={field.id}
            type={type}
            name={`${label}.${field}`}
            // name={JSON.stringify({label, field})}
          />
          <button onClick={() => remove(index)}>
            <AiFillCloseCircle className='icon text-error' />
          </button>
        </>
      ))}
      <button onClick={() => append()}>
        <AiFillPlusCircle className='icon text-success' />
      </button>
    </TreeViewWithLabel>
  );
}

export default VariableArrayInput;
