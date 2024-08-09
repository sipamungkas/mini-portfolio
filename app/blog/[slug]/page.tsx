async function getData(slug: string) {
  try {
    const posts = await fetch(
      `https://dev.to/api/articles/sipamungkas/${slug}`,
      {
        headers: {
          "api-key": process.env.DEV_TO_API_KEY as string,
        },
        next: {
          revalidate: 3600 * 24,
        },
      }
    );
    const resJson = await posts.json();

    return resJson;
  } catch (error: any) {
    return [];
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData(params.slug);

  return (
    <div
      className="markdown w-100 d-flex flex-1"
      dangerouslySetInnerHTML={{ __html: data.body_html }}
    />
  );
}
