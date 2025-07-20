
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>🏠 Home</Link>
        <Link to="/create" style={{ marginRight: '1rem' }}>Create</Link>
        <Link to="/read" style={{ marginRight: '1rem' }}>Read</Link>
        <Link to="/update" style={{ marginRight: '1rem' }}>Update</Link>
        <Link to="/delete">Delete</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
