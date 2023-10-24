import data from './data.json'

export async function GET() {
  return Response.json(data.products)
}
