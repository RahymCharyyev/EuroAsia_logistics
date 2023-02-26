function openbox(id) {
  let all = document.querySelectorAll(
    "#text1, #text2, #text3, #text4, #text5, #text6"
  );
  for (let i = 0; i < all.length; i++) {
    if (all[i].id == id) {
      all[i].style.display =
        all[i].style.display == "block" ? "block" : "block";
      all[i].style.transition = "3s";
    } else {
      all[i].style.display = "none";
    }
  }
}

function openbox2(id) {
  let all = document.querySelectorAll(
    "#title1, #title2, #title3, #title4, #title5, #title6"
  );
  for (let i = 0; i < all.length; i++) {
    if (all[i].id == id) {
      all[i].style.display =
        all[i].style.display == "block" ? "block" : "block";
    } else {
      all[i].style.display = "none";
    }
  }
}

function openbox3(id) {
  let allImages = document.querySelectorAll(
    "#img1, #img2, #img3, #img4, #img5, #img6"
  );
  for (let i = 0; i < allImages.length; i++) {
    if (allImages[i].id === id) {
      allImages[i].style.display =
        allImages[i].style.display === "block" ? "block" : "block";
    } else {
      allImages[i].style.display = "none";
    }
  }
}
