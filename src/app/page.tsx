"use client";
import { useRouter } from "next/navigation";
import Footer from "./components/footer";
import Header from "./components/header";

type Article = {
  title: string;
  imageUrl?: string;
  path: string;
};

const ARTICLES: Article[] = [
  {
    title: "Electric Cars: The Future of Automotive Technology",
    path: "/blogs/electric-cars-automotive-future",
  },
  {
    title:
      "The Future of Space Exploration: Engineering Challenges and Opportunities",
    path: "/blogs/future-of-space-exploration",
  },
  {
    title: "The Future of Wearable Technology: Where Are We Headed?",
    path: "/blogs/future-of-wearable-tech",
  },
  {
    title: "The Rise of 5G Technology: What You Need to Know",
    path: "/blogs/rise-of-5g-tech",
  },
  {
    title: "The Role of Artificial Intelligence in Engineering",
    path: "/blogs/role-of-ai-in-enginering",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="w-full flex justify-center py-2 bg-slate-950 text-white dark:bg-slate-300 dark:text-black">
        Note: This is currently only a demo project and not a real blog. All
        content is AI generated.
      </div>
      <div className="grow w-full flex flex-col items-center py-10 gap-y-5 dark:bg-zinc-950">
        {ARTICLES.map((article: Article, idx: number) => (
          <div
            key={idx}
            className="text-black dark:text-white cursor-pointer px-10 py-8 border shadow-md border-slate-800 rounded-md w-4/5 transition-colors duration-200 ease-out hover:bg-slate-100 hover:dark:bg-slate-800"
            onClick={() => {
              router.push(article.path);
            }}
          >
            {article.title}
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
