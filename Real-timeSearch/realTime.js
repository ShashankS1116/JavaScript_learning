let users = [
    {
        name: "Adi",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrnoeCDSTNv_vdY7dQ3yRL9g0bGCq9ZsTFWUiki63hrQ&s",
        bio: "failures are the stepping stones to success",
    },
    {
        name: "Rahul",
        pic: "https://i.pravatar.cc/300?img=12",
        bio: "Believe in yourself and keep moving forward",
    },
    {
        name: "Aman",
        pic: "https://i.pravatar.cc/300?img=13",
        bio: "Dream big, work hard, stay humble",
    },
    {
        name: "Riya",
        pic: "https://i.pravatar.cc/300?img=14",
        bio: "Every day is a new opportunity to grow",
    },
    {
        name: "Arjun",
        pic: "https://i.pravatar.cc/300?img=15",
        bio: "Success comes to those who never give up",
    },
    {
        name: "Sneha",
        pic: "https://i.pravatar.cc/300?img=16",
        bio: "Be stronger than your excuses",
    },
    {
        name: "Karan",
        pic: "https://i.pravatar.cc/300?img=17",
        bio: "Small progress is still progress",
    },
    {
        name: "Neha",
        pic: "https://i.pravatar.cc/300?img=18",
        bio: "Make your future self proud",
    },
    {
        name: "Vikash",
        pic: "https://i.pravatar.cc/300?img=19",
        bio: "Consistency beats motivation every time",
    },
];
function showUsers(arr) {
    arr.forEach(function (user) {

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = user.pic;
        img.className = "bg-img";

        const blurredLayer = document.createElement("div");
        blurredLayer.className = "blurred-layer";

        const content = document.createElement("div");
        content.className = "content";

        const heading = document.createElement("h3");
        heading.textContent = user.name;

        const paragraph = document.createElement("p");
        paragraph.textContent = user.bio;

        content.appendChild(heading);
        content.appendChild(paragraph);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        document.querySelector(".cards").appendChild(card);
    });
}

showUsers(users);


let inp = document.querySelector(".inp");

inp.addEventListener("input", function () {

    let newUsers = users.filter(function (user) {
        return user.name
            .toLowerCase()
            .startsWith(inp.value.toLowerCase());
    });

    document.querySelector(".cards").innerHTML = "";

    showUsers(newUsers);
});