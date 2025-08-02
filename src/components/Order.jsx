import { FaClock } from "react-icons/fa";

const items = [
    { name: "john doe", TBD: 12, food: "1xsalad, 2x coke, 3x cake", time: "4", status: "pending" },
    { name: "jane smith", TBD: 8, food: "2x burger, 1x fries, 1x water", time: "10", status: "completed" },
    { name: "michael lee", TBD: 15, food: "1x pizza, 2x sprite", time: "2", status: "completed" },
    { name: "alice brown", TBD: 5, food: "3x tacos, 1x juice", time: "7", status: "pending" },
    { name: "david kim", TBD: 9, food: "1x wrap, 2x iced tea, 1x cookie", time: "5", status: "pending" }
];

function Order(){
    const textureStyle = {
        backgroundImage: 'url("/assets/surface.png")',
        backgroundColor: '#FFFDD0',
    };

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className=" px-8 py-4 w-full max-w-[800px] max-h-screen bg-white border-2 border-amber-200 rounded-lg" style={textureStyle}>
                <span className="flex items-center text-2xl font-extrabold gap-2 mt-2"><FaClock />Incoming orders</span>
                <div className="flex justify-between items-center gap-4 p-4 my-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition">
                        Search
                    </button>
                </div>

                {items.map((item ,index) => (
                    <div className="flex justify-between text-lg items-center border-2 p-6 mb-4">
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-4">
                                <span className="font-bold uppercase">{item.name}</span>
                                <span>TBD :{item.TBD}</span>
                            </div>
                            <div>{item.food}</div>
                        </div>
                        <div>{item.time} minutes ago</div>
                        {
                            item.status === "pending" ? (
                                <div className="text-green-800">{item.status}</div>
                            ) : (
                                <div className="text-red-500">{item.status}</div>
                            )
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Order