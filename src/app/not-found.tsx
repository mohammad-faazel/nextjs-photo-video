"use client";

export default function NotFound() {
    const handleBtn = () => {
        window.location.href = "/";
    };
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center p-10 bg-gray-100 rounded-3xl flex flex-col gap-5">
                <h2 className="font-bold text-4xl">Not Found</h2>
                <p>Could not find requested resource</p>
                <button
                    type="button"
                    title="go to home"
                    className="btn btn-primary"
                    onClick={handleBtn}
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
}
