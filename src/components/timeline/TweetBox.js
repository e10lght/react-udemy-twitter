// import { addDoc, collection } from "firebase/firestore"
// import { addDoc, collection } from "firebase/firestore"
import { useState } from "react"
import { Avatar, Button } from "@mui/material"
import "./TweetBox.css"
import { db } from "../../firebase"
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore/lite'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export const TweetBox = () => {
    const [tweet, setTweet] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const onChangeTweet = (e) => {
        setTweet(e.target.value)
    }
    const onChangeImageUrl = (e) => {
        setImageUrl(e.target.value)
    }
    const onSubmitTweet = (e) => {
        e.preventDefault()
        addDoc(collection(db, 'post'), {
            displayName: "プログラミングチュートリアル",
            username: "ito-kira",
            verified: true,
            text: tweet,
            avatar: "https://pbs.twimg.com/profile_images/1507035721864863757/WozaDaWB_400x400.jpg",
            image: imageUrl,
            timestamp: serverTimestamp()
        })
        setTweet('')
        setImageUrl('')
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar />
                    <input
                        type="text"
                        placeholder="いまどうしてる？"
                        onChange={onChangeTweet}
                        value={tweet}
                    />
                </div>
                <input
                    className="tweetBox_imageInput"
                    placeholder="画像のURLを入力してください"
                    type="text"
                    onChange={onChangeImageUrl}
                    value={imageUrl}
                ></input>

                <Button
                    className="tweetBox_tweetButton"
                    type="submit"
                    onClick={onSubmitTweet}
                >ツイートする</Button>
            </form>
        </div>
    )
}
