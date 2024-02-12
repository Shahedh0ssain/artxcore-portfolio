const review = () => {
    return (
        <div class="card rounded-none  m-4 md:m-1  bg-white drop-shadow-sm border">
            <figure>
                {/* <img className="w-full h-auto" src={img} alt="Shoes" /> */}
            </figure>
            <div class="card-body py-10">

                <div class="avatar flex justify-center">
                    <div class="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>

                <h2 class="card-title justify-center text-black text-center">
                    Best Product
                </h2>

                <div className="flex justify-center">
                    <div class="rating  py-3 ">
                        <input type="radio" name="rating-1" class="mask mask-star bg-black" />
                        <input type="radio" name="rating-1" class="mask mask-star bg-black" checked />
                        <input type="radio" name="rating-1" class="mask mask-star bg-black" />
                        <input type="radio" name="rating-1" class="mask mask-star bg-black" />
                        <input type="radio" name="rating-1" class="mask mask-star bg-black" />
                    </div>
                </div>
                <p className="text-black text-center">If a dog chews shoes whose shoes does he choose?

                    dog chews shoes whose shoes
                </p>
                <div class="card-actions justify-center ">

                </div>
            </div>
        </div>
    )
}

export default review