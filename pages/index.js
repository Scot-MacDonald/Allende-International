import useSWR from "swr";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import ArbeitList from "@/components/ArbeitList";
import Intro from "@/components/Intro";

export default function HomePage() {
  const { mutate } = useSWR("/api/posts");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const postData = Object.fromEntries(formData);

    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });

    if (response.ok) {
      mutate();
    }
  }

  return (
    <>
      {/* <PostForm onSubmit={handleSubmit} value="" /> */}
      <Intro />
      <PostList />
      <ArbeitList />
    </>
  );
}
