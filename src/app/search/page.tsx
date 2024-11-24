export default async function Search() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/users`),
        doctors  = await response.json();

  console.log('>>>>>>>>>>>>>>>>>>>>>');
  console.log(doctors);
  console.log('>>>>>>>>>>>>>>>>>>>>>>');
    return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Seach</h1>
      </main>
    );
  }
  