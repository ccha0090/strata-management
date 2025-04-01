// pages/api/committee.js
export const config = { runtime: 'edge' };

export default async function handler(req) {
  const committee = ["Secretary", "Treasurer", "Chairperson"];
  return new Response(JSON.stringify(committee), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}