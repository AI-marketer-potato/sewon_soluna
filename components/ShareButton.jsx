'use client'

import { Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ShareButton({ title, description }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('링크가 클립보드에 복사되었습니다!')
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleShare}
    >
      <Share2 className="h-4 w-4 mr-2" />
      공유
    </Button>
  )
}
