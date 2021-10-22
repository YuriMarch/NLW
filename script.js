const linksSocialMedia = {
	github: "YuriMarch",
	youtube: "",
	facebook: "yuri.march.7",
	instagram: "yuri.march",
	twitter: "",
};

function changeSocialMedia() {
	for (let li of socialLinks.children) {
		const social = li.getAttribute("class");
		li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
	}
}

changeSocialMedia();
