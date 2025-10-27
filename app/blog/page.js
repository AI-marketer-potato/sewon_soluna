import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, User, Tag } from 'lucide-react'
import { getAllPosts } from '@/lib/mdx'

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            솔루나 블로그
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PCM 기술, 자동차 안전, 제품 소식 등 솔루나의 다양한 이야기를 만나보세요.
          </p>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
            전체
          </span>
          <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 cursor-pointer">
            기술
          </span>
          <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 cursor-pointer">
            안전
          </span>
          <span className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100 cursor-pointer">
            제품
          </span>
        </div>

        {/* 블로그 포스트 목록 */}
        <div className="space-y-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-2">
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
                  <CardTitle className="text-2xl hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1"
                  >
                    자세히 읽기
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">아직 게시된 글이 없습니다.</p>
              <p className="text-gray-400 text-sm mt-2">곧 흥미로운 콘텐츠를 준비해서 찾아뵙겠습니다!</p>
            </div>
          )}
        </div>

        {/* 구독 섹션 */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardHeader className="text-center">
              <CardTitle>솔루나 뉴스레터 구독</CardTitle>
              <CardDescription>
                최신 기술 소식과 제품 업데이트를 가장 먼저 받아보세요.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                  구독하기
                </button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-2">
                언제든지 구독을 취소할 수 있습니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
