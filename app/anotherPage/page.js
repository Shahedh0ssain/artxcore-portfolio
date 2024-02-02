
import Hero from "../components/hero";
import OverView from "../components/AnotherPage/overView";
import Benefits from "../components/AnotherPage/benefits";
import Awards from "../components/AnotherPage/awards";
import Banks from "../components/AnotherPage/banks";

const anotherPage = () => {

    return (
        <section className="max-w-screen-2xl  mx-auto px-2  md:px-10 lg:px-10  relative">
            <Hero></Hero>
            <OverView></OverView>
            <Benefits></Benefits>
            <Awards></Awards>
            <Banks></Banks>
        </section>
    )


}

export default anotherPage