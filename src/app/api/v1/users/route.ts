import { getDataSource } from "@/lib/data-source";
import { User } from "@/entities";

export async function GET() {
  const dataSource = await getDataSource();
  const users = await dataSource.getRepository(User).find();

  return new Response(JSON.stringify(users), { status: 200 });
}
