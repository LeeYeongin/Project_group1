import { cardMediaClasses } from "@mui/material";
import { key } from "localforage";
import React from "react";

const CarouselMap = [

    {id:1 , title:'프론트엔드'},
    {id:2 , title:'백엔드'},
    {id:3 , title:'데이터베이스'},
    {id:4 , title:'풀스텍'}

]

const STUDY = CarouselMap.map((cm) => {
    return(
        <div key={cm.id}>
            <h3>{cm.title}</h3>
            <p style={{ fontSize: "13px" }}></p>
        </div>
    )
})
// 
const ClassTitle =[

    {id:1, title : '프론트엔드 강의'},
    {id:2, title : '백엔드 강의'},
    {id:3, title : '데이터베이스 강의'},
    {id:4, title : '풀스텍 강의'},
]

const CLASSTITLE = ClassTitle.map((ct) => {
    return(
        <div key={ct.id}>
            <div className="course_title4">{ct.title}</div>
        </div>
    )

})