import React from 'react'
import './Blogs.css'
import useIntersectionObserver from '../../utils/IntersectionObserver'
import leftObserver from '../../utils/LeftObserver'

import DragonFruit from '../../assets/blog-project-images/Dragon-Fruit.jpg'
import RamprashadSen from '../../assets/blog-project-images/ramprashad-sen.jpg'
import LaxmiPuja from '../../assets/blog-project-images/laxmi-puja.jpg'
import DhanaLaxmi from '../../assets/blog-project-images/dhana-laxmi.jpg'
import DhanaKendra from '../../assets/blog-project-images/dhana-kendra.jpg'
import Annapurna from '../../assets/blog-project-images/annapurna.jpg'
import SisterNivedita from '../../assets/blog-project-images/Sister-Nivedita.jpg'
import Nilkonthi from '../../assets/blog-project-images/Nilkonthi.jpg'
import ChaatPujo from '../../assets/blog-project-images/chaat-pujo.jpeg'
import GoatAstami from '../../assets/blog-project-images/goat-astami.jpeg'
import RassPurnima from '../../assets/blog-project-images/rass-purnima.jpg'
import Hemonto from '../../assets/blog-project-images/hemonto.jpg'
import Silchar from '../../assets/blog-project-images/Silchar.jpg'
import BipinChandraPal from '../../assets/blog-project-images/bipin-chandra-pal.jpg'
import Jcb from '../../assets/blog-project-images/Jagadish-Chandra-Bose.jpg'
import Bm from '../../assets/blog-project-images/Bharat-Mata.jpg'
import rp from '../../assets/blog-project-images/rajendra-prashad.jpeg'
import hoB from '../../assets/blog-project-images/hoB.jpg'
import cpujo from '../../assets/blog-project-images/chhath_puja.avif'


