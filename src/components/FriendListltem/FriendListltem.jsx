import { Friend, OnlineStatus } from "./FriendListltem.styled"

export const FriendListItem = ({ isOnline, url, name}) => {
    return (
        <Friend>
        <OnlineStatus $online={isOnline}></OnlineStatus>
        <img src={url} alt="User avatar" width="48" />
        <p>{name}</p>
      </Friend>
    )
}