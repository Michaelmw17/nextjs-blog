import Image from 'next/image';

export default function Projects() {
  return (
    <>
      <div className="project-container m-2 ">
        <h1 className="m-2 mt-10  font-semibold dark:text-white md:mt-16 text-3xl">
          Projects
        </h1>
        <div className="lg:flex-row xl:flex justify-center mt-26 md:justify-end ">
          <div className="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-end">
              <div className="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400">
                <Image
                  className="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400"
                  alt="JDP Logo"
                  src="/images/apple-touch-icon.png"
                  width="200"
                  height="200"
                />
              </div>
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
              JDP Electrical Services
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-200">
              JDP Electrical has been providing Electrical Services throughout
              Sydney, North Shore Region and surrounding areas for over 30 years
              Brothers Dominic and Joseph Panetta have built a reputable
              electrical contracting business specialising in all electrical
              installations and repairs for Residential and Commercial sectors.
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-200">
              Create a ReactJS Single Page Application with Landing page &
              Deployed through AWS Web Services. Liaised weekly with the client
              to develop frontend experience. Solo developed website from
              design, deploy & domain transfer.
            </p>
            <div className="mb-14 md:mb-30"></div>
            <div className="flex-row justify-end mt-6">
              <small>Solo project.</small>
              <br />
              <a
                href="https://www.jdpelectrical.com.au/"
                className="text-xl font-medium text-blue-600 dark:text-blue-500"
              >
                JDP App!
              </a>
              <div className="text-xl font-medium text-blue-600 dark:text-blue-500">
                &
              </div>
              <a
                href="https://github.com/Michaelmw17/computing-machine"
                className="text-xl font-medium text-blue-600 dark:text-blue-500"
              >
                <i className="fab fa-github  fa-1x" title="github icon"></i>
              </a>
            </div>
          </div>
          <div className="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-end">
              <div className="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400">
                <Image
                  alt="BAP logo"
                  src="/images/Project/Images/202a200d-dc06-4960-a219-348c189ab453_200x200.png"
                  width="100"
                  height="100"
                />
              </div>
            </div>

            <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
              Business Advertisement Portal
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-200">
              Advertisement portal is made by 4 students currently completing a
              certification in full stack web development from the University of
              Sydney. We are creating this website to meet our requirements and
              also help the end-users as well. We thought about small-to-medium
              enterprises (SME’s) that have a product-based business model. They
              have taken a huge blow as COVID-19 has bought about a recession,
              forcing people to reduce their expenses. The Business
              Advertisement Portal came into existence with the thought of
              helping these SME’s. Almost all of the current advertisement
              channels are revenue oriented, by providing a free service.
            </p>

            <div className="flex-row justify-end mt-2">
              <small>With - Aman, Felipe, Prabh.</small>
              <br />
              <a
                href="https://business-advertisement-portal.herokuapp.com/"
                className="text-xl font-medium text-blue-600 dark:text-blue-500"
              >
                BAP App!
              </a>
              <div className="text-xl font-medium text-blue-600 dark:text-blue-500">
                &
              </div>
              <a
                href="https://github.com/prabhm512/business-advertisement-portal"
                className="text-xl font-medium text-blue-600 dark:text-blue-500"
              >
                <i className="fab fa-github  fa-1x" title="github icon"></i>
              </a>
            </div>
          </div>
          <div className="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-end">
              <div className="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400">
                <Image
                  alt="Basketball avatar"
                  src="/images/Project/Images/basketball-removebg-preview.png"
                  width="100"
                  height="100"
                />
              </div>
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
              Basket News
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-200 mb-24 md:mb-24">
              Welcome to the Basket News web app! Are you a fan of the NBA or
              have a favourite player? Basket News brings all this useful
              information, want to keep up to date on this seasons player
              statistics? Do you want to easily pull up some news archives about
              your athlete into one place. Don't believe us? Just try it out and
              you'll never need to search anywhere else for your NBA stats or
              news!
            </p>
            <div className="mb-24 md:mb-36"></div>
            <div className="flex-row justify-end mt-6">
              <small>With - Andre Grech, Rachelle Barredo.</small>
              <br />
              <a
                href="https://agr2020xman.github.io/Project_1-Basketball-News/"
                className="text-xl font-medium text-blue-600 "
              >
                Basket News App!
              </a>
              <div className="text-xl font-medium text-blue-600 dark:text-blue-500">
                &
              </div>
              <a
                href="https://github.com/AGr2020Xman/Project_1-Basketball-News"
                className="text-xl font-medium text-blue-600 dark:text-blue-500"
              >
                <i className="fab fa-github  fa-1x" title="github icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-md px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <div className="flex justify-center -mt-16 md:justify-end">
            <div className="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400">
              <Image
                className="object-cover w-20 h-20 border-2 border-indigo-500 rounded-full dark:border-indigo-400"
                alt="Eco Logo"
                src="/images/Project/Images/EcoGetawayLogo.jpg"
                width="100"
                height="100"
              />
            </div>
          </div>

          <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
            Eco Getaway
          </h2>

          <p className="mt-2 text-gray-600 dark:text-gray-200">
            Looking for your next environmental getaway? Choose an application
            that advertises Low Environmental impact holiday accommodation. The
            site promotes Eco-friendly getaways and provides information on each
            type of accommodation, sign in, fill out the registration form to
            view our gallery of photos and enquiry options.
          </p>
          <div className="flex-row justify-end mt-5">
            <small>Solo project.</small>
            <br />
            <a
              href="https://eco-getaway.herokuapp.com/"
              className="text-xl font-medium text-blue-600 dark:text-blue-500"
            >
              Eco App!
            </a>
            <div className="text-xl font-medium text-blue-600 dark:text-blue-500">
              &
            </div>
            <a
              href="https://github.com/Michaelmw17/environmental-build"
              className="text-xl font-medium text-blue-600 dark:text-blue-500"
            >
              <i className="fab fa-github  fa-1x" title="github icon"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
