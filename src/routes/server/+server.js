export const GET = ({ request }) => {
    console.log(request)
    return new Response(JSON.stringify({x: 1, y: 2}))
}

export const POST = async ({ request }) => {
    var data = await request.json();
    console.log(data)
    return new Response(JSON.stringify({x: data.x + 1, y: 5}))
}