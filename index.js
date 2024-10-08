const githubUsername = 'kaushalP55';

// const codeforcesHandleDiv = document.getElementById('cf-handle');
// const codeforcesRatingDiv = document.getElementById('cf-rating');

const githubUsernameDiv = document.getElementById('gh-username');
const githubRepositoriesDiv = document.getElementById('gh-repositories');

async function updateGithubTooltip() {
  console.log('Working....');
  githubUsernameDiv.innerHTML = `Username: ${githubUsername}`;
  const res = await fetch(`https://api.github.com/users/${githubUsername}`);
  const data = await res.json();
  const { public_repos } = data;
  githubRepositoriesDiv.innerHTML = `Repositories: ${public_repos}`;
}

async function updateGithubTooltip1() {
  console.log('Working(Revno)....');
  githubUsernameDiv1.innerHTML = `Username: ${githubUsername1}`;
  const res = await fetch(`https://api.github.com/users/${githubUsername1}`);
  const data = await res.json();
  const { public_repos } = data;
  githubRepositoriesDiv1.innerHTML = `Repositories: ${public_repos}`;
}

// updateCodeforcesTooltip();
updateGithubTooltip();
updateGithubTooltip1();
