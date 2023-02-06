export default function FriendList() {
  const friends = [
    {
      name: "friend 1"
    },
    {
      name: "friend 2"
    },
    {
      name: "friend 3"
    }
  ];
  return (
    <div className="friends-list">
      {friends.map((friend) => {
        return (
          <div>
            <img src="" alt="" />
            <p>{friend.name}</p>
            <button>follow</button>
          </div>
        )
      })}
    </div>
  )

}