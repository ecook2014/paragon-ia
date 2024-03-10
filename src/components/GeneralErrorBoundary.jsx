import { useRouteError } from 'react-router-dom';

function GeneralErrorBoundary() {
  const error = useRouteError();

  if (error) {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#db4f4a',
          fontSize: '1rem',
        }}>
        {error?.message ? error.message : 'There was an error'}
      </div>
    );
  }

  return null;
}

export default GeneralErrorBoundary;
