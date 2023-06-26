import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {

  articles = [
    {
      "source": {
        "id": null,
        "name": "India.com"
      },
      "author": "Zee Media Bureau",
      "title": "NEP: 59-3 (15) | WI Vs Nepal, ICC World Cup Qualifier Cricket Live Score & Updates: West Indies - Zee News",
      "description": "NEP: 102-5 (24) | WI Vs Nepal, ICC World Cup Qualifier Cricket Live Score & Updates: Nepal Go Past 1",
      "url": "https://zeenews.india.com/cricket/live-updates/live-cricket-score-wi-vs-nep-icc-world-cup-2023-qualifier-match-9-today-west-indies-vs-nepal-harare-stadium-shai-hope-rohit-paudel-2625120",
      "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2023/06/21/1225420-wivsnep.jpeg",
      "publishedAt": "2023-06-22T12:22:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Moneycontrol"
      },
      "author": null,
      "title": "Accenture forecasts Q4 revenue below estimates - Moneycontrol",
      "description": "Accenture forecast current-quarter revenue in the range of $15.75 billion to $16.35 billion",
      "url": "https://www.moneycontrol.com/news/business/earnings/accenture-forecasts-q4-revenue-below-estimates-10840921.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/04/accenture-770x433.jpg",
      "publishedAt": "2023-06-22T11:19:29Z",
      "content": null
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "AAP to walk out of opposition meet if Congress doesn't promise support against Centre's ordinance on Delh - Indiatimes.com",
      "description": "The Aam Aadmi Party (AAP) will walk out of Friday's opposition meeting in Patna if the Congress fails to promise its support against the Centre's ordi",
      "url": "https://timesofindia.indiatimes.com/city/delhi/aap-to-walk-out-of-opposition-meet-if-congress-doesnt-promise-support-against-centres-ordinance-on-delhi-services-matter-sources/articleshow/101191336.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-101191306,width-1070,height-580,imgsize-1634497,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2023-06-22T10:58:00Z",
      "content": "Rahul Gandhi slams BJP, RSS for dwelling in the past, blaming others"
    },
    {
      "source": {
        "id": null,
        "name": "Thehealthsite.com"
      },
      "author": "Puja Menon",
      "title": "From Healthy Skin To Weight Loss Check Out The Health Benefits Of Peaches | TheHealthSite.com - TheHealthSite",
      "description": "Nutritionists and health experts around the world often recommend adding peaches to your daily diet in order to reap its numerous benefits. TheHealthSite.com",
      "url": "https://www.thehealthsite.com/news/health-benefits-of-peaches-you-just-cant-ignore-from-healthy-skin-to-weight-loss-stst-987200/",
      "urlToImage": null,
      "publishedAt": "2023-06-22T10:32:00Z",
      "content": "Peaches plays a key role in weight loss. \r\nNutritionists and health experts, around the world, often recommend adding peaches to your daily diet in order to reap its numerous benefits.\r\nSummers are n… [+2233 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Thewire.in"
      },
      "author": null,
      "title": "Foreign Disturbances: Reading the FCRA in Times of Modi Govt's ‘Global Outreach’ - The Wire",
      "description": "The latest case is Harsh Mander’s. The use of FCRA by this regime is devious. It is to deny the political actor the dignity of being recognised as a conscientious objector, or a political prisoner, in law.",
      "url": "https://thewire.in/law/foreign-disturbances-reading-the-fcra-in-times-of-modi-govts-global-outreach",
      "urlToImage": "https://cdn.thewire.in/wp-content/uploads/2023/06/22153310/FzKw7U8agAEQm8V-800x400.jpeg",
      "publishedAt": "2023-06-22T10:30:07Z",
      "content": "The prime minister is on a state visit to the United States. As part of the visit, he will sign an agreement for the purchase of predator drones. The US will benefit from the sales, and the Indian pr… [+11272 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GSMArena.com"
      },
      "author": "Michail",
      "title": "Apple releases iOS 17 Beta 2 - GSMArena.com news - GSMArena.com",
      "description": "The new release includes plenty of smaller tweaks and features that were announced back at WWDC. Apple is now seeding its iOS 17 Beta 2 release to...",
      "url": "https://www.gsmarena.com/apple_releases_ios_17_beta_2-news-58939.php",
      "urlToImage": "https://fdn.gsmarena.com/imgroot/news/23/06/ios-17-beta-2/-952x498w6/gsmarena_000.jpg",
      "publishedAt": "2023-06-22T10:00:01Z",
      "content": "Apple is now seeding its iOS 17 Beta 2 release to developers and beta testers following the Beta 1 release from earlier this month. The new changes include a redesigned update screen with more inform… [+934 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "India Education Diary"
      },
      "author": "iednewsdesk",
      "title": "﻿UC San Diego Experts Unveil Cellular Process Behind Oxygen Production - India Education Diary",
      "description": "Take a deep breath. Now take nine more. According to new research, the amount of oxygen in one of those 10 breaths was made possible thanks to a newly identified cellular mechanism that promotes photosynthesis in marine phytoplankton.Described as “gr",
      "url": "https://indiaeducationdiary.in/uc-san-diego-experts-unveil-cellular-process-behind-oxygen-production/",
      "urlToImage": "https://indiaeducationdiary.in/wp-content/uploads/2023/06/diatom_composition-1200-628-1024x536.jpg",
      "publishedAt": "2023-06-22T09:56:53Z",
      "content": "Take a deep breath. Now take nine more. According to new research, the amount of oxygen in one of those 10 breaths was made possible thanks to a newly identified cellular mechanism that promotes phot… [+7549 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Moneycontrol"
      },
      "author": "Moneycontrol News",
      "title": "GE Aerospace, HAL sign MoU to produce fighter jet engines for IAF - Moneycontrol",
      "description": "The agreement includes the &quot;potential joint production of GE Aerospace’s F414 engines in India&quot;, the Ohio-headquartered aerospace company said, adding that it &quot;continues to work with the US government to receive the necessary export authorisati…",
      "url": "https://www.moneycontrol.com/news/business/ge-aerospace-inks-pact-with-hal-to-produce-fighter-jet-engines-for-iaf-10840151.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/02/12-aero-india-show-2021-770x433.jpg",
      "publishedAt": "2023-06-22T09:44:42Z",
      "content": "GE Aerospace, the US-based aircraft engine supplier, on June 22 announced the signing of a memorandum of understanding (MoU) with India's public defence firm Hindustan Aeronautics Ltd (HAL) to produc… [+2034 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": "NDTV Sports Desk",
      "title": "\"Will Do It Again...\": India Head Coach Igor Stimac On Getting Sent Off vs Pakistan - NDTV Sports",
      "description": "Igor Stimac was sent off after he chose to interfere when Pakistan player Abdullah Iqbal was ready to make a throw-in.",
      "url": "https://sports.ndtv.com/football/will-do-it-again-india-head-coach-igor-stimac-on-getting-sent-off-vs-pakistan-4142554",
      "urlToImage": "https://c.ndtvimg.com/2023-06/eorh86dg_igor-stimac-806_625x300_22_June_23.jpg",
      "publishedAt": "2023-06-22T09:17:00Z",
      "content": "The SAFF Championship encounter between arch-rivals India and Pakistan saw an adrenaline-fuelled moment at the Sree Kanteerava Stadium on Wednesday. India head coach Igor Stimac was sent off moments … [+1801 chars]"
    },
    {
      "source": {
        "id": "financial-times",
        "name": "Financial Times"
      },
      "author": "Demetri Sevastopulo, John Reed",
      "title": "India set to buy US spy drones during Modi visit to Biden - Financial Times",
      "description": "Agreements signal Washington’s intent to draw New Delhi closer as it seeks to counter China’s influence",
      "url": "https://www.ft.com/content/98949a9a-9dc7-4e4b-aa09-d44b11d46725",
      "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F6fad0d5a-4094-48f3-b13d-fe6220df1ce3.jpg?source=next-opengraph&fit=scale-down&width=900",
      "publishedAt": "2023-06-22T09:05:08Z",
      "content": "India and the US are poised to unveil defence and technology deals including a purchase of American spy drones during Prime Minister Narendra Modis state visit to Washington on Thursday.\r\nIndias agre… [+3020 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Tech",
      "title": "New Google Pixel 7 Pro ads take hilarious dig at iPhone 14 Pro - HT Tech",
      "description": "Google has released a new humorous 5-ad series where the Pixel 7 Pro flaunts its new features and looks to make the iPhone 14 Pro jealous.",
      "url": "https://tech.hindustantimes.com/mobile/news/new-google-pixel-7-pro-ads-take-hilarious-dig-at-iphone-14-pro-71687423996091.html",
      "urlToImage": "https://images.hindustantimes.com/tech/img/2023/06/22/1600x900/Google_Pixel_ad_1687424110772_1687424116170.png",
      "publishedAt": "2023-06-22T08:59:30Z",
      "content": "Major smartphone brands have taken digs at their rivals to create hilarious and memorable ad campaigns. We all remember Samsung's Buckle up' ad in 2022 when it released a new ad for the Galaxy S22 Ul… [+3133 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Esa.int"
      },
      "author": null,
      "title": "ESA - BepiColombo's third Mercury flyby: the movie - European Space Agency",
      "description": "Watch Mercury appear from the shadows as the ESA/JAXA BepiColombo spacecraft sped by the planet’s night side during its 19 June 2023 close flyby, and enjoy a special flyover of geologically rich terrain, along with a bonus 3D scene.",
      "url": "https://www.esa.int/Science_Exploration/Space_Science/BepiColombo/BepiColombo_s_third_Mercury_flyby_the_movie",
      "urlToImage": "https://www.esa.int/var/esa/storage/images/esa_multimedia/videos/2023/06/bepicolombo_s_third_mercury_flyby_the_movie/24943575-4-eng-GB/BepiColombo_s_third_Mercury_flyby_the_movie_pillars.jpg",
      "publishedAt": "2023-06-22T08:48:45Z",
      "content": "Science &amp; Exploration22/06/20231339 views13 likes\r\nWatch Mercury appear from the shadows as the ESA/JAXA BepiColombo spacecraft sped by the planets night side during its 19 June 2023 close flyby,… [+5108 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "etimes.in",
      "title": "‘Adipurush’ Hindi box office collection 6: Prabhas starrer records a huge drop, earns only Rs 3 crore - Indiatimes.com",
      "description": "‘Adipurush’ collection continued to dip on day six. The mythological drama has score a total collection of Rs 120 crore till now.",
      "url": "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/box-office/adipurush-hindi-box-office-collection-6-prabhas-starrer-records-a-huge-drop-earns-only-rs-3-crore/articleshow/101186382.cms",
      "urlToImage": "https://static.toiimg.com/thumb/msid-101187019,width-1070,height-580,imgsize-50646,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "publishedAt": "2023-06-22T08:44:00Z",
      "content": "Director Om Raut addresses severe backlash against Adipurush: It is impossible for anybody to understand RamayanaAddressed the heavy criticism and negative reviews against Adipurush, director Om Raut… [+119 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Telangana Today"
      },
      "author": "IANS",
      "title": "Indian-origin professor turns smartphone into thermometer - Telangana Today",
      "description": "The team led by researchers at the UW created an app called FeverPhone, which transforms smartphones into thermometers.",
      "url": "https://telanganatoday.com/indian-origin-professor-turns-smartphone-into-thermometer",
      "urlToImage": "https://cdn.telanganatoday.com/wp-content/uploads/2023/06/thermometer.jpg",
      "publishedAt": "2023-06-22T08:32:00Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Livelaw.in"
      },
      "author": "Upasana Sajeev",
      "title": "‘Fundamental And Statutory Rights Violated’: TN Minister Senthil Balaji's Family To Madras High Court In... - Live Law - Indian Legal News",
      "description": "Challenging his arrest in a money laundering case by the Enforcement Directorate, the Tamil Nadu Minister Senthil Balaji's family on Thursday argued before Madras High Court that there was a...",
      "url": "https://www.livelaw.in/high-court/madras-high-court/madras-high-court-senthil-balaji-wife-argues-fundamental-statutory-rights-violated-231104",
      "urlToImage": "https://www.livelaw.in/h-upload/2022/04/12/414597-vsenthilbalaji-madras-hc.jpg",
      "publishedAt": "2023-06-22T08:29:28Z",
      "content": "Challenging his arrest in a money laundering case by the Enforcement Directorate, the Tamil Nadu Minister Senthil Balaji's family on Thursday argued before Madras High Court that there was a violatio… [+3575 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Financial Express"
      },
      "author": "The Financial Express",
      "title": "Microsoft hikes Xbox Game Pass prices in India: Check new prices, benefits, other details - The Financial Express",
      "description": null,
      "url": "https://www.financialexpress.com/life/technology-microsoft-hikes-xbox-game-pass-prices-in-india-check-new-prices-benefits-other-details-3137408/",
      "urlToImage": null,
      "publishedAt": "2023-06-22T08:06:49Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Hindustan Times"
      },
      "author": "HT Tech",
      "title": "MASSIVE solar storm to strike Earth, Venus and Mars, reveals NASA; Know the DANGER - HT Tech",
      "description": "A massive coronal mass ejection (CME) cloud is likely to hit Venus, Mars as well as the Earth, NASA model has shown. While the first two planets will face the brunt of the solar storm, Earth can be hit by glancing blows.",
      "url": "https://tech.hindustantimes.com/tech/news/massive-solar-storm-to-strike-earth-venus-and-mars-reveals-nasa-know-the-danger-71687418434493.html",
      "urlToImage": "https://images.hindustantimes.com/tech/img/2023/06/22/1600x900/ge352a24a81d2a3469ef39a3d2fd88c94a425cafe0616ec314_1687418480146_1687418480483.jpg",
      "publishedAt": "2023-06-22T07:24:05Z",
      "content": "On June 20, an X1.1-class solar flare erupted on the Sun, making it one of the biggest explosions seen this year. The flare sparked a shortwave radio blackout across North America that affected wirel… [+2342 chars]"
    },
    {
      "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
      },
      "author": "TIMESOFINDIA.COM",
      "title": "‘Insaan ki galati ko nahi uski bhaavna ko samjho’: Kriti Sanon’s mother tries to defend ‘Adipurush’, gets trolled - Times of India",
      "description": "Amid massive criticism that ‘Adipurush’ has been facing, Kriti Sanon’s mother Geeta Sanon recently took to Instagram to share a message with the audience. She wrote, ‘”Jaki rahi bhavana jaisi, prabhu murat dekhi tin taisi”… Iska arth hai ki achi soch",
      "url": "https://timesofindia.indiatimes.com/videos/etimes/bollywood/insaan-ki-galati-ko-nahi-uski-bhaavna-ko-samjho-kriti-sanons-mother-tries-to-defend-adipurush-gets-trolled/videoshow/101183705.cms",
      "urlToImage": "https://timesofindia.indiatimes.com/photo/101183705/size-124190/101183705.jpg",
      "publishedAt": "2023-06-22T06:49:35Z",
      "content": "Amid massive criticism that Adipurush has been facing, Kriti Sanon\r\ns mother Geeta Sanon\r\n recently took to Instagram to share a message with the audience. She wrote, Jaki rahi bhavana jaisi, prabhu … [+1000 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Vigyanprasar.gov.in"
      },
      "author": "",
      "title": "'Genomic data critical for future pandemic preparedness' - Vigyan Prasar",
      "description": "http://vigyanprasar.gov.in/isw/images/Genomic-data-critical-for-future-pandemic-preparedness.jpg",
      "url": "https://vigyanprasar.gov.in/isw/Genomic-data-critical-for-future-pandemic-preparedness.html",
      "urlToImage": "http://vigyanprasar.gov.in/isw/images/Genomic-data-critical-for-future-pandemic-preparedness.jpg",
      "publishedAt": "2023-06-22T06:48:11Z",
      "content": "Figure Legend: The bar graph represents distribution of different variants from December 2020 to March-2022. \r\nDifferent SARS-CoV-2 variants drove three major COVID-19 waves in India. A group of rese… [+2875 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Thewire.in"
      },
      "author": null,
      "title": "Manipuri Organisation Slams PM Modi’s Yoga Session at UN, Boycotts International Day of Yoga - The Wire",
      "description": "“The Prime Minister left for the US on Tuesday carrying the message of peace but a corner of India (Manipur) is burning. People are unhappy at his continued silence and the absence of any improvement in the ground situation since May 3.”",
      "url": "https://thewire.in/rights/manipur-yoga-day-boycott-modi-silence",
      "urlToImage": "https://cdn.thewire.in/wp-content/uploads/2023/06/22115211/FzKHUTjaUAEM-Pl-800x400.jpeg",
      "publishedAt": "2023-06-22T06:45:22Z",
      "content": "New Delhi: The apex body of 36 civil society organisations in Manipur protested against Prime Minister Narendra Modi’s decision to lead a special yoga session at the UN headquarters in New York and b… [+1625 chars]"
    }
  ]

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsLearn - General</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col md-4" key={element.url}>

              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />

            </div>
          }
          )
          }
        </div>
      </div>
    )
  }
}

export default News
