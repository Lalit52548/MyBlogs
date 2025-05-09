import { v2 as cloudinary } from "cloudinary";

export async function POST(request) {
  const body = await request.json();
  const { paramsToSign } = body;
  console.log({ paramsToSign });
  if (!paramsToSign || !process.env.CLOUDINARY_API_SECRET) {
    return Response.json({
      // error: "paramsToSign or CLOUDINARY_API_SECRET is missing",
      error:
        "CLOUDINARY_INTEGRATION_FAILURE: Fail to parse response from Cloudinary",
    });
  }

  const signature = cloudinary.utils.api_sign_request(
    paramsToSign,
    process.env.CLOUDINARY_API_SECRET
  );

  return Response.json({ signature });
}
