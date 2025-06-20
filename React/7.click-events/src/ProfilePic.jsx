function ProfilePic() {
  const url = "./src/assets/image.png";

  const handleClick = (e) => (e.target.style.display = "none");

  return (
    <>
      <img onClick={(e) => handleClick(e)} src={url} alt="Profile pic" />
    </>
  );
}

export default ProfilePic;
