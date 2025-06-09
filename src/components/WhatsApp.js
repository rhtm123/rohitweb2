import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

export default function WhatsAppContact() {
  const phoneNumber = "+919518901902" // Replace with your actual WhatsApp number
  const message = "Hi! I'm interested in learning more about your courses."
  const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(message)}`

  return (
      <div className="">

        <div className="text-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg bg-white text-green-600 hover:bg-gray-100 border-none"
          >
            <FaWhatsapp className="text-2xl mr-3" />
            Contact via WhatsApp
          </a>
          <p className="mt-4 opacity-90">Click to start a conversation on WhatsApp</p>
        </div>


      </div>
  )
}
