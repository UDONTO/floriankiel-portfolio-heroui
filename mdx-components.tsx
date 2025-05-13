import type { MDXComponents } from "mdx/types";
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: (props) => (
      <h1 className={`text-4xl font-bold mb-5`}>{props.children}</h1>
    ),
    h2: (props) => (
      <h2 className={`text-3xl font-bold mb-5`}>{props.children}</h2>
    ),
    h3: (props) => (
      <h3 className={`text-2xl font-bold mb-4`}>{props.children}</h3>
    ),
    h4: (props) => (
      <h4 className={`text-xl font-bold mb-4`}>{props.children}</h4>
    ),
    h5: (props) => (
      <h5 className={`text-lg font-bold mb-3`}>{props.children}</h5>
    ),
    p: (props) => (
      <p className={`text-base leading-relaxed`}>{props.children}</p>
    ),
  };
}
