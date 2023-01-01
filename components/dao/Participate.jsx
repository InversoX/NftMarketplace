import Faq from "./Faq";
import VideoBlock from "./VideoBlock";

const Participate = () => {
  return (
    <>
      {/* <!-- Video / FAQ --> */}
      <section className="bg-light-base py-24 dark:bg-jacarta-800">
        <div className="container">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="mb-6 text-center font-display text-3xl font-medium text-jacarta-700 dark:text-white">
              How to Participate in the Presale
            </h2>
            <p className="text-lg dark:text-jacarta-300">
              VSX can be used to 
            </p>
          </div>
          <div className="lg:flex lg:flex-nowrap">
            <div className="lg:w-[59%]">
              <VideoBlock />
            </div>
            {/* End VideoBlock */}

            <div className="lg:w-[41%] lg:pl-24">
              <p className="mb-6 dark:text-jacarta-300">
                VSX Token is build to become the future of non custodial CryptoVerse fully Decentralized. As a concept and a
                technology, VSX can transform the structure of a centralized business into a decentralized one
                by empowering member-owned communities and removing centralized
                leadership.
              </p>
              <a
                href="#"
                className="mb-8 inline-block text-sm font-bold text-accent"
              >
                Learn More
              </a>
              <Faq />
            </div>
            {/* End Faq */}
          </div>
        </div>
      </section>
      {/* <!-- end video / faq -->   */}
    </>
  );
};

export default Participate;
