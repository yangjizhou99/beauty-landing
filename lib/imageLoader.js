export default function imageLoader({ src, width, quality }) {
  // 在生产环境中，确保图片路径包含 basePath
  const basePath = process.env.NODE_ENV === 'production' ? '/beauty-landing' : '';
  
  // 确保 src 以 / 开头
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  
  return `${basePath}${normalizedSrc}`;
}