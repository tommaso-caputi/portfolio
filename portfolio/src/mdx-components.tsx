import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import 'katex/dist/katex.min.css';
import { CodeBlock, androidstudio, tomorrow } from 'react-code-blocks';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="text-4xl md:text-5xl font-bold pb-10">{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className="subparagraph-title">{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className="subparagraph-title2">{children}</h3>
        ),
        img: (props) => {
            const { width = 100, height = 100, ...rest } = props as ImageProps & { width?: number; height?: number };
            return (
                <Image
                    width={width}
                    height={height}
                    style={{ width: '100%', height: 'auto' }}
                    {...rest}
                />
            );
        },
        p: ({ children }) => <p className="normal-text">{children}</p>,
        ol: ({ children }) => <ol className="numbered-list">{children}</ol>,
        ul: ({ children }) => <ul className="bulleted-list">{children}</ul>,
        li: ({ children }) => <li className="">{children}</li>,
        pre: ({ children, className }) => {
            const language = className?.replace(/language-/, '') || 'python';
            return (
                <div className="code-container md:w-full">
                    <CodeBlock
                        text={(children as React.ReactElement).props?.children}
                        language={language}
                        theme={androidstudio}
                    />
                </div>
            );
        }
    };
}