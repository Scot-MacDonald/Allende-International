import useSWR from "swr";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import ArbeitList from "@/components/ArbeitList";
import Intro from "@/components/Intro";
import EventList from "@/components/EventList";
import DateList from "@/components/DateList";
import FeaturedPostList from "@/components/FeaturedPostList";

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
      <div className="px-10 w-full">
        {/* <PostForm onSubmit={handleSubmit} value="" /> */}
        <Intro />
        <FeaturedPostList />
        <PostList />
        <ArbeitList />
        <EventList />

        <DateList />
      </div>
    </>
  );
}
