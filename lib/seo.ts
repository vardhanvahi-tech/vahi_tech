import { Metadata } from 'next'

export const siteConfig = {
  name: 'Vahitech',
  title: 'Vahitech - Professional Web Development & Digital Solutions',
  description: 'Leading web development agency specializing in custom websites, Shopify stores, mobile apps, WordPress solutions, and digital marketing. Transform your business with our expert development services.',
  url: 'https://vahitech.in',
  ogImage: 'https://vahitech.in/og-image.jpg',
  keywords: [
    'web development',
    'custom websites',
    'Shopify development',
    'mobile app development',
    'WordPress solutions',
    'digital marketing',
    'SEO services',
    'e-commerce development',
    'MERN stack',
    'Laravel development',
    'Python development',
    'UI/UX design',
    'website maintenance',
    'professional web agency'
  ]
}

export function generateSEOMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  noIndex = false
}: {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noIndex?: boolean
}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title
  const metaDescription = description || siteConfig.description
  const metaKeywords = keywords ? [...siteConfig.keywords, ...keywords] : siteConfig.keywords
  const canonicalUrl = canonical ? `${siteConfig.url}${canonical}` : siteConfig.url
  const imageUrl = ogImage || siteConfig.ogImage

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords.join(', '),
    authors: [{ name: 'Vahitech Team' }],
    creator: 'Vahitech',
    publisher: 'Vahitech',
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonicalUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [imageUrl],
      creator: '@vahitech',
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  }
}