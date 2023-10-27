import plane from "./assets/plane.jpg"
import { useWindowSize } from "@uidotdev/usehooks";
import { useState } from "react";
import TextTransition, { presets } from 'react-text-transition';

const Join = () => {
    const [text, setText] = useState();
    const [header, setHeader] = useState("")
    const size = useWindowSize();

    const headers = ["Mechanical: Tail", "Mechanical: Wing"];
    const paragraphs = ["Tail", "Wing"]

    const updateText = (e) => {
        const index = e.target.value;
        setText(paragraphs[index]);
        setHeader(headers[index])
    }

    return (
        <section id="join" className='my-16 md:mx-28 mx-12 mx-auto scroll-m-20'>
            <h1 className='text-center pb-5 mb-10 border-b-2 font-bold text-4xl'>Join Us</h1>
            <div>
                <h2 className='font-medium text-2xl'>Join Western Aero Design Today!</h2>
                <p className='py-4 text-lg'>
                    Western Aero Design is an exciting opportunity to gain practical engineering skills and practices and apply them to real-world problems and is a fantastic opportunity for students in any discipline.
                </p>
                <h2 className='font-medium text-2xl'>What You'll Learn</h2>
                <ul className="list-disc ml-6 py-4 text-xl">
                    <li className="py-1">
                        Problem Solving
                    </li>
                    <li className="py-1">
                        Problem Solving
                    </li>
                    <li className="py-1">
                        Problem Solving
                    </li>
                </ul>
                <h3 className='font-medium text-2xl'>The Subteams</h3>
                <p className='py-4 text-lg'>
                    Every seaons, Western Areo Design builds two planes, a Primary Aircraft and a smaller Powered Autonomous Delivery Aircraft (PADA)

                    Western Aero Design is broken up into two teams: The Mechanical Team and The Controls Team. The Mechanical Team consists of the Ground Transport Vehicle (GTV), Wing, Tail, Landing Gear, Fuselage and the Mechanical PADA Teams.
                    The Controls Team consists of the Embedded System, Ground Station and Controls PADA Teams.
                </p>
                <div className="grid lg:grid-cols-4 grid-cols-1">
                    {/* <div className="w-full relative col-span-3 h-full"  style={{aspectRatio: `${size.width}/${size.height}`}}> */}
                    <div className="col-span-3 h-full relative z-0 flex">
                        <img className="h-full w-full" src={plane} alt={plane} />
                            <div className="absolute h-8 w-8 bg-blue-300 shadow-xl shadow-blue-500/50 rounded-full grid grid-cols-1 hover:scale-125 duration-300" style={{ marginLeft: "20%", marginTop: "35%" }}  > 
                                <button className=" bg-blue-500 shadow-xl shadow-blue-500/50 rounded-full m-auto w-6 h-6" onClick={updateText} value={1}>
                                </button>
                            </div>
                            <div className="absolute h-8 w-8 bg-blue-300 shadow-xl shadow-blue-500/50 rounded-full grid grid-cols-1 hover:scale-125 duration-300" style={{ marginLeft: "45%", marginTop: "15%" }}>
                                <button className=" bg-blue-500 shadow-xl shadow-blue-500/50 rounded-full m-auto w-6 h-6" onClick={updateText} value={0}>
                                </button>
                            </div>
                            <div className="absolute h-8 w-8 bg-blue-300 shadow-xl shadow-blue-500/50 rounded-full grid grid-cols-1 hover:scale-125 duration-300" style={{ marginLeft: "10%", marginTop: "10%" }}>
                                <button className=" bg-blue-500 shadow-xl shadow-blue-500/50 rounded-full m-auto w-6 h-6" onClick={updateText} value={0}>
                                </button>
                            </div>
                        </div>

                    <div className="p-4">
                        <TextTransition springConfig={presets.slow}>
                            <h2 className='font-medium text-4xl border-b-4 pb-2 border-slate-500'>{(header ? header : headers[0])}</h2>
                        </TextTransition>
                        <TextTransition springConfig={presets.slow}>
                            <p className="py-4 text-xl">{text ? text : paragraphs[0]}</p>

                        </TextTransition>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Join;