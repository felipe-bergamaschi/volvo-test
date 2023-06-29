import fs from "fs";
import path from 'path';
import util from 'util';
import { NextResponse } from "next/server";

const readFileAsync = util.promisify(fs.readFile);

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'api', 'cars.json');

  try {
    const data = await readFileAsync(filePath, 'utf8');
    const jsonData = JSON.parse(data);

    const response = jsonData

    return NextResponse.json(response);
  } catch (error) {
    const response = null

    return NextResponse.json(response);
  }
}
