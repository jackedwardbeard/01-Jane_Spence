import about from '../../images/about.svg'
import faq from '../../images/faq.svg'


export const About = {
    id: 'about',
    darkBackground: false,
    darkText: true,
    showButton: false,
    darkButton: true,
    darkButtonText: false,
    buttonText: 'Return To Home',
    buttonLocation: 'faq',
    title: 'About',
    body: 'Jane Spence is an Accredited Pharmacist and Diabetes Educator who has been a part of the industry for over 10 years. Services include Home Medication Reviews (HMRs) and Diabetes Education. Jane is available and ready to answer your questions!',
    img: about,
    imageLeft: true
}

export const FAQ = {
    id: 'faq',
    darkBackground: true,
    darkText: false,
    showButton: true,
    darkButton: false,
    darkButtonText: true,
    buttonText: 'Have any more questions?',
    buttonLocation: 'about',
    title: 'FAQ',
    body: 'Template for FAQ',
    img: faq,
    imageLeft: false

}
