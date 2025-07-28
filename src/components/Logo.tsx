export default function Logo() {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* <!-- Camera body --> */}
            <rect x="14" y="22" width="36" height="24" rx="4" fill="black" />

            {/* <!-- Film reels --> */}
            <circle cx="20" cy="20" r="6" fill="black" stroke="white" strokeWidth="2" />
            <circle cx="44" cy="20" r="6" fill="black" stroke="white" strokeWidth="2" />

            {/* <!-- Lens (play icon) --> */}
            <polygon points="32,28 40,32 32,36" fill="white" />

            {/* <!-- Film strip perforations --> */}
            <rect x="16" y="26" width="2" height="4" fill="white" />
            <rect x="16" y="34" width="2" height="4" fill="white" />
            <rect x="46" y="26" width="2" height="4" fill="white" />
            <rect x="46" y="34" width="2" height="4" fill="white" />
        </svg>

    )
}


