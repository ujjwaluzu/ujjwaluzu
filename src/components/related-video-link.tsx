import Link from "next/link";

export function RelatedVideoLink({ title, videoId, projectName }: { title: string; videoId: string; projectName: string }) {
  return (
    <section className="case-related-video" aria-label={`Related ${projectName} video`}>
      <div className="page-shell">
        <p>RELATED VIDEO</p>
        <Link href={`/more/${videoId}`}>
          Watch {title} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