const Blogs = () => {

  useIntersectionObserver()
  leftObserver()

  const allBlogs = [
    { img: DragonFruit ,title: "ড্রাগন ফলের বাজার ও চাষ পদ্ধতি", href: "https://www.amaderbharat.com/dragon-fruit-market-and-cultivation-methods/", date: '2023-7-20'},
    { img: RamprashadSen ,title: "ড্সাধক রামপ্রসাদের গানে হিন্দু ধর্মের 'যত মত তত পথ' , লিখেছেন কল্যাণ গৌতম এবং সৌকালিন মাঝি । ", href: "https://gatidainik.in/23-09-22/epaper.html", date: '2022-9-23'},
    { img: LaxmiPuja ,title: "Laxmi Puja : শ্রী, লক্ষ্মী, ধান্যলক্ষ্মী, ধনলক্ষ্মী এবং বাণিজ্য লক্ষ্মী লিখেছেন ড. কল্যাণ চক্রবর্তী এবং শ্রী অরিত্র ঘোষ দস্তিদার।', লিখেছেন কল্যাণ গৌতম এবং সৌকালিন মাঝি । ", href: "https://deshersamay.com/laxmi-puja-শ্রী-লক্ষ্মী-ধান্যলক্ষ/", date: '2022-9-23'},
    { img: DhanaLaxmi ,title: "শ্রী থেকে লক্ষ্মীর রূপান্তর; ধান্যলক্ষ্মী, বাণিজ্যলক্ষ্মী হয়ে লক্ষ্মী-অলক্ষ্মী মেলবন্ধন।  -   অরিত্র ঘোষ দস্তিদার এবং ড. কল্যাণ চক্রবর্তী ", href: "http://ritambangla.com/editorial/transformation-of-sri-to-lakshmi-dhanya-lakshmi-banijya-lakshmi-through-lakshmi-alakshmi-melbandhan/", date: '2022-10-9'},
    { img: DhanaKendra ,title: "ধান-কেন্দ্রিক কৃষি সংস্কৃতির চরম উৎকর্ষতা ধান্যলক্ষ্মীর আরাধনায় - অবন্তিকা গোস্বামী ও অরিত্র ঘোষ দস্তিদার", href: "http://ritambangla.com/religion/the-ultimate-excellence-of-paddy-centered-agricultural-culture-is-the-worship-of-dhanya-lakshmi/", date: '2022-10-9'},
    { img: Annapurna ,title: "Laxmi Puja: ধান্যলক্ষ্মীর আরাধনায় রয়েছে চিরন্তন অন্নপূর্ণার রূপ। লিখছেন :অবন্তিকা গোস্বামী ও অরিত্র ঘোষ দস্তিদার ", href: " https://deshersamay.com/laxmi-puja-ধান্যলক্ষ্মীর-আরাধনায়/", date: '2022-10-9'},
    { img: SisterNivedita ,title: "Sister Nivedita:বিদেশিনী থেকে ভগিনী হয়ে ওঠার এক অনবদ্য গল্প লিখলেন- অরিত্র ঘোষ দস্তিদার ও ড: কল্যাণ চক্রবর্তী ", href: " https://deshersamay.com/sister-niveditaবিদেশিনী-থেকে-ভগিনী-হয়ে/", date: '2022-10-14'},
    { img: Nilkonthi ,title: "নীলকন্ঠ পাখির সঙ্গে শিব-দুর্গার কী সম্পর্ক লিখলেন কল্যাণ চক্রবর্তী এবং অরিত্র ঘোষ দস্তিদার।", href: "https://sangbadkolkata.com/%e0%a6%a8%e0%a7%80%e0%a6%b2%e0%a6%95%e0%a6%a8%e0%a7%8d%e0%a6%a0-%e0%a6%aa%e0%a6%be%e0%a6%96%e0%a6%bf%e0%a6%b0-%e0%a6%96%e0%a7%8b%e0%a6%81%e0%a6%9c%e0%a7%87/", date: '2022-10-16'},
    { img: Nilkonthi ,title: "নীলকন্ঠ পাখির খোঁজে", href: "https://sangbadkolkata.com/%e0%a6%a8%e0%a7%80%e0%a6%b2%e0%a6%95%e0%a6%a8%e0%a7%8d%e0%a6%a0-%e0%a6%aa%e0%a6%be%e0%a6%96%e0%a6%bf%e0%a6%b0-%e0%a6%96%e0%a7%8b%e0%a6%81%e0%a6%9c%e0%a7%87/", date: '2022-10-16'},
    { img: ChaatPujo ,title: "ছট্পূজা এবং ছটি-মা সূর্যের উদয়-অস্তের তাৎপর্যে মূর্তি-বিহীন উৎসব - অরিত্র ঘোষ দস্তিদার এবং কল্যাণ চক্রবর্তী -", href: "http://ritambangla.com/religion/chatpuja-and-chatti-ma-are-festival-without-idols-to-mark-the-rising-and-setting-of-the-sun/", date: '2022-10-30'},
    { img: GoatAstami ,title: "গোষ্ঠাষ্টমী বা গো-মাতা পূজনে বাঙালিরও সমান উত্তরাধিকার - ড. কল্যাণ চক্রবর্তী এবং শ্রী অরিত্র ঘোষ দস্তিদার - ", href: "http://ritambangla.com/editorial/bengali-revolutionaries-and-gita-on-the-gallows-2/", date: '2022-11-1'},
    { img: RassPurnima ,title: "মানসমঞ্চে রাস-পূর্ণিমা  - অরিত্র ঘোষ দস্তিদার এবং কল্যাণ চক্রবর্তী -", href: "http://ritambangla.com/religion/ras-purnima-at-mansamanche/", date: '2022-11-8'},
    { img: Hemonto ,title: "Story : হেমন্তের মৃত্যুচেতনা : লিখছেন অরিত্র ঘোষ দস্তিদার ও কল্যাণ চক্রবর্তী ", href: " https://deshersamay.com/story-হেমন্তের-মৃত্যুচেতনা-ল/", date: '2022-11-10'},
    { img: Silchar ,title: "শিলচর, অসম থেকে প্রকাশিত বহুল প্রচারিত সংবাদপত্র 'গতি দৈনিক' পত্রিকায় প্রকাশিত অরিত্র ঘোষ দস্তিদার এবং ড. কল্যাণ চক্রবর্তীর প্রবন্ধ গোষ্ঠাষ্টমী বা গোপাষ্টমীর কথা। ১৩ ই নভেম্বর, ২০২২, চতুর্থ পাতা।", href: "https://gatidainik.in/13-11-22/epaper.html", date: '2022-11-13'},
    { img: BipinChandraPal ,title: "লাল-বাল-পাল, এই ত্রয়ী ব্রিটিশ-বিরোধী ইতিহাসে অমোচ্য নাম। তাঁর শিক্ষা-দর্শন নিয়ে লিখলেন অরিত্র ঘোষ দস্তিদার এবং কল্যাণ চক্রবর্তী ।", href: "http://ritambangla.com/with-news/philosophy-of-education-by-bipinchandra-pal/", date: '2022-11-23'},
    { img: BipinChandraPal ,title: " অরিত্র ঘোষ দস্তিদার এবং কল্যাণ চক্রবর্তী র কলমে স্বাধীনতা সংগ্রামী বিপিনচন্দ্র পাল ।  অসম থেকে প্রকাশিত জনপ্রিয় বাংলা দৈনিক।", href: "https://gatidainik.in/24-11-22/epaper.html", date: '2022-11-24'},
    { img: Jcb ,title: "পোস্টেজ স্ট্যাম্প ও কারেন্সি নোটে জগদীশচন্দ্র । লিখেছেন অরিত্র ঘোষ দস্তিদার । ", href: "https://indobanglatimes.in/2022/11/30/%e0%a6%aa%e0%a7%8b%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a7%87%e0%a6%9c-%e0%a6%b8%e0%a7%8d%e0%a6%9f%e0%a7%8d%e0%a6%af%e0%a6%be%e0%a6%ae%e0%a7%8d%e0%a6%aa-%e0%a6%93-%e0%a6%95%e0%a6%be%e0%a6%b0%e0%a7%87/", date: '2022-11-24'},
    { img: Bm ,title: "অবনীন্দ্রনাথ অঙ্কিত ‘ভারতমাতা’ সে যুগে শিল্পান্দোলনের দার্শনিক ভিত গড়ে দিয়েছিল। অবনীন্দ্রনাথ অঙ্কিত 'ভারতমাতা' সে যুগে", href: "https://indobanglatimes.in/2022/12/01/%e0%a6%85%e0%a6%ac%e0%a6%a8%e0%a7%80%e0%a6%a8%e0%a7%8d%e0%a6%a6%e0%a7%8d%e0%a6%b0%e0%a6%a8%e0%a6%be%e0%a6%a5-%e0%a6%85%e0%a6%99%e0%a7%8d%e0%a6%95%e0%a6%bf%e0%a6%a4-%e0%a6%ad%e0%a6%be%e0%a6%b0/", date: '2022-11-24'},
    { img: rp ,title: "জন্মদিনে (৩ রা ডিসেম্বর) শ্রদ্ধা –রাজেন্দ্র প্রসাদের রাজনৈতিক হাতেখড়ি কলকাতায়, জাতীয় শিক্ষা আন্দোলনে গুরু পেলেন সতীশচন্দ্রকে।", href: "https://ritambangla.com/editorial/tribute-on-his-birthday-december-3rd-rajendra-prasads-political-career-in-kolkata-satish-chandra-got-a-guru-in-the-national-education-movement/", date: '2022-12-03'},
    { img: hoB ,title: "“The History of Bangal” : ইতিহাস-উদাসীন বাঙালির চেতনা জাগান রমেশচন্দ্র মজুমদার, তাই তাঁকে ছুঁড়ে ফেলতেও দেরি করে নি ষড়যন্ত্রীরা ", href: "https://deshersamay.com/the-history-of-bangal-ইতিহাস-উদাসীন-বাঙালি/", date: '2022-12-04'},
    { img: cpujo ,title: "অন্ধকার ভেঙে আলোয় ফেরার উৎসব ছটপূজা। লিখলেন অরিত্র ঘোষ দস্তিদার এবং কল্যাণ চক্রবর্তী। ছবি আঁকলেন শীর্ষ আচার্য। ছবি তুললেন তীর্থরাজ রায়। ", href: "https://www.amaderbharat.com/chhat-puja-is-the-festival-of-breaking-the-darkness-and-returning-to-the-light/", date: '2022-11-30'},
  ]


  return (
    <div className="blogs">
      <div className="container content">
        <div className="blog-grid-container">
          {allBlogs.map((blog, index) => {
            return (
              <div className="blog-item left-hidden" key={index}>
                <div className="blog-img">
                  <img src={blog.img} alt={blog.title} />
                </div>
                <div className="blog-description">
                  <h1>
                    <div><a href={blog.href} target='_blank' rel='noopener noreferrer'>{blog.title}</a></div>
                  </h1>
                  <p>{blog.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Blogs
