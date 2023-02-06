import ProfileImg from "../images/logo192.png"

export default function UserInfo() {
  return (
    <div className="user-info">
      <div className="profile-main">
        <div className="pmain-top">
          <img src={ProfileImg} alt="" />
          <h3>Name</h3>
        </div>
        <div className="pmain-bottom">
          <p>Tweets</p>
          <p>Following</p>
          <p>Followers</p>
        </div>
      </div>
    </div>
  )
}