import ProfileCard from "../components/ProfileCard";
import mountain from "../assets/mountain_placeholder.png";

// TODO: Add the correct React interfaces/types to the style props
type styles = {
  card: React.CSSproperties;
  heroImg: React.CSSproperties;
  cardArticle: React.CSSproperties;
  cardImg: React.CSSproperties;
  cardH3: React.CSSproperties;
  cardP: React.CSSproperties;
};

const styles = {
  card: {
    borderRadius: "20px",
    backgroundColor: "var(--accent-color)",
    border: "3px solid var(--secondary-color)",
    width: "50%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
  },
  heroImg: {
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${mountain})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    borderRadius: "10px 10px 0 0",
    width: "100%",
    height: "300px",
    display: "flex",
    alignItems: "flex-end",
  },
  cardArticle: {
    backgroundColor: "var(--secondary-color)",
    borderRadius: "0 0 10px 10px",
    padding: "5px 10px",
  },
  cardImg: {
    borderRadius: "0 5px 0 0",
    width: "120px",
    height: "auto",
  },
  cardH3: {
    textAlign: "left",
  },
  cardP: {
    textAlign: "left",
  },
};

const Profile = () => {
  return <ProfileCard styles={styles} />;
};

export default Profile;
