async function getUser() {
    const userName = document.getElementById("usernameInput").value;
    const profileCard = document.getElementById("profileCard");
  
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
  
      document.getElementById("avatar").src = data.avatar_url;
      document.getElementById("name").textContent = data.name || "No name available";
      document.getElementById("username").textContent = "@" + data.login;
      document.getElementById("joined").textContent = "Joined: " + new Date(data.created_at).toDateString();
      document.getElementById("bio").textContent = data.bio || "This profile has no bio";
      document.getElementById("repos").textContent = data.public_repos;
      document.getElementById("followers").textContent = data.followers;
      document.getElementById("following").textContent = data.following;
      document.getElementById("location").textContent = data.location || "Not Available";
      document.getElementById("blog").textContent = data.blog || "Not Available";
      document.getElementById("twitter").textContent = data.twitter_username || "Not Available";
      document.getElementById("company").textContent = data.company || "Not Available";
      profileCard.style.display = "block";
    } catch (error) {
      console.error(error);
    }
  }