import PostItem from "@/components/post-item";
import { title } from "@/components/primitives";

interface User {
  name: string;
  username: string;
  twitter_username: string | null;
  github_username: string;
  user_id: number;
  website_url: string;
  profile_image: string;
  profile_image_90: string;
}

interface Article {
  type_of: string;
  id: number;
  title: string;
  description: string;
  published: boolean;
  published_at: string | null;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  page_views_count: number;
  published_timestamp: string;
  body_markdown: string;
  positive_reactions_count: number;
  cover_image: string | null;
  tag_list: string[];
  canonical_url: string;
  reading_time_minutes: number;
  user: User;
}

async function getData() {
  try {
    const posts = await fetch("https://dev.to/api/articles/me/all", {
      headers: {
        "api-key": process.env.DEV_TO_API_KEY as string,
      },
      next: {
        revalidate: 3600 * 24,
      },
    });
    const resJson = await posts.json();

    return resJson;
  } catch (error: any) {
    return Response.json({
      error: error?.message ?? "Something went wrong!",
      data: [],
    });
  }
}

export default async function BlogPage() {
  const data: Article[] = await getData();
  console.log({ data });

  return (
    <div>
      <h1 className={title()}>Blog</h1>
      {data.map((post) => (
        <div className="mt-8 flex flex-col gap-8">
          <PostItem
            date={post.published_at!}
            description={post.description}
            title={post.title}
          />
        </div>
      ))}
    </div>
  );
}
