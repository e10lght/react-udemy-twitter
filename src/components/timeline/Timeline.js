/* eslint-disable */

// import { Post } from "./Post"
// import "./timeline.css"
// import { TweetBox } from "./TweetBox"
// import { db } from "../../firebase"
// import { collection, doc, getDocs, orderBy, query } from 'firebase/firestore/lite'
// import { useEffect, useState } from "react"
// import { onSnapshot } from "firebase/firestore"

// export const Timeline = () => {
//     const [posts, setPosts] = useState([])

//     // Get a list of cities from your database
//     async function getCities(db) {
//         const citiesCol = collection(db, 'post')
//         const q = query(citiesCol, orderBy("timestamp", "desc"))
//         // const cityList = onSnapshot(q, (querySnapshot) => {
//         //     setPosts(querySnapshot.docs.map((doc) => doc.data()))
//         // })

//         // const unsub = onSnapshot(doc(db, "post"), (doc) => {
//         //     console.log("Current data: ", doc.data());
//         // });

//         const citySnapshot = await getDocs(q)
//         const cityList = citySnapshot.docs.map(doc => doc.data())
//         // return unsub;

//         return cityList
//     }
//     // console.log(posts)

//     useEffect(() => {
//         getCities(db)
//             .then((res) => setPosts(res))
//         console.log(getCities(db))

//         // const postData = collection(db, "posts")

//         // const q = query(citiesCol, orderBy("timestamp", "desc"))
//         // onSnapshot(q, (querySnapshot) => {
//         //     setPosts(querySnapshot.docs.map((doc) => doc.data()))
//         // })
//     }, [])

//     return (
//         <div className="timeline">
//             <div className="timeline_header">
//                 <h2>ホーム</h2>
//             </div>
//             <TweetBox />
//             {posts.map((post, index) => (
//                 <Post
//                     key={index}
//                     displayName={post.displayName}
//                     username={post.susername}
//                     verified={post.verified}
//                     text={post.text}
//                     avatar={post.avatar}
//                     image={post.image}
//                 />
//             ))}
//         </div>
//     )
// }

import React, { useState, useEffect } from "react";
import { Post } from "./Post";
import "./timeline.css";
import { TweetBox } from "./TweetBox";
import { db } from "../../firebase"
import {
    collection,
    getDocs,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";
// import FlipMove from "react-flip-move";

export const Timeline = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts)

    useEffect(() => {
        const postData = collection(db, "post");
        const q = query(postData, orderBy("timestamp", "desc"));
        // getDocs(q).then((querySnapshot) => {
        //   setPosts(querySnapshot.docs.map((doc) => doc.data()));
        // });

        /* リアルタイムでデータを取得 */
        onSnapshot(q, (querySnapshot) => {
            setPosts(querySnapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    return (
        <div className="timeline">
            {/* Header */}
            <div className="timeline--header">
                <h2>ホーム</h2>
            </div>
            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
                {posts.map((post) => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}
        </div>
    );
}