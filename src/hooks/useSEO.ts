import { useEffect } from 'react';
import { siteConfig } from '@/config/site';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
  canonicalPath?: string;
  schema?: Record<string, any>;
}

/**
 * Custom hook to dynamically inject page-level metadata and structured JSON-LD data.
 * Updates DOM head elements on mount/change and performs cleanup on unmount.
 */
export const useSEO = ({
  title,
  description,
  keywords,
  ogType = 'website',
  ogImage,
  canonicalPath = '',
  schema,
}: SEOProps) => {
  useEffect(() => {
    // 1. Title
    const prevTitle = document.title;
    if (title) {
      document.title = title;
    }

    // Helper to get or create element
    const getOrCreateMeta = (selector: string, attrName: string, attrVal: string): HTMLMetaElement => {
      let el = document.querySelector(selector) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      return el;
    };

    // 2. Standard Meta Tags
    const metaDesc = getOrCreateMeta('meta[name="description"]', 'name', 'description');
    const prevDesc = metaDesc.content;
    if (description) {
      metaDesc.content = description;
    }

    const metaKeywords = getOrCreateMeta('meta[name="keywords"]', 'name', 'keywords');
    const prevKeywords = metaKeywords.content;
    if (keywords) {
      metaKeywords.content = keywords;
    }

    const metaAuthor = getOrCreateMeta('meta[name="author"]', 'name', 'author');
    if (siteConfig.author) {
      metaAuthor.content = siteConfig.author;
    }

    // 3. Open Graph Tags
    const ogTitle = getOrCreateMeta('meta[property="og:title"]', 'property', 'og:title');
    if (title) ogTitle.content = title;

    const ogDesc = getOrCreateMeta('meta[property="og:description"]', 'property', 'og:description');
    if (description) ogDesc.content = description;

    const ogTypeMeta = getOrCreateMeta('meta[property="og:type"]', 'property', 'og:type');
    ogTypeMeta.content = ogType;

    const ogSiteName = getOrCreateMeta('meta[property="og:site_name"]', 'property', 'og:site_name');
    ogSiteName.content = siteConfig.siteName;

    const baseUrl = siteConfig.siteUrl || window.location.origin;
    const ogUrl = getOrCreateMeta('meta[property="og:url"]', 'property', 'og:url');
    const currentUrl = `${baseUrl}${canonicalPath}`;
    ogUrl.content = currentUrl;

    const finalOgImage = ogImage || `${baseUrl}/og-image.png`;
    const ogImgMeta = getOrCreateMeta('meta[property="og:image"]', 'property', 'og:image');
    ogImgMeta.content = finalOgImage;

    // 4. Twitter Tags
    const twCard = getOrCreateMeta('meta[name="twitter:card"]', 'name', 'twitter:card');
    twCard.content = 'summary_large_image';

    const twTitle = getOrCreateMeta('meta[name="twitter:title"]', 'name', 'twitter:title');
    if (title) twTitle.content = title;

    const twDesc = getOrCreateMeta('meta[name="twitter:description"]', 'name', 'twitter:description');
    if (description) twDesc.content = description;

    const twImg = getOrCreateMeta('meta[name="twitter:image"]', 'name', 'twitter:image');
    twImg.content = finalOgImage;

    const twCreator = getOrCreateMeta('meta[name="twitter:creator"]', 'name', 'twitter:creator');
    twCreator.content = `@${siteConfig.author.toLowerCase().replace(/\s+/g, '')}`;

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    let createdCanonical = false;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
      createdCanonical = true;
    }
    const prevCanonical = canonicalLink.href;
    canonicalLink.href = currentUrl;

    // 6. JSON-LD Schema Structured Data
    let schemaScript: HTMLScriptElement | null = null;
    if (schema) {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.innerHTML = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }

    // Cleanup
    return () => {
      document.title = prevTitle;
      metaDesc.content = prevDesc;
      metaKeywords.content = prevKeywords;
      if (createdCanonical && canonicalLink && canonicalLink.parentNode) {
        canonicalLink.parentNode.removeChild(canonicalLink);
      } else if (canonicalLink) {
        canonicalLink.href = prevCanonical;
      }
      if (schemaScript && schemaScript.parentNode) {
        schemaScript.parentNode.removeChild(schemaScript);
      }
    };
  }, [title, description, keywords, ogType, ogImage, canonicalPath, schema]);
};
