import { auth } from "@clerk/nextjs/server"

const adminIds = [
  "user_2he2GAfJ6yVUoHJYl5YVXKbmDvG",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
