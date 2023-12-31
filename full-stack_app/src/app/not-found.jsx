import Link from "next/link";

export default function NotFound() {
    return (
        <div className="error-content-area my-5">
            <h1 className="error-heading text-orange-400">404 Error</h1>
            <img className="error-img pt-28" src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="File Not Found" />
            <div className="error-content">
                <h3>Are you're lost?</h3>
                <p>It looks like nothing was found at this location.</p>
                <Link href="/" className="error-button">Go to Home</Link>
            </div>
        </div>
    )
}
