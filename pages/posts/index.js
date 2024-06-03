import useSWR from "swr";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

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
      <div className="px-10 w-full">
        <PostList />
      </div>
    </>
  );
}
