import axios from "axios";
import { useEffect, useState } from "react";
import TopPost from "./mainpage/PrintTopPost";
// import MyPost from "./mainpage/./PrintMyPost";

// export interface TopPostProps {
//     topPost: {
//         post_Id: number;
//         title: string;
//         content?: string;
//         like: number;
//     }
// }

function GetPostData(): JSX.Element {
    // const url = "";    
    
    // const [topPost, setTopPost] = useState<TopPostProps['topPost']>({post_Id: 0, title: '', content: '', like: 0});

    // useEffect(() => {
    //     axios.get(url)
    //     .then(function (response) {
    //         const dataSet = response.data;
    //         setTopPost(dataSet);
    //         // setMyPost(dataSet);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // }, []);

    return(
        <>
            {/* <TopPost { ...topPost }></TopPost> */}
            {/* <MyPost myPost={myPost}/> */}
        </>
    );
}

export default GetPostData;