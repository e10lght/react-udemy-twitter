import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import "./post.css"

export const Post = (props) => {
    const { displayName, username, verified, text, avatar, image } = props
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_header_text">
                        <h3>{displayName}</h3>
                    </div>
                    <span className="post_headerSpecial">
                        {verified && <VerifiedUser className="post_badge" />}
                        {username}
                    </span>
                </div>
                <div className="post_headerDescription">
                    <p>{text}</p>
                </div>
                <img src={image}></img>
                <div className="post_footer">
                    <ChatBubbleOutline fontSize="small" />
                    <Repeat fontSize="small" />
                    <FavoriteBorder fontSize="small" />
                    <PublishOutlined fontSize="small" />
                </div>
            </div>
        </div>
    )
}
