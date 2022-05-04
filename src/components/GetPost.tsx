// import axios from "axios";
import { useEffect, useState } from "react";
import TopPost from "./TopPost";
import MyPost from "./MyPost";
import dummy from "../db.json";

function GetPost() {
    // const url = "";    
    
    interface TopPostInfo {
        post_Id: number;
        title: string;
        content: string;
    }
    
    const [topPost, setTopPost] = useState<TopPostInfo[]>([]);

    useEffect(() => {
        const top = dummy.topPost;
        setTopPost(top);
    }, []);

    // console.log(topPost);


    // useEffect(() => {
    //     axios.get(url)
    //     .then(function (response) {
    //         const dataSet = response.data;
    //         setHotPost(dataSet);
    //         setMyPost(dataSet);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }, []);

    return(
        <>
            <TopPost topPost={topPost}/>
            {/* <MyPost myPost={myPost}/> */}
        </>
    );
}

export default GetPost;