export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 md:px-12">
      <div className="mt-8 lg:mt-20 w-full">{children}</div>
    </section>
  );
}
