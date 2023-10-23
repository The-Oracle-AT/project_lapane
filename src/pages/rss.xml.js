import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection("posts")
  return rss({
    title: 'Project Lapane | Blog',
    description: 'My journey learning JS and getting a job as a developer',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/posts/${post.slug}/`
    })),
    customData: `<language>en-us</language>`,
  });
}