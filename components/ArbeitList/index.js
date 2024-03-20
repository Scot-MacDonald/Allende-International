import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";

export default function ArbeitList() {
  const { data, isLoading } = useSWR("/api/arbeits");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ul className="flex">
      {data.map((arbeit) => (
        <li key={arbeit._id}>
          <Link href={`/${arbeit._id}`}>
            {arbeit.title}
            <Image
              src={arbeit.img}
              alt={`Image for ${arbeit.title}`}
              width={312}
              height={205}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
