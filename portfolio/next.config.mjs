import createMDX from '@next/mdx'
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Configure `pageExtensions`` to include MDX files
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    // Optionally, add any other Next.js config below
}

const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
        rehypePlugins: [rehypeKatex],
        remarkPlugins: [remarkMath],
    },
})

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)