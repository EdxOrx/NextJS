import { DoctorList } from "@/components/DoctorList";

export default async function Doctor() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/doctors`),
        doctors  = await response.json();

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center">
      <h1>Doctors</h1>
      {
        <DoctorList doctors={doctors}/>
      }
    </main>
  );
}
