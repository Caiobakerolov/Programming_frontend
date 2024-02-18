document.addEventListener('DOMContentLoaded', function() {
  const nameElement = document.querySelector('#name');
  const usernameElement = document.querySelector('#username');
  const avatarElement = document.querySelector('#avatar');
  const reposElement = document.querySelector('#repos');
  const followersElement = document.querySelector('#followers');
  const followingElement = document.querySelector('#following');
  const linkElement = document.querySelector('#link');

  try {
    fetch('https://api.github.com/users/Caiobakerolov')
      .then(function(res) {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(function(json) {
        nameElement.innerHTML = json.name;
        usernameElement.innerHTML = json.login;
        avatarElement.src = json.avatar_url; 
        reposElement.innerHTML = json.public_repos;
        followersElement.innerHTML = json.followers;
        followingElement.innerHTML = json.following;
        linkElement.href = json.html_url; 
        linkElement.innerHTML = 'View Profile'; 
      })
      .catch(function(error) {
        console.error('Fetch error:', error);        
      });
  } catch (error) {
    console.error('Erro no código de sincronização:', error);    
  } finally {    
    console.log('Fetch tentou executar.');
  }
});
