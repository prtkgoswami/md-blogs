import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  extensions: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx", "md"],
};

export default withMDX(nextConfig);
