import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br />
      <Link to="/stories">Stories</Link>
    </nav>
  );
}
export default Navbar;