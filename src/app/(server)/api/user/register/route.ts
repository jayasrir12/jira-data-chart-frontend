import { User } from "@/server/db/models/user-model";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { registerValidationSchema } from "@/lib/validator/authValidator";
import connectToDatabase from "@/server/db";

export async function POST(request: Request) {
  await connectToDatabase();
  // step 1: get the body from the request
  const body = await request.json();

  // step 2: validate the body
  const parsedBody = registerValidationSchema.safeParse(body);
  if (!parsedBody.success) {
    return NextResponse.json(
      { errors: parsedBody.error.format() },
      { status: 400 }
    );
  }

  const parsedData = parsedBody.data;

  // step 3: check existing user in the database
  try {
    const existingUser = await User.findOne({
      username: parsedData.username,
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Username already taken" },
        { status: 409 }
      );
    }

    // step 4: hash the password
    const hashedPassword = await bcrypt.hash(parsedData.password, 10);

    // step 5: create the user in the database

    const newUser = await User.create({
      username: parsedData.username,
      password: hashedPassword,
    });

    // step 6: return the response

    return NextResponse.json(
      {
        message: "User registered successfully",
        data: { id: newUser._id, username: newUser.username },
      },
      { status: 201 }
    );
  } catch (err) {
    NextResponse.json(
      { message: "something went wrong" },
      {
        status: 500,
      }
    );
  }
}
