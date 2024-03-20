import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";

export default function PostList() {
  const { data, isLoading } = useSWR("/api/posts");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ul className="flex">
      {data.map((post) => (
        <li key={post._id}>
          <Link href={`/${post._id}`}>
            {post.title}
            <Image
              src={post.img}
              alt={`Image for ${post.title}`}
              width={312}
              height={205}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
