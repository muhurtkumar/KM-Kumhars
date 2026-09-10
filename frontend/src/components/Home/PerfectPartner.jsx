import PartnerHero from "../../assets/Hero/PartnerHero.png";
import PartnerSideImage from "../../assets/Hero/PartnerSideImage.png";
import VaseImage from "../../assets/Hero/Vase.png";

export default function PerfectPartner() {
  return (
    <section className="w-full overflow-hidden font-[Poppins]">
      <div className="mx-auto max-w-[1600px] px-6 py-10 sm:px-8 sm:py-14 md:px-10 md:py-10 lg:px-[38px] lg:py-7">
        <div className="relative min-h-0 lg:min-h-[clamp(650px,62.99vw,800px)]">
          {/* MOBILE + TABLET HEADING */}
          <div className="relative z-40 w-full lg:hidden">
            <div className="flex items-center">
              <p className="font-[Poppins] text-[15px] font-black uppercase tracking-[0.18em] text-[#757575]">
                Perfect Partner
              </p>
            </div>

            <h1 className="mt-4 mb-[-20px] md:mb-[-5px] max-w-[610px] font-serif text-[25px] font-black leading-[0.98] tracking-[-0.03em] text-[#171717] sm:text-[38px] md:max-w-[760px] md:text-[38px] font-[Poppins]">
              Your Trusted Partner in{" "}
              <br />
              <span className="italic text-[#777852] font-[Poppins]">Interior Design</span>
            </h1>
          </div>

          {/* DESKTOP LEFT CONTENT */}
          <div className="relative z-40 hidden w-full lg:absolute lg:left-0 lg:top-[clamp(40px,4.33vw,55px)] lg:block lg:w-[47%]">
            <div className="flex items-center">
              <p className="font-[Poppins] text-[15px] font-black uppercase tracking-[0.18em] text-[#757575] lg:text-[clamp(11px,1.18vw,15px)]">
                Perfect Partner
              </p>
            </div>

            <h1 className="mt-8 max-w-[610px] font-serif text-[25px] font-black leading-[0.98] tracking-[-0.03em] text-[#171717] sm:text-[38px] md:max-w-[760px] md:text-[38px] lg:mt-[clamp(18px,2.2vw,32px)] lg:max-w-[clamp(400px,47vw,610px)] lg:text-[40px]">
              Your Trusted Partner in{" "}
              <br />
              <span className="italic text-[#777852]">Interior Design</span>
            </h1>

            <p className="mt-8 max-w-[530px] text-[13px] leading-7 text-[#696969] md:max-w-[760px] md:text-[18px] md:leading-9 lg:mt-[clamp(18px,2.2vw,32px)] lg:max-w-[clamp(390px,41.7vw,530px)] lg:text-[clamp(11px,1.26vw,15px)] lg:leading-[clamp(1.6,1.8vw,1.9)] font-[Poppins]">
              From private homes to commercial spaces, we bring your vision to
              life — blending design, function, and craftsmanship into interiors
              that feel considered down to the last detail.
            </p>

            <a
              href="#projects"
              className="group relative mt-8 inline-flex h-[46px] w-[168px] items-center justify-center gap-5 overflow-hidden rounded-[10px] bg-[#87864E] text-[15px] font-semibold uppercase tracking-[0.1em] text-white sm:text-[16px] md:h-[76px] md:w-[312px] md:text-[18px] lg:h-[52px] lg:w-[168px] lg:gap-0 lg:text-[13px] font-[Poppins]"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#6f6e3f] transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative z-10">Our Projects</span>
            </a>

            {/* Desktop-only bottom label */}
            <div className="mt-16 hidden items-start gap-8 lg:mt-[clamp(35px,4.5vw,64px)] lg:flex lg:gap-[clamp(20px,2.5vw,32px)]">
              <span className="mt-2 h-px w-24 bg-[#777852] lg:mt-[clamp(5px,0.55vw,8px)] lg:w-[clamp(45px,7.5vw,96px)]" />
              <p className="text-[11px] font-medium uppercase leading-6 tracking-[0.35em] text-[#666666] lg:text-[clamp(7px,0.86vw,11px)] lg:leading-[clamp(1.5,1.9vw,1.8)]">
                Spaces That Inspire
                <br />
                Better Living
              </p>
            </div>
          </div>

          {/* Right Visual Composition */}
          <div className="relative mt-14 h-[clamp(540px,96vw,610px)] w-full md:mt-10 md:h-[800px] lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:h-[clamp(650px,62.99vw,800px)] lg:w-[60%]">
            {/* Main Image + Vase Group */}
            <div className="absolute left-0 top-0 z-10 h-[clamp(370px,65vw,500px)] w-[76%] md:left-0 md:right-auto md:h-[620px] md:w-[76%] lg:right-[clamp(155px,16.55vw,210px)] lg:left-auto lg:h-[clamp(530px,44.5vw,565px)] lg:w-[clamp(320px,31.5vw,400px)]">
              <div className="absolute inset-0 z-10 overflow-hidden">
                <img
                  src={PartnerHero}
                  alt="Perfect partner"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute bottom-[clamp(12px,2vw,18px)] left-[clamp(-78px,-11vw,-52px)] z-20 block h-[clamp(205px,36vw,275px)] w-[clamp(135px,23vw,175px)] md:bottom-[20px] md:left-[-110px] md:h-[350px] md:w-[225px] lg:bottom-[clamp(25px,2.75vw,35px)] lg:left-[clamp(-115px,-11vw,-140px)] lg:h-[clamp(290px,30.7vw,390px)] lg:w-[clamp(180px,19.3vw,245px)]">
                <img
                  src={VaseImage}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Decorative text */}
            <div className="absolute right-[-15%] sm:right-[-5%] top-[clamp(104px,8vw,65px)] z-30 block md:top-[80px] md:right-[clamp(30px,3.55vw,45px)] lg:right-[clamp(30px,3.55vw,45px)] lg:top-[clamp(20px,1.97vw,25px)]">
              {/* Small screens: no line break */}
              <p className="font-['Allura',cursive] text-[clamp(29px,5vw,38px)] leading-[0.9] tracking-[-0.01em] text-[#606246] -rotate-[90deg] md:hidden">
                Spaces that inspire
              </p>

              {/* Medium and desktop: retains the line break */}
              <p className="hidden font-['Allura',cursive] text-[38px] leading-[0.9] tracking-[-0.01em] text-[#606246] -rotate-[20deg] md:block lg:text-[clamp(30px,2.99vw,38px)]">
                Spaces
                <br />
                that inspire
              </p>
              <span className="ml-auto mt-[clamp(16px,3vw,24px)] block h-px w-[clamp(32px,6vw,40px)] bg-[#777852] md:mt-7 md:w-12 lg:mt-[clamp(18px,2.2vw,28px)] lg:w-[clamp(28px,2.85vw,36px)]" />
            </div>

            {/* Olive Information Block */}
            <div className="absolute bottom-[clamp(76px,13vw,84px)] right-[clamp(24%,26vw,28%)] z-40 block h-[clamp(135px,25vw,165px)] w-[clamp(150px,31vw,205px)] bg-[#777852] px-[clamp(24px,4vw,32px)] py-[clamp(19px,3vw,26px)] text-white md:bottom-[80px] md:right-[25%] md:z-40 md:h-[220px] md:w-[258px] md:px-10 md:py-12 lg:bottom-[clamp(350px,32.8vw,417px)] lg:right-[clamp(10px,1.2vw,15px)] lg:z-20 lg:h-[clamp(175px,16.5vw,210px)] lg:w-[clamp(160px,15.35vw,195px)] lg:px-[clamp(24px,2.5vw,32px)] lg:py-[clamp(35px,3.78vw,48px)]">
              <p className="text-[clamp(9px,1.7vw,11px)] font-light uppercase leading-[clamp(1.5rem,3vw,1.75rem)] tracking-[0.3em] md:text-[14px] md:leading-9 md:tracking-[0.35em] lg:text-[clamp(8px,0.86vw,11px)] lg:leading-[clamp(1.6,2.2vw,1.9)] font-[Poppins]">
                Design
                <br />
                Build
                <br />
                Transform
              </p>
              <span className="mt-[clamp(16px,3vw,24px)] block h-px w-[clamp(28px,5vw,36px)] bg-white md:mt-8 md:w-12 lg:mt-[clamp(20px,2.2vw,28px)] lg:w-[clamp(24px,2.5vw,32px)]" />
            </div>

            {/* Secondary Image */}
            <div className="absolute bottom-[clamp(118px,19vw,120px)] right-0 z-30 h-[clamp(175px,37vw,235px)] w-[clamp(48%,50vw,52%)] overflow-hidden border-[4px] border-white md:bottom-[125px] md:right-0 md:h-[300px] md:w-[42%] md:border-[5px] lg:right-[clamp(-20px,4.7vw,60px)] lg:bottom-[clamp(90px,calc(43vw_-_320px),200px)] lg:h-[clamp(215px,20.1vw,255px)] lg:w-[clamp(225px,21.25vw,270px)] lg:border-[clamp(3px,0.4vw,5px)]">
              <img
                src={PartnerSideImage}
                alt="Dining interior"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Desktop Bottom Right Label */}
            <div className="absolute bottom-[-48px] right-0 z-30 hidden items-center gap-5 xl:flex">
              <span className="h-px w-[170px] bg-[#777852]" />
              <p className="whitespace-nowrap text-[10px] uppercase tracking-[0.35em] text-[#777852]">
                More Than Spaces
              </p>
              <span className="h-px w-8 bg-[#777852]" />
            </div>
          </div>

          {/* MOBILE + MEDIUM CONTENT */}
          <div className="relative z-40 mt-[-28px] w-full lg:hidden">
            <p className="max-w-[530px] text-[13px] leading-7 text-[#696969] md:max-w-[760px] md:text-[15px] md:leading-9 font-[Poppins]">
              From private homes to commercial spaces, we bring your vision to
              life — blending design, function, and craftsmanship into interiors
              that feel considered down to the last detail.
            </p>

            <a
              href="/projects"
              className="group relative mt-6 inline-flex h-[46px] w-[132px] items-center justify-center gap-5 overflow-hidden rounded-[10px] bg-[#87864E] text-[12px] font-semibold uppercase tracking-[0.1em] text-white sm:text-[12px] md:h-[49px] md:w-[150px] md:text-[13px] font-[Poppins]"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#6f6e3f] transition-transform duration-500 ease-out group-hover:scale-x-100" />
              <span className="relative z-10">Our Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}