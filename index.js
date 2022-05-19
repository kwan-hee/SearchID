const userArray = [
  {
    id: "todayis_wendy",
    nickname: "Wendy",
    picture:
      "https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg",
  },
  {
    id: "wecode_bootcamp",
    nickname: "wecode | 위코드",
    picture:
      "https://images.velog.io/images/brighten_the_way/profile/c7f0e4b8-1501-4911-b84e-257c2ee1e1ab/social.jpeg",
  },
  {
    id: "thisisyourhyung",
    nickname: "JIHYUNG LEE",
    picture:
      "https://celebtide.s3.ap-northeast-1.amazonaws.com/celeb/new/sq/1710_sq_1650530686.jpg",
  },
];

const searchInput = document.querySelector("input#seaArch");
const Button = document.querySelector("button#bt");
const searchList = document.createElement("ul");

function matchSearch(value) {
  const searchID = searchInput.value;
  console.log(searchID);
  return value.indexOf(searchID) != -1;
}

function showFilteredID(id) {
  console.log(id);
  const filteredUser = document.createElement("li");

  filteredUser.innerHTML =
    // `id: ${id.id} nickname: ${id.nickname} picture:${id.picture}`
    ` <img class="img-profile" src=${id.picture} alt="${id.id}님의 프로필 사진">
<div class="profile-text">
<span class="userID point-span" style="color:red;">ID: ${id.id}</span>
<span class="sub-span" style="color:blue">Nickname: ${id.nickname}</span>  
</div>`;
  // searchList.appendChild(filteredUser);
  const cl = document.querySelector("#comments").appendChild(filteredUser);
}
searchInput.addEventListener("keyup", function () {
  searchList.innerHTML = "";
  // resultBox.style.display = "none";
  if (searchInput.value) {
    const filteredID = userArray.filter((x) => matchSearch(x.id));
    console.log(filteredID);
    if (filteredID) {
      filteredID.forEach(function (element) {
        // console.log(element);
        showFilteredID(element);
        // console.log(showFilteredID(e))
      });
    }
  }
});

// Button.addEventListener("click", function (e) {
//   const result = userArray.filter(id => id===com);
//   const array = userArray.map()

// })
s;
