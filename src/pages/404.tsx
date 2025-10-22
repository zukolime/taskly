import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className='container'>
      <h1>Page Not Found</h1>
      <Link to='/'>To Home</Link>
    </div>
  );
};
