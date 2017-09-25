function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

//parsing json for each issue
function showIssues(json) {
  return json.map((issue) => {
    return {
      title: issue.title,
      body: issue.body
    };
  });
}

// gets issues from api w/ auth, makes them json, takes json and sets title and body for each one, then places results in html elements
function getIssues() {
  const repo = 'bleavs/javascript-fetch-lab';

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`,
    },
  }).then(res => res.json()).then(json => showIssues(json)).then(issues => showResults(issues));
}

// iter. over to place each issue in html elements w/in div
function showResults(issues) {
  const issueDiv = document.querySelector('#issues')

  for (let i = 0; i < issues.length; i += 1) {

    const title = document.createElement('h3');
    const issueBody = document.createElement('p');

    title.innerText = issues[i].title;
    issueBody.innerText = issues[i].body;

    issueDiv.appendChild(title);
    issueDiv.appendChild(issueBody);
  }
}


function createIssue() {
  const repo = 'bleavs/javascript-fetch-lab';

  const issueBody = {
    'title': document.querySelector("#title").value,
    'body': document.querySelector("#body").value
  };
  console.log(issueBody);

  // fetching issues
  fetch(`https://api.github.com/repos/${repo}/issues`, {
      method: 'post',
      headers: {
        Authorization: `token ${getToken()}`,
      },
      // taking body from issue and making it json

      body: JSON.stringify(issueBody)
    }).then(res => console.log(res));
  }



function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`,
    },
  }).then(res => console.log(res));
}
