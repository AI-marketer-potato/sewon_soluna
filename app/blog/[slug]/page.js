import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { getAllPostSlugs, getPostBySlug } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import ShareButton from '@/components/ShareButton'

export async function generateStaticParams() {
  const paths = getAllPostSlugs()
  return paths.map((path) => ({
    slug: path.params.slug,
  }))
}

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: '페이지를 찾을 수 없습니다 - 솔루나',
    }
  }

  return {
    title: `${post.title} - 솔루나 블로그`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

// MDX 컴포넌트 매핑
const components = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="ml-4">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary pl-4 py-2 mb-4 bg-blue-50 italic text-gray-700">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mb-4 overflow-x-auto">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border-collapse border border-gray-300">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-gray-300 px-4 py-2 bg-gray-50 font-semibold text-left">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-gray-300 px-4 py-2">{children}</td>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-primary hover:text-primary/80 underline"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic">{children}</em>
  ),
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 뒤로가기 버튼 */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              블로그로 돌아가기
            </Link>
          </Button>
        </div>

        {/* 포스트 헤더 */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('ko-KR')}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                  {post.category}
                </span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              {post.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* 공유 버튼 */}
            <div className="flex items-center gap-4 pt-4 border-t">
              <span className="text-sm text-gray-500">공유하기:</span>
              <ShareButton title={post.title} description={post.description} />
            </div>
          </CardContent>
        </Card>

        {/* 포스트 내용 */}
        <Card>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <MDXRemote source={post.content} components={components} />
            </div>
          </CardContent>
        </Card>

        {/* 관련 글 추천 */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">더 많은 글 읽어보기</h3>
              <p className="text-gray-600 mb-6">
                솔루나의 다양한 기술 이야기와 제품 소식을 확인해보세요.
              </p>
              <Button asChild>
                <Link href="/blog">
                  블로그 홈으로
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* 뉴스레터 구독 */}
        <div className="mt-8">
          <Card>
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">솔루나 뉴스레터</h3>
              <p className="text-gray-600 mb-6">
                새로운 글이 발행되면 가장 먼저 알려드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button>구독하기</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
