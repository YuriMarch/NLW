const linksSocialMedia = {
	github: "YuriMarch",
	youtube: "maykbrito",
	facebook: "yuri.march.7",
	instagram: "yuri.march",
	twitter: "maykbrito",
};

function changeSocialMedia() {
	for (let li of socialLinks.children) {
		const social = li.getAttribute("class");
		li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
	}
}

changeSocialMedia();
