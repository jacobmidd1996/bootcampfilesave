import './style.css';

fetch('https://api.github.com/gists/public?since=2023-06-01&per_page=100')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

/*
https://
scheme

api.github.com
server/host

/gists/public
resource

?
query delimiter

since=2023-06-01&per_page=100
query

since=2023-06-01
parameter
since is the parameter name
2023-06-01 is the parameter value

per_page=100


*/