import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ChevronLeft } from "lucide-react";
import { getProcessPostBySlug, PROCESS_POSTS } from "@/lib/process-posts";

type ProcessPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROCESS_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProcessPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getProcessPostBySlug(slug);
  if (!post) return { title: "글을 찾을 수 없습니다 | 다움상조" };
  return {
    title: `${post.title} | 장례 정보 | 다움상조`,
    description: post.body[0]?.slice(0, 155) ?? post.title,
  };
}

export default async function ProcessPostPage({ params }: ProcessPostPageProps) {
  const { slug } = await params;
  const post = getProcessPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <main className="pb-20">
        <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <Link
            href="/process"
            className="inline-flex items-center gap-1 text-sm font-medium text-stone-600 transition hover:text-stone-900"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            목록으로
          </Link>
          <p className="mt-8 text-sm text-stone-500">
            {post.mainCategory} | {post.subCategory} | {post.date}
          </p>
          <h1 className="mt-3 text-2xl font-bold leading-snug text-stone-900 sm:text-3xl">
            {post.title}
          </h1>
          <div className="mt-10 space-y-5 text-base leading-relaxed text-stone-700">
            {post.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
