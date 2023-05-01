import { useFormContext } from 'react-hook-form';
import ErrorItem from './ErrorItem.jsx';

const ErrorList = () => {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <div className='mt-4 text-error cursor-pointer'>
      <ul className="list-disc">
      {errors &&
        Object.values(errors)?.map((error, index) => <ErrorItem key={index} error={error} />)}
      </ul>
    </div>
  );
};

export default ErrorList;
