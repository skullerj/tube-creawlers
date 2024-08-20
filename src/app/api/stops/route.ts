export async function GET() {
	try {
		const res = await fetch(
			"https://api.tfl.gov.uk/Line/Mode/tube/Route?serviceTypes=Regular",
		);
		const data = await res.json();
		return Response.json({ stops: data });
	} catch (e: unknown) {
		return Response.json(
			{ error: "Something went wrong while searching for the stops" },
			{ status: 500 },
		);
	}
}
