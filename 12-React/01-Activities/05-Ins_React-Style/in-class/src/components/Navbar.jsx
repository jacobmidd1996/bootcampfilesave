// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  const styles = {
    card: {
      margin: 20,
      background: '#e8eaf6',
    },
    heading: {
      background: 'tomato',
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'white',
      padding: '0 20px',
    },
  };

  const today = new Date();
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Home {today.getDay()}</div>
    </div>
  );
}

export default Navbar;
