import prisma from '@/prisma'

// POST /api/post
export default async function handle(req, res) {
  const allUsers = await prisma.user.findMany()
  res.json({ code: 0, msg: 'success', data: allUsers });
}
