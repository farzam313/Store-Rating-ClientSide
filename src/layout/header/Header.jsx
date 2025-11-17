export const Header = () => {
  return (
    <div>
      <header className="bg-blue-800 text-white py-4 w-full text-center">
        <Link to="/">Logo</Link>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </header>
    </div>
  );
};
