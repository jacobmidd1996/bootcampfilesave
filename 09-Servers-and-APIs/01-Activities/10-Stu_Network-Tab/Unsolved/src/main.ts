import "./style.css";
const badRequestUrl = "https://api.github.com/unicorns";
const redirectUrl = "./404.html";

const getRequest = async () => {
  const response = await fetch(badRequestUrl);
  // Use a conditional to check the response status.
  if (response.status === 404) {
    // If that status equals the conditional, then redirect to the 404 page.
    window.location.href = redirectUrl;
  } else {
    const data = await response.json();
    console.log(data);
  }
};
getRequest();
