import React from 'react'
import Link from "next/link";

const Blog = () => {
  return (
    <section className="bg-white dark:bg-stone-800">
        <div className="max-w-4xl mx-auto h-48 bg-white dark:bg-stone-800">
            <h1 className="text-4xl dark:text-stone-200 md:text-5xl font-bold pt-10 pb-5 text-left">
                Hangul Basics
            </h1>
            <hr></hr>
            <div className = "text-xl dark:text-stone-400 md:text-2xl pt-5 text-left">
                15/06/2022
            </div> 
        </div>
            <div className="bg-[#F1F1F1] dark:bg-stone-900 grid grid-cols-1 md:grid-cols-1 leading-relaxed gap-8 py-20 pb-40 text-lg">
                <div className="max-w-4xl mx-auto">
                    The Korean alphabet or Hangul consists of 24 basic letters: 14 consonants (ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ) and 10 vowels (ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ), that is:
                    
                </div>

            </div>
            <div className="max-w-4xl pt-5 mx-auto text-center md:text-right space-x-10 text-yellow-900 hover:text-yellow-700 dark:text-orange-500  dark:hover:text-orange-700">
                <Link href={'0'}> &#8592; Previous  </Link>
                {/*<Link href={'1'}> Next &rarr; </Link>*/}
            </div>
        </section>
  )
}

export default Blog
