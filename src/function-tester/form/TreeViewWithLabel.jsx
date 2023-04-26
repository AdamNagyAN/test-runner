import React from 'react';

function TreeViewWithLabel({ children, label }) {

  return (
    <div className='border border-2 border-slate-500 rounded-lg p-2 my-2'>
      <label className='label'>{label}</label>
      <div className='flex'>
        <div className='w-1 rounded-full bg-accent ml-2 mr-4' />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}

export default TreeViewWithLabel;
