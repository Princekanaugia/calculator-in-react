

export default function Calculator() {
    return <>
        <div className="grid gap-4 grid-cols-4 justify-items-stretch border border-black p-4 bg-slate-100 ">
            <div className="p-2 content-box col-span-4 border-black rounded-lg border-2 px-4 text-black shadow-l min-h-20 bg-white"><output name='x' className=" border-black h-5 w-1/2"></output></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="&#40;" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="&#41;" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="%" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="AC" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="7" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="8" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="9" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="&#247;" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="1" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="5" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="6" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="&#215;" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="1" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="2" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="3" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="-" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="0" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="." ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="=" ></input></div>
            <div className="p-1 btn-primary text-center"><input type="button" className="  " value="+" ></input></div>
            
        </div>
    </>
}