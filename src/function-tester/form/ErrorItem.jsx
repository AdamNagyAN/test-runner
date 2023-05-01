const ErrorItem = ({ error }) => {
  console.log(error);

  if (!error?.message) {
    return (
      <ul className='ml-2 list-disc'>
        {Object.values(error).map((it, index) => (
          <ErrorItem error={it} key={index} />
        ))}
      </ul>
    );
  }

  // return <p onClick={() => error.ref.focus()}>{error.message}</p>;
  return <li onClick={() => error.ref.focus()}>{error.message}</li>;
};

export default ErrorItem;
