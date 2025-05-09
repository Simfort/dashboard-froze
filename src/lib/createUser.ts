"use server";

import prisma from "../../prisma/seed";

export default async function createUser(
  state: {
    errors: string[];
    name?: string;
  },
  fd: FormData
) {
  try {
    const data = {
      name: fd.get("name")! as string,
      password: fd.get("password")! as string,
      email: fd.get("email")! as string,
    };
    const findedUser = await prisma.user.findFirst({
      where: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
    if (findedUser) {
      return { errors: [...state.errors, "This user is a register!"] };
    } else {
      await prisma.user.create({ data: data });
      return { errors: ["Succesfully"], name: data.name };
    }
  } catch {
    return { errors: [...state.errors, "Error..."] };
  }
}
