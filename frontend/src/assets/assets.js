import im from './mandodari.jpg';
import im1 from './mai mara.jpg';
import im2 from './lovina.jpg';
import im3 from './forget.png';
import im4 from './Kameliya.jpg';
import im5 from './diary of.jpg';
import im6 from './makaranandaya.jpg';
import img1 from './pilot.png';
import img2 from './dictonary.png';
import img3 from './art.png';
import img4 from './IT.png';
import img5 from './Atlas Book.jpg';
import img6 from './color pencil.png';
import img7 from './Atlas Tape.jpg';




import logo from './logo shop 1.png'
import hero_img from './first.png'
import hero_img1 from './wtiting.png'
import hero_img2 from './papers.jpg'
import hero_img3 from './stationery.jpg'
import cod from './cod.webp'
import delivary from './delivery.webp'
import payment from './payment.webp'
import price from './price.webp'
import pay from './payments.webp'
import banner1 from "./firstBanner.png"
import banner2 from "./banner2.png"
import banner3 from "./banner3.jpg"
import aboutImg from "./about.jpg"
import visionImg from "./Vision.png"
import visionImg1 from "./mission.jpg"
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import pay_here_logo from './PayHere-Logo.png'
import webxpay_logo from './webXpay logo.png'
import cross_icon from './cross_icon.png'
import NewRelese from '../Pages/NewRelese';







export const assets = {
    logo,
    hero_img,
    hero_img1,
    hero_img2,
    hero_img3,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    pay_here_logo,
    webxpay_logo,
    cross_icon,
    NewRelese,
    cod,
    delivary,
    payment,
    price,
    pay,
    banner1,
    banner2, 
    banner3,
    aboutImg,
    visionImg,
    visionImg1,

    


}

