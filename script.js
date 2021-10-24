const linksSocialMedia = {
	github: "YuriMarch",
	facebook: "yuri.march.7",
	instagram: "yuri.march",
	linkedin: "in/yuri-march",
};

function changeSocialMedia() {
	for (let li of socialLinks.children) {
		const social = li.getAttribute("class");
		li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
	}
}

function getGithubProfileInfos() {
	const url = `https://api.github.com/users/${linksSocialMedia.github}`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			userName.textContent = data.name;
			userBio.textContent = data.bio;
			userLink.href = data.html_url;
			userLogin.textContent = data.login;
			profileImage.src = data.avatar_url;
			followers.textContent = data.followers;
		});
}

changeSocialMedia();
getGithubProfileInfos();
