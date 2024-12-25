import { FaMobileAlt, FaMapMarkerAlt, FaUserCheck, FaCarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <>
      <span id="steps"></span>
      <div className="bg-white dark:bg-black py-8">
        <div className="max-w-5xl mx-auto p-8 min-h-screen">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif dark:text-white"
            >
              How It Works
            </h1>
          </div>

          <div className="relative">
            {/* Continuous Vertical Line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-[#0D2F3A] h-full"></div>

            {/* Step 1 */}
            <motion.div
              className="flex items-center mb-16 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-1/2 pr-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  SignUp
                </h3>
                <p className="text-gray-600 mt-4 dark:text-gray-300">
                  Download the app and sign up. Signing up is easy and takes just a few moments. You'll need to provide basic details, verify your email, and create a secure password. Make sure to use a unique password for added security!
                </p>
              </div>
              <motion.div
                className="relative w-1/2 flex justify-center group"
                style={{ transform: 'translateY(20px)' }}
                initial={{ scale: 0, rotate: 45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-48 h-48 bg-[#0D2F3A] text-white flex items-center justify-center rounded-full text-lg font-bold group-hover:bg-[#0D2F3A] group-hover:shadow-[0_0_80px_#0D2F3A] dark:group-hover:shadow-[0_0_80px white] transition duration-300">
                  <FaMobileAlt size={48} />
                </div>
              </motion.div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="flex items-center mb-16 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative w-1/2 flex justify-center group"
                style={{ transform: 'translateY(20px)' }}
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-48 h-48 bg-[#0D2F3A] text-white flex items-center justify-center rounded-full text-lg font-bold group-hover:bg-[#0D2F3A] group-hover:shadow-[0_0_80px_#0D2F3A] dark:group-hover:shadow-[0_0_80px white] transition duration-300">
                  <FaUserCheck size={48} />
                </div>
              </motion.div>
              <div className="w-1/2 pl-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Make Profile
                </h3>
                <p className="text-gray-600 mt-4 dark:text-gray-300">
                  Enter your details and set up your profile. Add a profile picture, enter your contact details, and provide any other relevant information to help others identify you.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="flex items-center relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-1/2 pr-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Book Cab
                </h3>
                <p className="text-gray-600 mt-4 dark:text-gray-300">
                  Browse through available rides or post your own. Filter by location, timing, and pricing to find a match that suits your schedule. Posting a ride is equally simple—just enter the details and let others reach out!
                </p>
              </div>
              <motion.div
                className="relative w-1/2 flex justify-center group"
                style={{ transform: 'translateY(20px)' }}
                initial={{ scale: 0, rotate: 45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-48 h-48 bg-[#0D2F3A] text-white flex items-center justify-center rounded-full text-lg font-bold group-hover:bg-[#0D2F3A] group-hover:shadow-[0_0_80px_#0D2F3A] dark:group-hover:shadow-[0_0_80px white] transition duration-300">
                  <FaCarAlt size={48} />
                </div>
              </motion.div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="flex items-center mb-16 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative w-1/2 flex justify-center group"
                style={{ transform: 'translateY(20px)' }}
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-48 h-48 bg-[#0D2F3A] text-white flex items-center justify-center rounded-full text-lg font-bold group-hover:bg-[#0D2F3A] group-hover:shadow-[0_0_80px_#0D2F3A] dark:group-hover:shadow-[0_0_80px white] transition duration-300">
                  <FaMapMarkerAlt size={48} />
                </div>
              </motion.div>
              <div className="w-1/2 pl-8">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  Track and Offer
                </h3>
                <p className="text-gray-600 mt-4 dark:text-gray-300">
                  Confirm your ride and enjoy the journey! After confirming, you can contact the driver, track the ride, and get ready for a convenient travel experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
