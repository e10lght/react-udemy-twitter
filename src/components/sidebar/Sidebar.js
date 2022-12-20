import TwitterIcon from '@mui/icons-material/Twitter'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { SidebarOption } from './SidebarOption'
import { Button } from '@mui/material'
import "./sidebar.css"

export const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                {/* ツイッターアイコン */}
                <TwitterIcon className='sidebar_twitter_icon' />

                {/* サイドバーオプション */}
                <SidebarOption text="ホーム" Icon={HomeIcon} />
                <SidebarOption text="話題の検索" Icon={SearchIcon} />
                <SidebarOption text="通知" Icon={NotificationsIcon} />
                <SidebarOption text="メッセージ" Icon={MailOutlineIcon} />
                <SidebarOption text="ブックマーク" Icon={BookmarkIcon} />
                <SidebarOption text="リスト" Icon={ListAltIcon} />
                <SidebarOption text="プロフィール" Icon={PersonOutlineIcon} />
                <SidebarOption text="もっとみる" Icon={MoreHorizIcon} />

                {/* ツイートボタン */}
                <Button variant="outlined" className='sidebar_tweet' fullWidth>
                    ツイートする
                </Button>
            </div>
        </>
    )
}
