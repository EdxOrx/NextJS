import { getDataSource } from "@/lib/data-source";
import { DoctorFull } from "@/entities";
import { NextApiRequest } from "next/types";

export async function GET(
  request: NextApiRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params)?.id,
    dataSource = await getDataSource(),
    doctor = await dataSource.getRepository(DoctorFull).find({
      where: { id: Number(id) },
      relations: ["addresses", "prices", "articles", "reviews"],
    }),
    { prices, articles, reviews, ...baseData } = doctor[0],
    formattedData = {
      ...baseData,
      tabs: [
        { name: "prices", data: prices, isActive: true },
        { name: "articles", data: articles },
        { name: "reviews", data: reviews },
      ],
    };

  return new Response(JSON.stringify(formattedData), { status: 200 });
}
