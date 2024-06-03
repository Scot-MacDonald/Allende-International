import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import ArbeitForm from "@/components/ArbeitForm";
import Link from "next/link";

export default function Arbeit() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/arbeits/${id}`);

  async function handleEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const arbeitData = Object.fromEntries(formData);

    const response = await fetch(`/api/arbeits/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arbeitData),
    });

    if (response.ok) {
      mutate();
    }
  }

  async function handleDelete() {
    const response = await fetch(`/api/arbeits/${id}`, { method: "DELETE" });

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
        <ArbeitForm
          onSubmit={handleEdit}
          value={data.title}
          isEditMode={true}
        />
      )}
      hhh
      <Link
        href="/"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Back to all
      </Link>
    </>
  );
}
