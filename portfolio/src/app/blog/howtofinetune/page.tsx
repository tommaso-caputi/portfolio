"use client";

import Bar from "@/components/Bar";
import pageLoader from "@/components/pageLoader";
import Post from './post.mdx';

export default function Post1() {
    const sections = 2;
    const visibleSections = pageLoader(sections, 400);

    return (
        <div className="flex justify-center min-h-screen py-7">
            <div className="space-y-10 pt-8 text-left px-3 sm:w-8/12 md:w-8/12 lg:w-8/12 mb-36">
                <div className={`transition-opacity duration-[1000ms] ${visibleSections[0] ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex">
                        <div className="space-y-4 w-11/12">
                            <p style={{ fontSize: '17px' }} className='font-medium'>How to Fine-Tune GPT-2</p>
                        </div>
                    </div>
                    <p className="text-xs text-slate-300 pb-2" style={{ color: '#00000060' }}>December 15, 2024</p>
                </div>
                <div className={`transition-opacity duration-[1000ms] ${visibleSections[1] ? 'opacity-100' : 'opacity-0'}`}>
                    <Post />
                </div>
                <footer>
                    <div className="flex flex-row space-x-4">
                        <a href="https://colab.research.google.com/drive/1w_PVZbOQ43zBAmoYjW6OuEgqMJQScnub?usp=sharing" className="flex flex-row">
                            <p className="underline underline-offset-4 font-medium ">Colab</p>&#8599;
                        </a>
                        <a href="https://medium.com/@tommasocaputi85/how-to-fine-tune-gpt-2-74e00dced6b1" className="flex flex-row">
                            <p className="underline underline-offset-4 font-medium ">Medium</p>&#8599;
                        </a>
                    </div>
                </footer>
            </div>
            <Bar />
        </div>
    );
}