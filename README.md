# OKX Referral Landing Page

A responsive web page for promoting OKX referral code with a 20% trading fee discount.

## Features

- Clean, modern UI with OKX brand colors
- Responsive design for all device sizes
- Multi-language support (English, Chinese, Vietnamese, Thai, German, Korean, and Japanese)
- Enhanced mobile optimization:
  - Touch-friendly interface
  - Landscape/portrait orientation support
  - Optimized for various screen sizes
  - Improved performance on mobile devices
- SEO Optimization:
  - Comprehensive meta tags
  - Structured data (Schema.org)
  - XML sitemap
  - Proper hreflang tags for multilingual support
  - Canonical URLs
- Interactive elements including:
  - Copy-to-clipboard referral code button
  - Accordion FAQs
  - Scroll animations
  - Sticky footer with CTA
- Comprehensive information about OKX benefits
- Step-by-step registration guide
- Fee comparison table
- Embedded YouTube tutorial video with lazy loading
- Latest tutorials section with icon-based layout

## How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Customize content as needed:
   - The referral code can be updated in `script.js`
   - Colors can be modified in the CSS variables in `style.css`
   - All content can be edited in the respective HTML files

## Files Overview

- `index.html` - Main structure of the landing page (English)
- `zh.html` - Chinese version of the landing page
- `vi.html` - Vietnamese version of the landing page
- `th.html` - Thai version of the landing page
- `de.html` - German version of the landing page
- `ko.html` - Korean version of the landing page
- `ja.html` - Japanese version of the landing page
- `style.css` - All styling with responsive design
- `script.js` - Interactive functionality for English version
- `zh-script.js` - Interactive functionality for Chinese version
- `sitemap.xml` - XML sitemap for search engines
- `robots.txt` - Instructions for search engine crawlers

## SEO Optimization

This landing page includes comprehensive SEO features:

1. **Meta Tags**: Proper title, description, and keywords optimized for search engines
2. **Structured Data**: Schema.org markup for improved SERP features including FAQ rich snippets
3. **Language Support**: Proper hreflang tags for multi-language content (English, Chinese, Vietnamese, Thai, German, Korean, Japanese)
4. **Sitemap**: XML sitemap with priority and change frequency indicators
5. **Semantic HTML**: Properly structured HTML with appropriate heading hierarchy
6. **Mobile Friendly**: Fully responsive design that passes mobile-friendly tests
7. **Performance**: Optimized loading with lazy-loaded video content

## Customization

To change the referral code:

1. Open `script.js`
2. Update the `REFERRAL_CODE` constant at the top
3. All links and copy buttons will automatically use the new code

To change the YouTube video:

1. Open `index.html` (and other language versions)
2. Locate the YouTube iframe in the "YouTube Video Section"
3. Replace the `src` URL with your desired YouTube video embed link

## Mobile Optimization

This landing page is fully optimized for mobile devices:

- Properly sized touch targets for better user experience
- Adaptive layout changes for different screen sizes
- Special handling for landscape orientation on small screens
- Improved animations and transitions on mobile
- Prevention of unwanted zoom on double-tap
- Device-specific layout adjustments

## Browser Support

This landing page is compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Future Improvements

- Add more language options
- Implement Google Analytics for tracking
- Add dark/light mode toggle

## License

This project is available for personal and commercial use. 