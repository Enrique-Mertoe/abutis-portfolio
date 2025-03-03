const HeroFigure1 = function () {
    return (
        <figure className="position-absolute top-0 start-0">
            <svg className="fill-white" width="662" height="614" viewBox="0 0 662 614"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M-78 0V603.815C-61.4821 612.795 -44.1025 615.867 -28.4464 611.85C9.04192 602.16 38.9177 554.186 58.4519 503.612C77.8424 453.511 90.1949 397.029 105.995 343.383C121.794 289.973 142.477 237.745 173.215 206.549C224.779 154.321 291.425 172.991 349.166 202.768C406.907 232.545 466.227 272.248 525.979 256.414C570.505 244.598 611.441 200.878 636.002 138.724C652.233 97.6029 661.138 48.9196 662 0L-78 0Z"></path>
            </svg>
        </figure>
    )
}
const HeroFigure2 = function ({className = ""}) {
    return (
        <figure className={`position-absolute z-3 top-0 start-0 ms-n8 ${className}`}>
            <svg width="371" height="354" viewBox="0 0 371 354" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="172.5" cy="176.5" rx="131.5" ry="125.5" fill="url(#paint0_linear_195_2)"></ellipse>
                <ellipse cx="185.5" cy="177" rx="185.5" ry="177" fill="url(#paint1_linear_195_2)"></ellipse>
                <defs>
                    <linearGradient id="paint0_linear_195_2" x1="172.5" y1="51" x2="172.5" y2="302"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0.0569271" stop-color="#D9D9D9" stop-opacity="0.5"></stop>
                        <stop offset="0.998202" stop-color="#D9D9D9" stop-opacity="0"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_195_2" x1="185.5" y1="0" x2="185.5" y2="354"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0.0569271" stop-color="#D9D9D9" stop-opacity="0.2"></stop>
                        <stop offset="0.998202" stop-color="#D9D9D9" stop-opacity="0"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </figure>
    )
}

export {
    HeroFigure1,
    HeroFigure2
}