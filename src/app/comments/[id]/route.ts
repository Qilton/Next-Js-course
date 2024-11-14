import { comments } from "../data";
import { redirect } from "next/navigation";
export async function GET(request: Request, { params }: { params: { id: string } }) {
    const comment = comments.find(comment => comment.id === parseInt(params.id));
    if( parseInt(params.id)>comments.length){
        redirect("/comments")
    }
    if (!comment) {
        return new Response(JSON.stringify({ message: "Comment not found" }), { status: 404 });
    }
    
    return new Response(JSON.stringify(comment), { status: 200 });
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json();
    const { text } = body;
    
    const index = comments.findIndex(comment => comment.id === parseInt(params.id));
    
    if (index === -1) {
        return new Response(JSON.stringify({ message: "Comment not found" }), { status: 404 });
    }

    comments[index].text = text;
    return new Response(JSON.stringify(comments[index]), { status: 200 });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const index = comments.findIndex(comment => comment.id === parseInt(params.id));
    
    if (index === -1) {
        return new Response(JSON.stringify({ message: "Comment not found" }), { status: 404 });
    }
    
    const deletedComment = comments.splice(index, 1)[0];
    return new Response(JSON.stringify(deletedComment), { status: 200 });
}
