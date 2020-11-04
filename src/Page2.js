import { Link } from "react-router-dom";

const Page2 = () => {
    return (
        <span>
            <nav>
                <ul>
                    <li>
                        <Link to="/A_2014/page3">Page3</Link>
                    </li>
                </ul>
            </nav>
            <div>Page2</div>
        </span >
    )
}

export default Page2;