import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Project Lapane | Blog',
    description: 'My journey learning JS and getting a job as a developer',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./posts/*.md')),
    customData: `<language>en-us</language>`,
  });
}