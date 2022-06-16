import React from 'react';
import Link from "next/link";

const Blog = () => {
  return (
    <section className="bg-white dark:bg-stone-800">
        <div className="max-w-4xl mx-auto h-48 bg-white dark:bg-stone-800">
            <h1 className="text-4xl dark:text-stone-200 md:text-5xl font-bold pt-10 pb-5 text-left">
                Reimagine font
            </h1>
            <hr></hr>
            <div className = "text-xl dark:text-stone-400 md:text-2xl pt-5 text-left">
                Working on it since mid-June 2022
            </div> 
        </div>
            <div className="bg-[#F1F1F1] dark:bg-stone-900 grid grid-cols-1 md:grid-cols-1 md:px-5 leading-relaxed gap-8 py-20 pb-40 text-lg">
                <div className="max-w-4xl mx-auto">
                    I had the idea of this project inspired by a font designer friend (<a className = "text-yellow-900 hover:text-yellow-700 dark:text-orange-500" href={'https://www.instagram.com/jacob.j.wise/'}>Jacob</a>, a very talented elf) of mine, attended workshops for Hangul and Arabic font design and created beautiful typeface despite not being an expert in the languages himself. Then I thought maybe if I can build a web page that allows me to construct and manipulate Hangul characters, I can finally (perhaps) start to learn Korean properly.
                </div>
                <div className="max-w-4xl mx-auto ">
                    <h4 className="text-xl font-bold">Current roadmap:</h4>
                    <ul className='pt-5 list-disc leading-normal list-outside'>
                        <li>Take myself through <a className = "text-yellow-900 hover:text-yellow-700 dark:text-orange-500" href={'1'}>Hangul basics</a>;</li>
                        <li>Design the elementary strokes in Illustrtor;</li>
                        <li>Technical Part I:
                            <ul className='list-disc list-inside'>
                                <li>
                                    import the designs as interactive svgs using @react-fiber/three;
                                </li>
                                <li>
                                    test adding multiple svgs in the same scene and their interactions;
                                </li>
                                <li>
                                    test extrusion of the svg file;
                                </li>
                                <li>
                                    add selection box to choose which strokes that you want to add;
                                </li>
                            </ul>
                        </li>
                        <li>Go through some typeface design basics;</li>
                        <li>
                            Technical Part II:
                            <ul className=' list-disc list-inside'>
                                <li>
                                    Add 2D grid (fixed plane) and slidebars to the canvas;
                                </li>
                                <li>
                                    Introduce controlled and scalable movements between elements based on the typeface design principles;
                                </li>
                            </ul>                        
                        </li>
                    </ul> 
                </div>
                <div className="max-w-4xl mx-auto">
                    As it is an ongoing project, I will be updating the progress every now and then, keep on pressing the next button for the latest update!
                </div>
            </div>
            <div className="max-w-4xl pt-5 mx-auto text-center md:text-right space-x-10 text-yellow-900 hover:text-yellow-700 dark:text-orange-500  dark:hover:text-orange-700">
                <Link href={'1'}> Next &rarr; </Link>
            </div>
        </section>
  )
}

export default Blog
