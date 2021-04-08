import React, { useState } from 'react';
import './Page2.css';
import Select from 'react-select';


function Page2() {
    const [color, setcolor] = useState("white");
    var [count, setcount] = useState(0);
    const [font, setfont] = useState(20);
    const [fontstyle,setfontstyle] = useState("");
    const [colorx,setcolorx]=useState("");
    const [bullet,setbullet]=useState("none");
    const [comm,setcomma] = useState("none");
    const [pagestyle,setpagestyle] = useState("left"); //removed this part of the UI as of now


   const chngcolor = (e)=>{
       setcolorx(e.label)
   }

    



    //This function will change the color of the writing pad from grey to blue/white
    const ccolor = (e) => {
        if (count % 2 === 0) {
            setcolor("grey");
        }
        else {
            setcolor("white");
        }
        setcount(count++);
    }

    //setting quotes component
    
    const comma = (e) => {
        if (count % 2 === 0) {
            setcomma("none");
        }
        else {
            setcomma("block");
        }
        setcount(count++);
    }

    //fontsizes
    var fontsizes=[

        {
            value:1,
            label:24
        },
        {
            value:2,
            label:26
        },
        {
            value:3,
            label:28
        },
        {
            value:4,
            label:30
        },
        {
            value:5,
            label:34
        },
    ];

    var fontstylez=[//to make this work,plz install npm i react-font
        {
            value:1,
            label:"Times New Roman"  
        },
        {
            value:1,
            label:"Monaco"  
        },
        {
            value:1,
            label:"Copperplate"  
        }
    ]

    var colx=[

        {
            value:1,
            label:"gold",
        },
        {
            value:1,
            label:"skyblue",
        },
        {
            value:1,
            label:"yellowgreen",
        },
    
    ]
    //pagestyles 

    var pgstyle=[

        {
            value:1,
            label:"right",
        },
        {
            value:1,
            label:"left",
        },
        {
            value:1,
            label:"right",
        },
    
    ]
const setfontz = (e)=>{
        setfont(e.label)
}
const fontes =(e)=>{
    setfontstyle(e.label)
}
//setting page styles
const pagestylez = (e) => {
    if (count % 2 === 0) {
        setpagestyle("right");
    }
    else {
        setpagestyle("left");
    }
    setcount(count++);
}



//---------
const bullets = (e) => {
    if (count % 2 === 0) {
        setbullet("disc");
    }
    else {
        setbullet("none");
    }
    setcount(count++);
}

    return (
        <>

            <div id="project">
                <div id="Page2">
                    <div id="icon"><img src="icon.svg" alt="icon" id="imgicon" /></div>
                    <div id="rest">

                        <div id="left">
                            <div id="one">
                                <Select options={colx} onChange={chngcolor}></Select>
                                </div>

                            <div id="two">
                                <Select options={fontstylez} onChange={fontes} ></Select>
                            </div>

                            <div id="three"><select id="medium"><option>Medium</option></select></div>
                            <div id="four" id="size">
                                
                                <Select options={fontsizes} onChange={setfontz}></Select>
                            
                            </div>
                            <div id="five">
                                <img src="color.svg" alt="color" id="color" onClick={ccolor} />



                            </div>


                            <div id="six"> <img src="pen.svg" alt="pen" id="pen" /></div>
                            <div id="seven"><img src="quote.svg" alt="quote" 
                            onClick={comma}
                            id="quote"></img></div>


                            <div id="eight">
                            <img src="Icon-align-left.svg" alt="lefty" id="lefty"
                            onClick={pagestylez}
                            ></img>
                            
                            </div>
                            <div id="nine"><img src="Icon-bullets.svg" alt="bullets" id="bullets" 
                            
                            onClick={bullets} /></div>




                        </div>
                        <div id="right">
                            <p id="save"><span id="saved">SAVE</span></p>
                            <p id="sendforproof"><select id="option"><option >SEND FOR PROOF</option></select></p>
                            <p id="publish"><span id="publix">PUBLISH</span></p>
                        </div>
                    </div>
                </div>

                <div id="maintext" style={{ backgroundColor: color }}>
                    <p id="lorem" style={{fontSize:font}}>
                        <p id="fontstyl" style={{fontStyle:fontstyle}}>
                            <p id="styletext" style={{backgroundColor:colorx}}>
                             <p id="invertedcomma" ><h1 id="comma" style={{display:comm}}>"
                        <h3 id="quot">Travel is not how you find yourself,its how you escape yourself</h3>"</h1></p>
                            <p id="alignmentz" style={{textAlign:pagestyle}} >
                        <li style={{listStyle:bullet}}>okay</li>
                        <li style={{listStyle:bullet}}>Ipsum dolore fugiat esse eu laborum.</li>
                        <li style={{listStyle:bullet}}>Fugiat est fugiat id proident.</li>
                        <li style={{listStyle:bullet}}>Consequat consectetur occaecat irure incididunt ad.</li>
                        <li style={{listStyle:bullet}}>Lorem cupidatat nostrud sint non eiusmod sunt laboris</li>
                         <li style={{listStyle:bullet}}>qui magna id est consequat id.</li>
                </p>
                </p>
                </p>
                </p>
                </div>

            </div>
        </>
    )
}

export default Page2
