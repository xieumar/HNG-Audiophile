"use client";
import ProductDetail from '@/components/ProductDetail';

export default function ProductDetailClient({ slug }: { slug: string }) {
  return <ProductDetail slug={slug} category="earphones" />;
}
