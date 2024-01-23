import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Image
        src="/images/marcchami.jpg"
        alt="Marc Chami"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h1 className="text-6xl font-bold mt-10">Marc Chami</h1>
      <p className="mt-3 text-2xl">Software Engineer</p>
      <div className="flex flex-row mt-10 space-x-4">
        Test
      </div>
    </div>  );      
}
