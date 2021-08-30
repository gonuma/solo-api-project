const clickHandler = () =>
  (location.href = "https://github.com/gonuma/solo-api-project/tree/master");

app = () => {
  return `<div>
    <h1>Welcome to my Cycling Tracker API!</h1>
    <p>
    This is a barebones API that I made in a day or so to test
    accessing/manipulating information in a database through Knex.
    </p>
    <p>
    Click the button below to jump to the GitHub repository!
    </p>
    <button onclick="clickHandler()"type="submit" id="GitButton">GitHub Repo</button>
    </div>`;
};

document.body.innerHTML = app();