export const products = [
    {
        _id: "0001",
        name: "Mandodari",
        author : "Mohan Raj Madawela",
        description: "Mandodari is a Sinhala novel by Mohan Raj Madawala that intertwines two timelines, following the protagonist, Tharushi—also known as Mandodari—as she mysteriously travels between them.  The book delves into themes of history, emotion, and profound meaning, offering readers a captivating narrative experience.",
        price: 1650,
        image: [im],
        category: "Novel",
        isbn : 97862460394,
        subCategory : "Sinhala",
        publisher : "Sarasavi Publisher",
        newRelease: true
    },
    {
        _id: "0002",
        name: "Mai Mara Prasangaya",
        author : "Mahinda Prasad Masibula",
        description: "Mai Mara Prasangaya is a Sinhala novel by Mahinda Prasad Masimbula that explores themes of love, loss, and the transient nature of human connections. The story follows characters like Samida and Sancharani, delving into their emotional journeys and the complexities of their relationships. Noted for its poetic language and vivid imagery, the novel offers a poignant reflection on unrequited love and the memories that linger long after",
        price: 750,
        image: [im1],
        category: "Novel",
        isbn : 9786240017039 ,
        subCategory : "Sinhala",
        publisher : "M.D. Gunasena & Co. (Pvt) Ltd",
        newRelease: true
    },
    {
        _id: "0003",
        name: "Loveena",
        author: "Mohan Raj Madawela",
        description: "Loveena is a Sinhala historical novel by Mohan Raj Madawala, blending romance, myth, and social commentary. Set during British colonial rule in Sri Lanka, it narrates the forbidden love between British Governor Thomas Maitland and Loveena, a young dancer of mixed Portuguese and low-caste Sinhalese heritage. The story delves into themes of caste discrimination, women's oppression, and the struggle for identity, enriched with elements of magical realism. Loveena's tale intertwines with historical figures like Daskon and Pramila, offering a poignant reflection on societal norms and personal resilience",
        price: 1650,
        image: [im2],
        category: "Novel",
        isbn : 9554690010 ,
        subCategory : "Sinhala",
        publisher : "Sarasavi Publisher",
        newRelease: true
    },
    {
        _id: "0004",
        name: "Forget Me Not",
        author: "Charitha Prawardhi Bandara",
        description: "Forget Me Not is a Sinhala novel by Charitha Prawardhi Bandara. It tells a touching story through letters between two pen pals, exploring themes of love, memory, and emotional struggle in a gentle and poetic way.",
        price: 700,
        image: [im3],
        category: "Novel",
        isbn : 9786249468702,
        subCategory : "Sinhala",
        publisher : "Author Publication",
        newRelease: true
    },
    {
        _id: "0005",
        name: "Camellia",
        author: "Virajini Thennacoon",
        description: "Camellia is a Sinhala novel by award-winning author Virajini Thennakoon. Set during the British colonial era in Sri Lanka, the story delves into the lives of Indian Tamil laborers brought to work on tea plantations, highlighting their hardships and the exploitation they faced. Through characters like Geoffrey, a British planter driven by ambition, and his empathetic wife Anita, the novel portrays the stark contrasts of colonial society. The narrative employs elements of magical realism to vividly depict the struggles and",
        price: 950,
        image: [im4],
        category: "Novel",
        isbn :   9553128815 ,
        subCategory : "Sinhala",
        publisher : "Sarasavi Publisher",
        newRelease: true
    },
    {
        _id: "0006",
        name: "Diary Of a WimpyKid",
        author: "Jeff Kiney",
        description: "Diary of a Wimpy Kid is a humorous illustrated novel by Jeff Kinney that follows the misadventures of middle schooler Greg Heffley. Presented in a diary format with comical drawings, the book captures Greg's attempts to navigate the challenges of adolescence, including friendship troubles, family dynamics, and the quest for popularity. Its relatable themes and engaging storytelling have made it a favorite among young readers worldwide",
        price: 3000,
        image: [im5],
        category: "Children's Story",
        isbn : 9780241760260,
        subCategory : "English",
        publisher : "Penguin Books",
        newRelease: true
    },
    {
        _id: "0007",
        name: "Makaranandaya",
        author: "Virajini Thennakoon",
        description: "Makaranandaya is a Sinhala novel by Virajini Thennakoon, published by Sarasavi Publishers. This 380-page novel, awarded the 2019 State Literary Award for Best Novel, intricately weaves together multiple narratives without a single main character. It delves into themes of courage, repressed desires, selfishness, and blind faith within Sri Lankan society, spanning nearly three decades of cultural shifts. The story is presented with ample use of allegory and a touch of magical realism, offering readers a captivating and thought-provoking experience. ",
        price: 500,
        image: [im6],
        category: "Novel",
        isbn : 9553112498,
        subCategory : "Sinhala",
        publisher : "Sarasavi Publisher",
        newRelease: true
    },
    {
        _id: "0008",
        name: "Pilot Paper Grade 03",
        description: "Akura Pilot Monthly Evaluation Revision Papers for Grade 3 Mathematics – English Medium",
        price: 450,
        image: [img1],
        category: "Papers",
        subCategory: "Grade 01 - Grade 05",
        newRelease: false
    },
    {
        _id: "0009",
        name: "Pocket Dictionary",
        description: "Rathna English–Sinhala Pocket Dictionary",
        price: 1500,
        image: [img2],
        category: "Work Books",
        newRelease: false
    },
    {
        _id: "0010",
        name: "Chithra Kalawa",
        description: "Master Guide A/L Arts Past Papers Book (2014–2024) – Sinhala Medium",
        price: 850,
        image: [img3],
        category: "Papers",
        subCategory: "A/L",
        newRelease: false
    },
    {
        _id: "0011",
        name: "Information & Com.Technology",
        description: "Master Guide A/L ICT Past Papers Book (2014–2024) – Sinhala Medium",
        price: 850,
        image: [img4],
        category: "Papers",
        subCategory: "A/L",
        newRelease: false
    },
    {
        _id: "0012",
        name: "Single Rule Writing Book Page 40",
        description: "Atlas Single Rule Writing Book - Page 40",
        price: 100,
        image: [img5],
        category: "Writing Books",
        newRelease: false
    },
    {
        _id: "0013",
        name: "Color Pencils",
        description: "Atlas 12 Colors Color Pencils",
        price: 520,
        image: [img6],
        category: "Stationary",
        newRelease: false
    },
    {
        _id: "0014",
        name: "Tape Roll",
        description: "Atlas Medium size Tape Roll",
        price: 200,
        image: [img7],
        category: "Stationary",
        newRelease: false
    }
    
    
    

]