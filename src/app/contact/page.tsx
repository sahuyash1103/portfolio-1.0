"use client";

export default function Contact() {
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <main className="flex h-full w-full flex-col items-start justify-center p-10">
      <div className="flex w-full flex-col">
        <span className="text-xl">Contact</span>
        <form className="my-6 flex w-3/5 flex-col" onSubmit={onSubmit}>
          <div className="my-2 flex w-full justify-between gap-6">
            <input
              type="text"
              placeholder="First Name"
              className="rounded bg-[#3b3948] px-3 py-2 text-tertiary outline-none"
            />
            <input
              type="text"
              placeholder="Second Name"
              className="rounded bg-[#3b3948] px-3 py-2 text-tertiary outline-none"
            />
          </div>
          <div className="my-2 flex w-full gap-6">
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded bg-[#3b3948] px-3 py-2 text-tertiary outline-none"
            />
          </div>
          <div className="my-2 flex w-full gap-6">
            <textarea
              placeholder="Description"
              className="text h-36 w-full resize-none rounded bg-[#3b3948] px-3 py-2 text-tertiary outline-none"
            />
          </div>

          <button className="my-10 w-fit rounded-full border border-tertiary bg-primary px-10 py-2 text-tertiary">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
