import useSWR from "swr";
import EventList from "@/components/EventList";

export default function EventPage() {
  const { mutate } = useSWR("/api/events");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const eventData = Object.fromEntries(formData);

    const response = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    if (response.ok) {
      mutate();
    }
  }

  return (
    <>
      {/* <PostForm onSubmit={handleSubmit} value="" /> */}
      <div className="px-10 w-full">
        <EventList />
      </div>
    </>
  );
}
