import profilePic from "./assets/image.png";

function Card() {
  return (
    <>
      <div className="card">
        <img className="card-image" src={profilePic} alt="profile picture" />
        <h2 className="card-title">YouTube</h2>
        <p className="card-text"> I make youtube Videos and play video games</p>
      </div>
    </>
  );
}

export default Card;
