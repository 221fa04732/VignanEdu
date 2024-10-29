export default function VideoCardComponent(prop)
{
    return (
        <div className="grid place-content-center">
            <img src={prop.imageThumbnail} />
            <div className="pt-2 pl-8 grid grid-cols-7 w-80" >
                <div className="flex justify-center">
                <img className="col-span-1 pt-2 h-10 pl-2" src={prop.imageLogo} />
                </div>
                <div className="col-span-6 pl-4">
                    <div>{prop.title}</div>
                    <div className="text-sm text-slate-400">{prop.subtitle}</div>
                    <div className="text-sm text-slate-400">{prop.views} | {prop.timeStamp}</div>
                </div>
            </div>
        </div>
    )
}