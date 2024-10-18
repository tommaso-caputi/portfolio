import Bar from "@/components/Bar";

export default function Post1() {
    return (
        <div className="flex justify-center min-h-screen py-7">
            <div className="space-y-20 pt-8 text-left px-3 sm:w-8/12 md:w-8/12 lg:w-5/12 mb-36">
                <div>
                    <div className="flex">
                        <div className="space-y-4 w-11/12">
                            <p style={{ fontSize: '17px' }} className='font-medium'>dasd</p>
                        </div>
                    </div>
                    <p className="text-xs text-slate-300 pb-2" style={{ color: '#00000060' }}>da</p>
                </div>
                <div>
                    post
                </div>
            </div>
            <Bar />
        </div >
    );
}