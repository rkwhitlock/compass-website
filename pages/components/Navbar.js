import logo from '../../public/compass-logo.svg';

function refreshPage() {
    window.scrollTo(0, 0);
    window.location.reload(false);

}

const applicationLink = "https://docs.google.com/forms/d/e/1FAIpQLScc3bGFP6uV8Hki20BW1XQq4m1i6-W06qNpg-9eg2mic5Co0A/viewform?usp=sf_link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 w-full border-b-1 z-50 pb-5 pt-3 bg-white shadow-sm ">
            <div className="container flex flex-col md:flex-row md:justify-between">
                <div className="flex items-center justify-center md:justify-start font-snas">
                    <div onClick={refreshPage} className="basis-1/3 flex items-center">
                        <img src={logo} alt="Logo" width={1000} />
                    </div>
                </div>
                <div className="flex items-center justify-between md:justify-end">
                    <button onClick={refreshPage} className="px-4 hover:underline">
                        ABOUT
                    </button>
                    <button className="px-4 hover:underline">
                        EVENTS
                    </button>
                    <button className="px-4 hover:underline">
                        PROJECTS
                    </button>
                    <button onClick={() => window.open(applicationLink, '_blank', 'noreferrer')} className="px-4 hover:underline" style={{ whiteSpace: "nowrap" }}>
                        JOIN US
                    </button>
                    {/* <button className="px-4 flex items-center rounded ">
                        <div className="w-9">
                        </div>
                        <div className="rounded ring-offset-2 ring-2 ring-sky-900 ring-opacity-70 w-28 bg-gradient-to-tr from-gray-100 to-sky-100 hover:underline">
                           SUPPORT US
                        </div>
                    </button> */}
                </div>
            </div>
        </nav>
    );
}