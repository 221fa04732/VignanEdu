export default function DisplayAnswer(props)
{
    console.log(props)
    return (<div className=" border border-yellow-300 rounded-lg p-2">
        <h1>{props.answer.answer}</h1>
        <div className="flex p-3 gap-10">
        <button><img className="h-4 w-4" src="upvote.png" /></button>
            <button><img className="h-4 w-4" src="downvote.png"/></button>
            <button><img className="h-4 w-4" src="like.png" /></button>
            <button><img className="h-4 w-4" src="dislike.png" /></button>
            <button><img className="h-4 w-4" src="add.png" /></button>
            <button><img className="h-4 w-4" src="delete.png" /></button>
        </div>
        
    </div>)

}