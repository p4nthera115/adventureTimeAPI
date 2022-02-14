function showAnim() {
  const anim = document.createElement("img");
  anim.src = "/landingAnimation.svg";
  anim.alt = "landing animation";
  anim.className = "landing-animation";
  document.body.append(img);

  setTimeout(() => {
    anim.remove("removed animation");
  }, 1000);
}

export default showAnim;