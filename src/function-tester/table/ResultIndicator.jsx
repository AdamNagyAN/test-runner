import React from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { BsCircle } from 'react-icons/bs';

export function ResultIndicator({ testResult }) {
  if (!testResult) {
    return <BsCircle className='icon' />;
  }
  return (
    <>
      {testResult.isSuccess ? (
        <AiFillCheckCircle className='icon text-success' />
      ) : (
        <AiFillCloseCircle className='icon text-error' />
      )}
    </>
  );
}
