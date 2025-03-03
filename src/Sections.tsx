import {HeroFigure1} from "./figures.tsx";
import android from "./assets/elements/android.svg"
import circle from "./assets/circle.png"
import me from './assets/me.png'
import php from "./assets/elements/php.svg"
import nodejs from "./assets/elements/nodejs.svg"
import python from "./assets/elements/python.svg"
import java from "./assets/elements/java.svg"
import kotlin from "./assets/elements/kotlin.svg"
import flask from "./assets/elements/flask.svg"
import odoo from "./assets/elements/odoo.webp"
import blazor from "./assets/elements/blazor.svg"
import laravel from "./assets/elements/laravel.svg"

const HeroSection = function () {
    return (
        <section className="hero-section">
            <HeroFigure1/>
            <div className="container">
                <div>
                    <div className="row pt-3 text-light align-items-center gy-8">
                        <div className="col-7">
                            <div>
                                <h1 className="display-3 hero-text my-3" data-text="Greetings!">Greetings!</h1>
                                <h2 className="hero-label ms-6">
                                    <span>⚡</span>I am Abuti
                                </h2>
                                <p className="fw-bold ms-6">Full-Stack Developer & IoT Innovator.</p>
                                <a href="#" className="btn btn-primary btn-sm mt-4">View My Work</a>
                                <div className="mt-5 gap-3 align-items-center">
                                    <h3>Tools</h3>
                                    <div className="hstack gap-2">
                                          <span className="avatar avatar-md">
                                              <img alt="avatar" src={android} className="rounded-circle"/>
                                          </span>
                                        <span className="avatar avatar-md">
                                              <img alt="avatar" src={blazor} className="rounded-circle"/>
                                          </span>
                                        <span className="avatar avatar-md">
                                                <img alt="avatar" src={flask} className="rounded-circle"/>
                                        </span>
                                        <span className="avatar avatar-md">
                                            <img alt="avatar" src={laravel} className="rounded-circle"/>
                                          </span>
                                        <span className="avatar avatar-md">
                                        <img alt="avatar" src={odoo} className="rounded-circle " width={100}/>
                                      </span>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 d-flex justify-content-center py-6">
                            <div className="text-center position-relative">
                                <div className="position-relative">
                                    <img src={circle} alt=""
                                         className="position-relative img-fluid bg-invert"/>
                                    <div className="position-absolute top-0 ms-n8 mt-n6">
                                        <img src={android} alt=""/>
                                    </div>

                                    <div className="position-absolute top-50 start-50 translate-middle">
                                        <svg width="315" height="315" viewBox="0 0 315 315" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3.06323" y="2.99145" width="308.4" height="308.4"
                                                  rx="154.2" fill="white"></rect>
                                            <rect x="3.06323" y="2.99145" width="308.4" height="308.4"
                                                  rx="154.2" fill="#F20000"></rect>
                                            <rect x="3.06323" y="2.99145" width="308.4" height="308.4"
                                                  rx="154.2" stroke="var(--bs-gray-200)"
                                                  strokeWidth="5.81886"></rect>
                                        </svg>
                                        <div className="position-absolute top-50 start-50 w-100 h-100 translate-middle"
                                        >
                                            <div
                                                className="position-relative rounded-circle w-100 h-100 overflow-hidden">
                                                <img className="image-fluid" src={me} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="position-absolute hero-circle top-0 start-50 d-md-block rounded-circle">
                                        <img className="" src={php} alt=""/>
                                    </div>
                                    <div
                                        className="position-absolute top-0 start-50 ms-8 mt-n4">
                                        <img className="" src={nodejs} alt=""/>
                                    </div>
                                    <div
                                        className="position-absolute top-10 start-60 ms-4">
                                        <img className="" src={python} alt=""/>
                                    </div>
                                    <div
                                        className="position-absolute top-50 end-0 me-n5">
                                        <img className="" src={kotlin} alt=""/>
                                    </div>
                                    <div
                                        className="position-absolute top-50 start-60 ms-n6">
                                        <img className="" src={java} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const AboutSection = function () {
    return (
        <section className="pt-0 text-light about-section">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6 position-relative">
                        <figure className="position-absolute top-0 start-0 mt-n6 ms-n5 z-index-1">
                            <svg width="117" height="98" viewBox="0 0 117 98" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-mode"
                                      d="M53.9804 0.725277C52.9701 1.69222 52.9701 5.07654 53.9804 11.1683C54.9906 17.1634 55.7123 18.5654 57.5885 18.5654C58.3582 18.5654 59.128 18.3237 59.3685 18.0336C59.561 17.6952 59.2723 13.9241 58.7912 9.52449C58.1177 3.52942 57.6847 1.45049 57.0112 0.773624C55.9047 -0.241669 54.9425 -0.290017 53.9804 0.725277Z"></path>
                                <path className="fill-mode"
                                      d="M94.055 9.62103C87.2236 16.3413 84.8182 19.3872 85.0106 21.2244C85.1068 22.3847 85.3955 22.7715 86.3095 22.9165C87.2236 23.0616 88.3782 22.2397 91.6015 19.0004C96.9415 13.7305 101.512 8.46069 101.512 7.54209C101.512 6.62349 100.165 5.31812 99.2026 5.31812C98.7696 5.36646 96.4604 7.25201 94.055 9.62103Z"></path>
                                <path className="fill-mode"
                                      d="M23.2866 15.2294C22.2763 15.8096 22.1801 17.5984 23.046 18.7104C24.1044 20.0641 34.0148 25.9625 35.2656 25.9625C35.891 25.9625 36.7088 25.6241 37.0937 25.2373C38.537 23.4001 36.4202 21.1278 29.1077 16.5348C25.9806 14.6492 24.7779 14.3108 23.2866 15.2294Z"></path>
                                <path className="fill-mode"
                                      d="M103.433 40.37L97.8047 41.4337V42.8357C97.8047 43.851 98.1414 44.4312 99.0555 45.0114C100.21 45.6399 101.124 45.6399 107.09 44.8663C116.038 43.7543 116.038 43.7543 116.663 42.3523C117.096 41.337 117.048 40.9985 116.326 40.1283C115.22 38.8713 110.986 38.9196 103.433 40.37Z"></path>
                                <path className="fill-mode"
                                      d="M3.94616 46.1232C0.193694 46.8485 -1.20145 49.2175 1.20397 50.7646C1.97371 51.2481 2.83967 51.4414 3.80184 51.1997C4.57157 51.0547 8.42026 50.7162 12.4133 50.5228C17.8495 50.2328 19.7739 49.9427 20.3512 49.4109C21.5058 48.2505 20.3993 46.8001 17.8495 46.1232C15.3479 45.4947 7.12133 45.4947 3.94616 46.1232Z"></path>
                                <path className="fill-mode"
                                      d="M89.1454 69.9584C88.9529 70.1034 88.8086 70.7803 88.8086 71.4088C88.8086 72.7142 90.2518 73.8262 97.6125 77.9357C103.915 81.465 104.877 81.7551 106.416 80.4981C108.244 79.0477 107.234 77.5006 102.664 74.8898C95.3032 70.6352 90.3 68.7981 89.1454 69.9584Z"></path>
                                <path className="fill-mode"
                                      d="M30.8398 72.8111C28.3382 74.9384 21.2181 86.9769 20.0635 91.038C19.0532 94.519 21.9397 95.9211 24.0565 93.0203C24.6819 92.1984 26.3657 89.2975 27.7609 86.6868C29.1079 84.0277 31.369 80.1115 32.6198 77.8876C34.929 74.0681 35.2177 72.8111 33.9187 71.9408C33.0047 71.3123 32.3312 71.5541 30.8398 72.8111Z"></path>
                                <path className="fill-mode"
                                      d="M60.9544 80.7401C60.1365 81.707 60.0884 93.6488 60.9063 95.7277C61.243 96.4529 62.0128 97.3232 62.7825 97.6616C63.889 98.1935 64.1776 98.1451 65.0436 97.0815C65.5247 96.4529 65.8133 95.631 65.669 95.1959C65.5247 94.8091 65.2841 91.6666 65.0917 88.2823C64.9474 84.8979 64.6106 81.6103 64.4182 80.9818C63.889 79.6764 61.9165 79.5314 60.9544 80.7401Z"></path>
                            </svg>
                        </figure>
                        <img src="assets/images/about/14.jpg" className="rounded" alt="about-img"/>
                    </div>
                    <div className="col-lg-6 order-first ps-md-5">
                        <h2 className="mb-4">About me</h2>
                        <p className="mb-0">
                            I’m a passionate Full-Stack Developer, IoT Engineer, and Software Architect with over <span
                            className="text-warning">
                            4
                            years of experience
                        </span> building custom solutions across web development, embedded systems, and
                            telecom platforms. Currently a 4th-year Electrical and Electronics Engineering student, I’ve
                            blended my hardware knowledge with my love for software to create powerful, end-to-end
                            applications.

                            I’ve built my own PHP framework (similar to Django) from scratch, designed an XML-based UI
                            framework in Python with auto-generated JS/CSS. On the hardware side, I’ve worked with ESP32
                            for IoT
                            projects and am integrating medical inventory monitoring systems
                            for healthcare ERP solutions.
                            <br/><br/>

                            My experience spans creating complex dashboards with Next.js, crafting dynamic Odoo modules,
                            and even building custom payment integrations like M-Pesa for online services. I thrive on
                            solving tough problems, whether it’s refining an ORM, structuring scalable APIs, or
                            designing UI components from the ground up.

                            I’m constantly learning and exploring new technologies, with a vision to build systems that
                            bridge software, hardware, and real-world impact. Let’s create something amazing! ✨
                        </p>

                        <p>At the heart of our theme is a commitment to providing a robust and versatile platform
                            that accommodates the diverse needs of digital agencies.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const MobileSection = function () {
    return (
        <section className="overflow-hidden text-light pt-lg-9">
            <div className="container position-relative pt-4 pt-sm-6">
                <div className="row">
                    <div className="col-lg-6 mb-5 mb-sm-8 mb-md-9 mb-lg-0">
                        <h1 className="position-relative lh-base mb-4">Get a mobile app within shortest time possible
                            <span className="position-absolute top-0 start-0 translate-middle mt-1 ms-n5">
						<svg className="fill-primary" width="86" height="105" viewBox="0 0 86 105" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
							<path
                                d="M50.9805 4.63769C51.6165 4.24345 56.4262 10.3524 61.7246 18.1163C67.0564 25.8003 72.7966 35.1061 75.9634 40.6314C82.2158 51.6489 85.8889 61.2748 84.5362 62.0301C83.1029 62.7522 77.2708 54.3462 71.0415 43.3853C67.8986 37.9165 62.7042 28.3199 58.293 20.1246C53.8819 11.9293 50.2874 5.05535 50.9805 4.63769Z"></path>
							<path
                                d="M64.0889 66.7297C63.5001 67.2372 60.6142 65.1098 57.1179 62.637C53.6451 60.2207 49.5285 57.539 47.2336 56.0303C42.5967 52.8997 39.0022 49.8707 39.6599 48.4069C40.2841 47.0231 45.3294 47.9307 50.3923 51.2838C52.9286 52.892 56.9393 56.2802 59.8742 59.6469C62.809 63.0137 64.6779 66.2223 64.0889 66.7297Z"></path>
							<path
                                d="M55.1316 86.0595C55.1297 86.856 48.7063 87.4433 40.9853 87.6368C33.2643 87.8295 24.2555 87.492 19.0669 87.0413C8.68981 86.139 0.434871 83.7683 0.656712 82.218C0.878555 80.6685 9.34356 80.5005 19.5833 81.393C24.7149 81.867 33.5706 82.7978 41.1895 83.6415C48.832 84.5408 55.1571 85.32 55.1316 86.0595Z"></path>
						</svg>
					</span>
                        </h1>

                        <div className="d-sm-flex gap-3 align-items-center">
                            <h6 className="mb-3 mb-sm-0">Global Partner:</h6>
                            <ul className="list-inline flex-wrap mb-0">
                                <li className="list-inline-item">
                                    <a href="#"
                                       className="btn btn-icon btn-lg btn-white bg-primary-hover shadow rounded-circle"><i
                                        className="bi bi-android ga-fw"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"
                                       className="btn btn-icon btn-lg btn-white bg-primary-hover shadow rounded-circle"><i
                                        className="bi bi-apple ga-fw"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"
                                       className="btn btn-icon btn-lg btn-white bg-primary-hover shadow rounded-circle"><i
                                        className="bi bi-slack ga-fw"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"
                                       className="btn btn-icon btn-lg btn-white bg-primary-hover shadow rounded-circle"><i
                                        className="bi bi-google ga-fw"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#"
                                       className="btn btn-icon btn-lg btn-white bg-primary-hover shadow rounded-circle"><i
                                        className="bi bi-git ga-fw"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 position-relative">
                        <div
                            className="bg-body shadow d-none d-sm-block heading-color fw-semibold position-absolute top-0 start-50 translate-middle mt-n6 px-3 py-2 ms-n4">
                            <i className="bi bi-patch-check-fill text-primary me-2"></i>Secure &amp; Verified
                        </div>
                        <div className="avatar avatar-lg position-absolute top-0 start-0 mt-n8 ms-8">
                            <img className="avatar-img rounded-circle d-none d-md-block" src="assets/images/avatar/01.jpg"
                                 alt="avatar"/>
                        </div>
                        <div className="avatar position-absolute bottom-50 start-0 mb-n8 ms-n5">
                            <img className="avatar-img rounded-circle d-none d-lg-block" src="assets/images/avatar/07.jpg"
                                 alt="avatar"/>
                        </div>
                        <div className="avatar position-absolute bottom-0 end-0 me-8">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/14.jpg" alt="avatar"/>
                        </div>
                        <figure className="position-absolute top-0 start-50">
                            <svg width="42" height="54" viewBox="0 0 42 54" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-mode"
                                      d="M17.1284 20.5293C11.8807 27.5916 6.85321 34.5787 1.34862 41.4719C0.678899 40.3825 0.678899 39.819 1.33945 39.0208C4.44037 35.33 7.48624 31.5922 10.4771 27.8076C12.4954 25.2531 14.3853 22.5766 16.422 19.8437C15.0734 18.2284 13.6514 16.6507 12.3761 14.9415C9.45872 11.0441 5.9633 7.71955 2.6422 4.2166C1.63303 3.15538 0.87156 1.84999 0 0.657293C0.66055 -0.263055 1.12844 -0.122185 1.66972 0.525815C2.80734 1.90634 3.99083 3.24929 5.15596 4.60164C8.74312 8.79016 12.3303 12.9787 15.9083 17.1766C16.2477 17.571 16.5505 18.003 17.156 18.7919C17.6055 18.1157 17.8716 17.6837 18.156 17.2705C20.7523 13.4576 23.3578 9.64477 25.9633 5.84129C26.2936 5.35294 26.6697 4.87399 27.1193 4.51712C27.3028 4.36686 27.7431 4.55468 28.3028 4.62042C25.2569 9.92651 21.6055 14.5282 18.0459 19.346C18.4954 19.9189 18.8624 20.4636 19.2936 20.9519C23.3394 25.4785 26.7523 30.4747 30.0367 35.5836C32.6605 39.6688 35.3028 43.754 38.0275 47.7829C39.2385 49.5672 40.6514 51.2107 42 52.9481C41.2844 54.291 40.8624 54.3662 40.0092 53.1077C37.6147 49.586 35.2202 46.0642 32.8991 42.5049C29.3395 37.0392 26 31.4138 22 26.258C20.5046 24.3234 18.8349 22.5296 17.1284 20.5293Z"></path>
                            </svg>
                        </figure>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="iphone-x iphone-x-small rotate-sm-343 m-auto m-sm-0 ms-sm-5 mt-4 z-index-99"
                                     >
                                    <i></i>
                                    <b></b>

                                    <figure className="position-absolute bottom-0 start-0 mb-n7 ms-n6">
                                        <svg className="fill-mode mb-n3" width="103" height="104" viewBox="0 0 103 104"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M102.067 67.8341C100.811 69.4168 99.0712 69.8069 97.1401 69.5024C93.8547 69.0105 90.5851 68.51 87.3361 67.8959C68.297 64.2927 50.1717 57.982 32.8669 49.3216C32.0793 48.9295 31.0206 48.6433 30.6773 48.0103C30.2297 47.147 30.362 45.9897 30.2318 44.9543C31.1056 45.0131 32.1719 44.783 32.8386 45.1793C42.5842 50.9955 53.0343 55.119 63.7656 58.7008C74.2035 62.1959 84.9894 64.212 95.7329 66.4149C97.74 66.8217 99.8864 66.5385 101.962 66.5802C101.993 67.0144 102.03 67.4242 102.067 67.8341Z"></path>
                                            <path
                                                d="M25.2144 22.3383C27.2069 20.7868 28.2795 20.0003 29.9515 21.531C33.261 24.5289 36.5328 27.6088 40.1752 30.1601C50.4513 37.4091 60.6044 44.8477 71.7798 50.6874C75.3353 52.5484 79.1635 53.852 82.8785 55.4012C83.1402 55.5051 83.4469 55.5026 83.7305 55.5332C85.4991 55.803 85.8777 57.0314 85.3156 58.3807C84.7621 59.7459 83.6095 59.5517 82.395 58.9404C76.3471 55.8912 69.9372 53.3865 64.2353 49.8015C53.3501 42.9442 42.8255 35.5022 32.2414 28.2155C29.8887 26.6034 27.8456 24.5776 25.2144 22.3383Z"></path>
                                            <path
                                                d="M85.7587 76.3091C84.2107 78.3774 82.8299 78.3684 80.9544 77.7878C71.7323 74.9442 62.4069 72.4025 53.198 69.4698C39.4789 65.1118 25.8717 60.4679 12.1659 56.0208C10.8442 55.5905 10.0136 55.1193 10.3226 53.6819C10.6328 52.2848 12.0873 51.8238 13.8127 52.5062C20.1406 54.9735 26.4758 57.4163 32.7879 59.8921C45.3387 64.8222 58.1372 68.9215 71.1861 72.2707C75.378 73.336 79.605 74.239 83.8201 75.2713C84.3739 75.4216 84.8548 75.8162 85.7587 76.3091Z"></path>
                                        </svg>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-6 d-none d-sm-block">
                                <div className="iphone-x iphone-x-small rotate-13 m-0 ms-3 mt-xl-n7"
                                     >
                                    <i></i>
                                    <b></b>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
)
}
export {
    HeroSection,
        AboutSection,
        MobileSection
}