import PolicyTermsWork from '@/components/Shared/PolicyTermsWork'
import Heading from '@/components/ui/Heading'
import React from 'react'

export default function TermsPage() {
    const terms = [
    {
      "title": "1. Acceptance of Terms",
      "content": ["By accessing or using our salon services via our website or mobile application, you agree to be bound by these Terms and Conditions, our Privacy Policy, and any other policies we may notify you of."]
    },
    {
      "title": "2. Booking & Appointments",
      "content": [
        "All appointments must be booked in advance, either online or via phone.",
        "Appointments are subject to availability.",
        "We reserve the right to reschedule or cancel appointments due to unforeseen circumstances."
      ]
    },
    {
      "title": "3. Pricing & Payments",
      "content": [
        "All prices listed are subject to change without prior notice.",
        "Prices may vary depending on hair length, service type, or additional requests.",
        "Payment must be made in full at the time of service or through the app in advance (if applicable)."
      ]
    },
    {
      "title": "4. Cancellation & Refund Policy",
      "content": [
        "Cancellations must be made at least 24 hours before your appointment.",
        "Late cancellations or no-shows may result in a cancellation fee.",
        "Refunds are only issued in the case of unsatisfactory service and must be requested within 24 hours."
      ]
    },
    {
      "title": "5. Arrival Time",
      "content": [
        "Please arrive at least 10 minutes before your scheduled appointment.",
        "Late arrivals may shorten your service time or require rescheduling."
      ]
    },
    {
      "title": "6. Health & Safety",
      "content": [
        "Please inform us of any allergies, medical conditions, or skin sensitivities prior to receiving treatments.",
        "We follow strict hygiene protocols for the safety of our clients and staff."
      ]
    },
    {
      "title": "7. Personal Belongings",
      "content": [
        "We are not responsible for loss or damage to personal belongings brought into the salon."
      ]
    },
    {
      "title": "8. Use of Photos & Reviews",
      "content": [
        "By sharing your review or allowing us to take 'before and after' photos, you grant us permission to use them for promotional purposes (website, social media, etc.), unless otherwise stated."
      ]
    },
    {
      "title": "9. Code of Conduct",
      "content": [
        "We expect all clients and staff to behave respectfully.",
        "We reserve the right to refuse service to anyone behaving inappropriately."
      ]
    },
    {
      "title": "10. Changes to Terms",
      "content": ["We may update these Terms and Conditions from time to time. Continued use of our services implies your acceptance of any changes."]
    }
  ]
  return (
    <div className='container mx-4 xl:mx-auto my-14 md:my-20 border border-gray-300 rounded-2xl p-4 lg:p-8 bg-white '>
        <div className='mb-6 md:mb-10'>
            <Heading text="Terms & Conditions"/>
        </div>

    {/* Policies */}

    <div>
        <PolicyTermsWork sections = {terms}/>
    </div>
        
    </div>
  )
}
