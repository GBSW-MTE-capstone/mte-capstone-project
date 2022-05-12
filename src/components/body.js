import React from "react";
import News from "../page/news";
import "./style/body.css"
const Body = () => {
    return(
        <div>
            {/* 상단 페이지 */}
            <div className="top-page">
                <div className='news-frame'>
                    <News/>
                </div>
                <div className="board-frame">
                    개시판 미니임
                    <div className="space"/>
                </div>
            </div>

            {/* 하단 페이지 */}

        </div>
    )
}
export default Body;