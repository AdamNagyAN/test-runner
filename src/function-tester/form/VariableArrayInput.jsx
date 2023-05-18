import React from 'react';
import VariableInput from './VariableInput.jsx';
import TreeViewWithLabel from './TreeViewWithLabel.jsx';
import { useFieldArray } from 'react-hook-form';
import { AiFillCloseCircle, AiFillPlusCircle } from 'react-icons/ai';

function VariableArrayInput({ name, label, type }) {
  const { append, fields, remove } = useFieldArray({
    name: name,
  });

  React.useEffect(() => {
    if (fields?.length === 0) {
      append();
    }
  }, [fields?.length]);

  return (
    <TreeViewWithLabel
      label={<span className='label-text'>{label}: Array</span>}
    >
      {Object.keys(fields).map((field, index) => (
        <>
          <VariableInput
            key={field.id}
            type={type}
            name={`${name}.${field}`}
            label={`${field}`}
            // name={JSON.stringify({label, field})}
          />
          {fields?.length > 1 && (
            <button type="button" onClick={async () => remove(index)}>
              <AiFillCloseCircle className='icon text-error' />
            </button>
          )}
        </>
      ))}
      <button onClick={() => append(type)}>
        <AiFillPlusCircle type="button" className='icon text-success' />
      </button>
    </TreeViewWithLabel>
  );
}

export default VariableArrayInput;
