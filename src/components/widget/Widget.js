import { Search } from "@mui/icons-material"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'
import "./widget.css"

export const Widget = () => {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <Search className="widgets_searchIcon" />
                <input
                    type="text"
                    placeholder="キーワード検索"
                />
            </div>
            <div className="widgets_container">
                <h2>いまどうしてる？</h2>
                {/* ライブラリを追加 */}
                <TwitterTweetEmbed
                    tweetId={'1604001616017121281'}
                />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="yyyy_zz"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={'https://twitter.com/yyyy_zz'}
                    options={{ text: 'hi', via: 'aaaa' }}
                />
            </div>
        </div>
    )
}
