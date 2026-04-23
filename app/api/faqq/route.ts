import { NextResponse } from "next/server";
import connect from "@/lib/db";
import FAQ from "@/lib/models/faq";
import { Types } from "mongoose";

export const GET = async () => {
  try {
    await connect();
    const faqs = await FAQ.find();
    return NextResponse.json(faqs, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Failed to fetch FAQs" }, { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();
    const newfaq = new FAQ(body);
    await newfaq.save();
    return NextResponse.json({ message: "Successful" }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};

export const PATCH = async (request: Request) => {
  try {
    const body: { id?: string; newAns?: string } = await request.json();
    const { id, newAns } = body;
    await connect();
    if (!id || !newAns) {
      return NextResponse.json({ message: "Data missing" }, { status: 400 });
    }
    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid question id" }, { status: 400 });
    }

    const updateAns = await FAQ.findOneAndUpdate(
      { _id: id },
      { ans: newAns },
      { new: true }
    );
    if (!updateAns) {
      return NextResponse.json({ message: "Data not Found" }, { status: 400 });
    }
    return NextResponse.json({ message: "successful", ans: updateAns }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ message: `Error ${message}` }, { status: 500 });
  }
};

export const DELETE = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ message: "Data missing" }, { status: 400 });
    }
    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid question id" }, { status: 400 });
    }
    await connect();
    const deletedQ = await FAQ.findByIdAndDelete(new Types.ObjectId(id));
    if (!deletedQ) {
      return NextResponse.json({ message: "user not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Question deleted" }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ message: `Error ${message}` }, { status: 500 });
  }
};
