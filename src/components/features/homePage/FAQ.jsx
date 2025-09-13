import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const faqsPublic = [
//   {
//     question: 'What is RVnBO?',
//     answer: 'RVnBO is a platform for discovering and hosting verified off-grid stays.',
//   },
//   {
//     question: 'Do I need an account to explore?',
//     answer: 'No, you can browse spots as a guest, but creating an account unlocks full features.',
//   },
//   {
//     question: 'Is it free to join?',
//     answer: 'Yes! Signing up is completely free for travelers and landowners.',
//   },
//   {
//     question: 'How do I host my land?',
//     answer: 'Sign up as a landowner and submit your property details through our listing form.',
//   },
// ];

const faqsCustomer = [
  {
    question: 'How do I book a service?',
    answer: 'Simply select your desired service, choose the location and time, and complete the payment to confirm your booking.',
  },
  {
    question: 'Can I take the service at home?',
    answer: 'Yes, you can.',
  },
  {
    question: 'How can I pay?',
    answer: 'Simply select your desired service, choose the location and time, and complete the payment to confirm your booking.',
  },
  {
    question: 'Will I get a refund if I cancel?',
    answer: 'Simply select your desired service, choose the location and time, and complete the payment to confirm your booking.',
  },
  {
    question: 'What if the operator doesn’t arrive on time?',
    answer: 'Simply select your desired service, choose the location and time, and complete the payment to confirm your booking.',
  },
  {
    question: 'Can I book multiple services at once?',
    answer: 'Simply select your desired service, choose the location and time, and complete the payment to confirm your booking.',
  },
  {
    question: 'How do I earn rewards and bonuses?',
    answer: 'Simply select your desired service, choose the location and time, and complete the payment to confirm your booking.',
  },
];

// const faqsLandowner = [
//   {
//     question: 'How do I list my land?',
//     answer: 'Sign up as a landowner and submit your property details through our listing form.',
//   },
//   {
//     question: 'Is it safe to host travelers?',
//     answer: 'Yes, RVnBO verifies all guests and provides secure booking and messaging systems.',
//   },
//   {
//     question: 'How much can I earn?',
//     answer: 'Earnings depend on your land, amenities, and pricing. You can update rates anytime.',
//   },
//   {
//     question: 'Do I need permits to host?',
//     answer: 'It depends on local regulations. RVnBO encourages hosts to comply with all local laws.',
//   },
// ];

export default function FAQs({ role }) {
  
//   const faqs =
//     role === 'traveler'
//       ? faqsTraveler
//       : role === 'landowner'
//       ? faqsLandowner
//       : faqsPublic;

const faqs = faqsCustomer;

  return (
     <div className=''>
      <Box sx={{ width: '100%', mx: 'auto', mt: 4 }}>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            boxShadow: 'none',
            border: '1px solid #e0e0e0',
            mb: 2,
            // borderRadius: '8px',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{ minHeight: 56 }}
          >
            <Typography sx={{ fontSize: '0.95rem', fontWeight: 500 }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: '0.85rem', color: '#555', textAlign: 'start' }}
            >
              <span style={{ fontWeight: 'bold' }}>Ans:</span> {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
    </div>
  );
}
