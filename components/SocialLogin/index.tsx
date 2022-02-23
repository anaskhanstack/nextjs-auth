import { FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div className="flex mb-4 mt-2">
      <div className="rounded-full border-2 p-2 mr-2">
        <FaFacebookF color="gray" size={20} />
      </div>
      <div className="rounded-full border-2 p-2 mr-2">
        <FaLinkedinIn color="gray" size={20} />
      </div>
      <div className="rounded-full border-2 p-2">
        <FaGoogle color="gray" size={18} />
      </div>
    </div>
  );
}
