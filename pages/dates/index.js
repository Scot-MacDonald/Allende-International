import useSWR from "swr";
import ArbeitForm from "@/components/ArbeitForm";
import PostList from "@/components/PostList";
import DateList from "@/components/DateList";

export default function DatePage() {
  const { mutate } = useSWR("/api/dates");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const dateData = Object.fromEntries(formData);

    const response = await fetch("/api/dates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dateData),
    });

    if (response.ok) {
      mutate();
    }
  }

  return (
    <>
      {/* <PostForm onSubmit={handleSubmit} value="" /> */}
      <h1>hello</h1>
      <DateList />
    </>
  );
}
