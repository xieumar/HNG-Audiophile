import ProductDetailClient from './ProductDetailClient';
import { notFound } from 'next/navigation';

export default function EarphoneDetailPage({ params }: { params: { slug: string } }) {
  if (!params.slug) {
    notFound();
  }
  return <ProductDetailClient slug={params.slug} />;
}