"use client"

import Post from './post.mdx';

import Bar from "@/components/Bar";
import pageLoader from "@/components/pageLoader";

export default function Post2() {
    const sections = 2;
    const visibleSections = pageLoader(sections, 400);
    return (
        <div className="flex justify-center min-h-screen py-7">
            <div className="space-y-10 pt-8 text-left px-3 sm:w-8/12 md:w-8/12 lg:w-8/12 mb-36">
                <div className={`transition-opacity duration-[1000ms] ${visibleSections[0] ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex">
                        <div className="space-y-4 w-11/12">
                            <p style={{ fontSize: '17px' }} className='font-medium'>Hopfield Network Python implementation</p>
                        </div>
                    </div>
                    <p className="text-xs text-slate-300 pb-2" style={{ color: '#00000060' }}>August 18, 2024</p>
                </div>
                <div className={`transition-opacity duration-[1000ms] ${visibleSections[1] ? 'opacity-100' : 'opacity-0'}`}>
                    <Post />
                </div>
            </div>
            <Bar />
        </div>
    );
}
