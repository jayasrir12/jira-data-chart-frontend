import { User } from "@/server/db/models/user-model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { registerValidationSchema } from "@/lib/validator/authValidator";

export async function POST(request: Request) {
  const body = await request.json();
  const parsedBody = registerValidationSchema.safeParse(body);
  if (!parsedBody.success) {
    return NextResponse.json(
      {
        error: parsedBody.error.format(),
      },
      { status: 400 }
    );
  }
  const user = await User.findOne({ username: body.username });
  if (!user)
    return NextResponse.json({
      error: "Invalid credentials",
    });
  const parsedData = parsedBody.data;

  const isMatch = await bcrypt.compare(parsedData.password, user.passwordHash);
  if (!isMatch)
    return NextResponse.json({
      error: "Invalid credentials",
    });

  return NextResponse.json(
    {
      message: "Login success",
    },
    {
      status: 201,
    }
  );
}
