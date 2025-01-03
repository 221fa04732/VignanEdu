import DisplayAnswer from "./DisplayAnswer"

export default function DisplayQuestion(props)
{

   return(<div className='flex flex-col justify-center items-center p-5'>
    <div className='flex items-start justify-start border-b-2 border-l-2 border-gray-400 hover:border-blue-400 rounded-2xl p-5 w-11/12 gap-10'>
        <div className='flex flex-col items-center justify-center font-myfont1  p-5'>
            <div className='border-b border-blue-400 pb-1'>
            <img className='h-8 w-8  ' src="profile.png" />
            </div>
            <p>Puneet</p> 
            <p>Superstar</p>
        </div>
        <div className='flex flex-col w-full'>
            <div className='mb-3'>
                <details>
                    <summary className="list-none">
                        <div className="font-myfont1">{props.item.question}</div>
                        <div className="flex justify-between pr-5 pt-3 mb-5">
                            <div className="flex gap-4">
                                <div className="flex gap-1">
                                    <button><img className="h-4 w-4" src="upvote.png" /></button>
                                    <span>{props.item.upvote}</span>
                                </div>
                                <div className="flex gap-1">
                                    <button><img className="h-4 w-4" src="downvote.png"/></button>
                                    <span>{props.item.downvote}</span>
                                </div>
                                
                            </div>
                            <div className="flex gap-4">
                                <div className="flex gap-1">
                                    <button><img className="h-4 w-4" src="like.png" /></button>
                                    <span>{props.item.like}</span>
                                </div>
                                <div className="flex gap-1">
                                    <button><img className="h-4 w-4" src="dislike.png" /></button>
                                    <span>{props.item.dislike}</span>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button><img className="h-4 w-4" src="add.png" /></button>
                                <button><img className="h-4 w-4" src="delete.png" /></button>
                            </div>
                            
                        </div>
                    </summary>
                    <p className="ml-5">
                        {props.item.answers.map((answer, index) => (
                            <div key={index}>
                                <DisplayAnswer answer = {answer}/>
                            </div>
                        ))}
                    </p>
                </details>
            </div>
        </div>
    </div>
</div>)

}