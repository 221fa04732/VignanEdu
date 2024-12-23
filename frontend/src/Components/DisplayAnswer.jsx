export default function DisplayAnswer(props) 
{
    return (<div className="mt-2 p-1">
        <div className="font-myfont1">{props.answer.answer}</div>
        <div className="flex justify-between pr-5 pt-3">
            <div className="flex gap-4">
                <div className="flex gap-1">
                    <button><img className="h-4 w-4" src="upvote.png" /></button>
                    <span>{props.answer.upvote}</span>
                </div>
                <div className="flex gap-1">
                    <button><img className="h-4 w-4" src="downvote.png"/></button>
                    <span>{props.answer.downvote}</span>
                </div>
                
            </div>
            <div className="flex gap-4">
                <div className="flex gap-1">
                    <button><img className="h-4 w-4" src="like.png" /></button>
                    <span>{props.answer.like}</span>
                </div>
                <div className="flex gap-1">
                    <button><img className="h-4 w-4" src="dislike.png" /></button>
                    <span>{props.answer.dislike}</span>
                </div>
            </div>
            <div className="flex gap-4">
                <button><img className="h-4 w-4" src="delete.png" /></button>
            </div>
            
        </div>  
    </div>)

}