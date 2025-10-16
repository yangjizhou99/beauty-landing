export default function imageLoader({ src, width, quality }) {
  // 在生产环境中，确保图片路径包含 basePath
  const basePath = process.env.NODE_ENV === 'production' ? '/beauty-landing' : '';
  return `${basePath}${src}`;
}
