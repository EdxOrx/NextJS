import { getDataSource } from "@/lib/data-source";
import { Doctor } from "@/entities/Doctor";

export async function GET() {
  const dataSource = await getDataSource();
  const doctors = await dataSource.getRepository(Doctor).find({
    relations: ["addresses"], // Eager loading address for each doctor
  });

  return new Response(JSON.stringify(doctors), { status: 200 });
}
