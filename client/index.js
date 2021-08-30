const clickHandler = () =>
  (location.href = "https://github.com/gonuma/solo-api-project/tree/master");

const hoverHandler = () => (document.getElementById("Rick").style.opacity = 1);
const byeRick = () => (document.getElementById("Rick").style.opacity = 0);

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
    <button onclick="clickHandler()" type="submit" id="GitButton">GitHub Repo</button>
    <div><img id="Rick" onmouseover="hoverHandler()" onmouseleave="byeRick()" src="https://media3.giphy.com/media/ZE5DmCqNMr3yDXq1Zu/giphy.gif?cid=790b761122777ef0d1f18ac35b9b55d4a49efd2fe9047d4f&rid=giphy.gif&ct=s" alt="On a roll!"/></div>
    </div>`;
};

document.body.innerHTML = app();
