export default function MenuItem( ) {
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-lg hover:shadow-black/25 transition-all">

            <div className="text-center">
                <img src="/pizza.png" className="max-h-auto max-h-24 block mx-auto"   alt="pizza" />
            </div>
            
            <h4 className="text-xl font-semibold my-3">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm">
                Sit voluptate nulla quis labore nulla dolor culpa commodo aliqua. 
            </p>
            <button className="bg-primary text-white rounded-full px-8 py-2 mt-4">
                Add to cart $12
            </button>
        </div>
    )
}