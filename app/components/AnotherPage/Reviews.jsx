import Review from "../AnotherPage/Review";

const reviews = () => {
    return (
        <div className=" py-10">
            <h2 className="p-3 py-10 text-4xl md:inline-block md:text-5xl font-light">Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <Review></Review>
                <Review></Review>
                <Review></Review>
                <Review></Review>
                <Review></Review>
                <Review></Review>
            </div>
        </div>
    )
}

export default reviews;