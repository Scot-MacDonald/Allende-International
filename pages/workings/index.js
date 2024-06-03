import useSWR from "swr";

import WorkingList from "@/components/WorkingList";

export default function WorkingPage() {
  const { mutate } = useSWR("/api/workings");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const workingData = Object.fromEntries(formData);

    const response = await fetch("/api/workings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workingData),
    });

    if (response.ok) {
      mutate();
    }
  }

  return (
    <>
      {/* <PostForm onSubmit={handleSubmit} value="" /> */}
      <div className="px-10 w-full">
        <WorkingList />
      </div>
    </>
  );
}
