"use client";

import Bar from "@/components/Bar";
import pageLoader from "@/components/pageLoader";

export default function Blog() {
    const posts = [
        {
            title: "Hopfield Network Python implementation",
            date: '18-10-2024',
            url: "/blog/hopfieldnetwork"
            //url: "/post-assets/post1/hopfieldnetwork.html"
        }
    ];

    const visibleSections = pageLoader(posts.length, 400);

    return (
        <div className="flex justify-center min-h-screen py-7">
            <div className="space-y-6 pt-8 text-left px-3 sm:w-8/12 md:w-8/12 lg:w-6/12 mb-36">
                <div className={`font-medium pb-20 text-2xl transition-opacity duration-[1000ms] ${visibleSections[0] ? 'opacity-100' : 'opacity-0'}`}>
                    blog
                </div>
                {posts.map((proj, index) => (
                    <div
                        key={index}
                        className={`transition-opacity duration-[1000ms] ${visibleSections[index + 1] ? 'opacity-100' : 'opacity-0'}`}>
                        <Post
                            title={proj.title}
                            date={proj.date}
                            url={proj.url}
                        />
                    </div>
                ))}
            </div>
            <Bar />
        </div>
    );
}

function Post({ title, date, url }: any) {
    return (
        <div>
            <a href={url}>
                <div className="flex">
                    <div className="w-11/12">
                        <p style={{ fontSize: '17px' }} className='font-medium'>{title}</p>
                    </div>
                </div>
                <p className="text-xs text-slate-300 pb-2" style={{ color: '#00000060' }}>{date}</p>
            </a>
        </div>
    );
}