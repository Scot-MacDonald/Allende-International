import useSWR from "swr";
import ArbeitForm from "@/components/ArbeitForm";
import PostList from "@/components/PostList";
import ArbeitList from "@/components/ArbeitList";

export default function ArbeitPage() {
  const { mutate } = useSWR("/api/arbeits");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const arbeitData = Object.fromEntries(formData);

    const response = await fetch("/api/arbeits", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arbeitData),
    });

    if (response.ok) {
      mutate();
    }
  }

  return (
    <>
      {/* <PostForm onSubmit={handleSubmit} value="" /> */}
      <h1>hello</h1>
      <ArbeitList />
    </>
  );
}
