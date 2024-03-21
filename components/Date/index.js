import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import DateForm from "@/components/DateForm";
import Link from "next/link";

export default function Date() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/dates/${id}`);

  async function handleEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const dateData = Object.fromEntries(formData);

    const response = await fetch(`/api/dates/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dateData),
    });

    if (response.ok) {
      mutate();
    }
  }

  async function handleDelete() {
    const response = await fetch(`/api/dates/${id}`, { method: "DELETE" });

    if (!response.ok) {
      console.log(response.status);
      return;
    }

    router.push("/");
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) return;

  return (
    <>
      <small>ID: {id}</small>
      <h1>{data.title} </h1>
      <div>
        <button
          onClick={() => {
            setIsEditMode(!isEditMode);
          }}
        >
          <span role="img" aria-label="A pencil">
            ✏️
          </span>
        </button>
        <button onClick={handleDelete} disabled={isEditMode}>
          <span role="img" aria-label="A cross indicating deletion">
            ❌
          </span>
        </button>
      </div>
      {isEditMode && (
        <DateForm onSubmit={handleEdit} value={data.title} isEditMode={true} />
      )}
      <Link href="/">Back to all</Link>
    </>
  );
}
