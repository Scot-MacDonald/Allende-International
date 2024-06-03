import useSWR from "swr";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import ArbeitList from "@/components/ArbeitList";
import Intro from "@/components/Intro";
import DateList from "@/components/DateList";
import FeaturedPostList from "@/components/FeaturedPostList";
import SimpleSlider from "@/components/SimpleSlider";
import WorkingList from "@/components/WorkingList";
import EventList from "@/components/EventList";
import ScrollImageLayout from "@/components/ScrollImageLayout";

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
        <WorkingList />
        <DateList />
        <EventList />
        <oldEventList />
        <SimpleSlider />
      </div>
    </>
  );
}
