import { FriendListItem } from "components/FriendListltem/FriendListltem";
import { FriendsWrapper } from "./FriendList.styled";


export const FriendList = ({friends})=> {
return (
    <FriendsWrapper>
{friends.map(({avatar, name, isOnline, id}) => (
   <FriendListItem key={id} isOnline={isOnline} url={avatar} name={name}/>
)
)}
</FriendsWrapper>
)
};