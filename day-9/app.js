"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector(".searchForm");
    const light_bulb = document.querySelector(".light_bulb");
    const light = document.querySelector(".light");

    let toggle = false;
    light.addEventListener("click", () => {
        if (toggle) {
            document.body.style.backgroundColor = "rgb(7, 30, 58)";
            light_bulb.textContent = "Dark";
            console.log("blue");
        } else {
            document.body.style.backgroundColor = "white";
            light_bulb.textContent = "Light";
            console.log("white");
        }
        toggle = !toggle;
    });

    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const searchInput = document.getElementById("searchInput").value.trim();
        const image = document.querySelector(".image");
        const name = document.querySelector(".name");
        const username = document.querySelector(".username");
        const bio = document.querySelector(".bio");
        const date = document.querySelector(".date");
        const numRepos = document.querySelector(".numRepos");
        const numFollower = document.querySelector(".numFollower");
        const numFollowing = document.querySelector(".numFollowing");
        const location = document.querySelector(".location");
        const twitter = document.querySelector(".twitter");
        const githubLink = document.querySelector(".github-link");
        const hubAddress = document.querySelector(".hubAddress");

        console.log(searchInput);

        fetch(`https://api.github.com/users/${searchInput}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                image.src = data.avatar_url;
                name.textContent = data.name ? data.name : "No Name";
                username.textContent = "@" + data.login;
                date.textContent = "Joined " + formatDate(data.created_at);
                bio.textContent = data.bio ?? "No bio";
                numRepos.textContent = data.public_repos;
                numFollower.textContent = data.followers;
                numFollowing.textContent = data.following;
                location.textContent = data.location ?? "No location";
                twitter.textContent = data.twitter_username ?? "No Twitter account";
                githubLink.textContent = data.html_url;
                githubLink.href = data.html_url;
                githubLink.target = "_blank";
                hubAddress.textContent = data.company ?? "No company";
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    });

    function formatDate(dateString) {
        const date = new Date(dateString);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = date.getUTCDate();
        const month = monthNames[date.getUTCMonth()];
        const year = date.getUTCFullYear();
        return `${day} ${month} ${year}`;
    }
});
