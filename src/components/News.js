import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
        "source": {
        "id": "cbc-news",
        "name": "CBC News"
        },
        "author": "CBC News",
        "title": "AFN head defends against removal, says opponents 'behaving like Indian agents' | CBC News",
        "description": "The first female national chief is accusing her Assembly of First Nations regional chiefs of hypocrisy, misogyny and “behaving like Indian Agents,” as they recommend her removal for the second time in a year, documents obtained by CBC News reveal.",
        "url": "http://www.cbc.ca/news/indigenous/archibald-defends-removal-regional-chiefs-1.6888538",
        "urlToImage": "https://i.cbc.ca/1.6803806.1687879309!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/archibald.jpg",
        "publishedAt": "2023-06-27T15:52:21.5025223Z",
        "content": "RoseAnne Archibald, the first female Assembly of First Nations (AFN) national chief, is accusing her regional chiefs of hypocrisy, misogyny and \"behaving like Indian Agents,\" as they recommend her re… [+7369 chars]"
        },
        {
        "source": {
        "id": "google-news-in",
        "name": "Google News (India)"
        },
        "author": "Times of India",
        "title": "West Bengal CM Mamata Banerjee injured in emergency chopper landing amid bad weather - Times of India",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMipAFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS92aWRlb3MvdG9pLW9yaWdpbmFsL3dlc3QtYmVuZ2FsLWNtLW1hbWF0YS1iYW5lcmplZS1pbmp1cmVkLWluLWVtZXJnZW5jeS1jaG9wcGVyLWxhbmRpbmctYW1pZC1iYWQtd2VhdGhlci92aWRlb3Nob3cvMTAxMzE2MDk3LmNtc9IBnwFodHRwczovL20udGltZXNvZmluZGlhLmNvbS92aWRlb3MvdG9pLW9yaWdpbmFsL3dlc3QtYmVuZ2FsLWNtLW1hbWF0YS1iYW5lcmplZS1pbmp1cmVkLWluLWVtZXJnZW5jeS1jaG9wcGVyLWxhbmRpbmctYW1pZC1iYWQtd2VhdGhlci9hbXBfdmlkZW9zaG93LzEwMTMxNjA5Ny5jbXM?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-06-27T15:16:34+00:00",
        "content": null
        },
        {
        "source": {
        "id": "google-news-in",
        "name": "Google News (India)"
        },
        "author": "The Tribune India",
        "title": "‘Unacceptable’: White House on online harassment of WSJ journalist who questioned PM Modi on minorities’ rights - The Tribune India",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMimgFodHRwczovL3d3dy50cmlidW5laW5kaWEuY29tL25ld3Mvd29ybGQvdW5hY2NlcHRhYmxlLXdoaXRlLWhvdXNlLW9uLW9ubGluZS1oYXJhc3NtZW50LW9mLXdzai1qb3VybmFsaXN0LXdoby1xdWVzdGlvbmVkLXBtLW1vZGktb24tbWlub3JpdGllcy1yaWdodHMtNTIwNzI10gGYAWh0dHBzOi8vbS50cmlidW5laW5kaWEuY29tL25ld3Mvd29ybGQvdW5hY2NlcHRhYmxlLXdoaXRlLWhvdXNlLW9uLW9ubGluZS1oYXJhc3NtZW50LW9mLXdzai1qb3VybmFsaXN0LXdoby1xdWVzdGlvbmVkLXBtLW1vZGktb24tbWlub3JpdGllcy1yaWdodHMtNTIwNzI1?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-06-27T13:19:00+00:00",
        "content": null
        },
        {
        "source": {
        "id": "nbc-news",
        "name": "NBC News"
        },
        "author": "Sakshi Venkatraman",
        "title": "As Modi's popularity grows in India, Hindu nationalism is rising in the U.S.",
        "description": "To some, Modi represents the face of a new, better India. To others, he's influencing an era of Hindu nationalism — one that’s rapidly spreading in the U.S.",
        "url": "https://www.nbcnews.com/news/asian-america/modis-popularity-grows-india-hindu-nationalism-rising-us-rcna90680",
        "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2023-06/230626-modi-us-visit-lr-00c753.jpg",
        "publishedAt": "2023-06-27T13:01:15Z",
        "content": "WASHINGTON Prime Minister Narendra Modis official state visit turned the nations capital into a microcosm of Indian politics on Thursday. Thousands of South Asians of every creed and community floode… [+13769 chars]"
        },
        {
        "source": {
        "id": "google-news-in",
        "name": "Google News (India)"
        },
        "author": "Live Law - Indian Legal News",
        "title": "‘Basic Structure’ of Valmiki Ramayana Distorted, Language in Dialogues Only Used by ‘Gully Boys’: PIL... - Live Law - Indian Legal News",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMinwFodHRwczovL3d3dy5saXZlbGF3LmluL3RvcC1zdG9yaWVzL3N1cHJlbWUtY291cnQtYWRpcHVydXNoLWJhc2ljLXN0cnVjdHVyZS12YWxtaWtpLXJhbWF5YW5hLWxhbmd1YWdlLWRpYWxvZ3Vlcy1ndWxseS1ib3lzLXB1YmxpYy1pbnRlcmVzdC1saXRpZ2F0aW9uLXBpbC0yMzE0MTPSAaMBaHR0cHM6Ly93d3cubGl2ZWxhdy5pbi9hbXAvdG9wLXN0b3JpZXMvc3VwcmVtZS1jb3VydC1hZGlwdXJ1c2gtYmFzaWMtc3RydWN0dXJlLXZhbG1pa2ktcmFtYXlhbmEtbGFuZ3VhZ2UtZGlhbG9ndWVzLWd1bGx5LWJveXMtcHVibGljLWludGVyZXN0LWxpdGlnYXRpb24tcGlsLTIzMTQxMw?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-06-27T12:39:09+00:00",
        "content": null
        },
        {
        "source": {
        "id": "google-news-in",
        "name": "Google News (India)"
        },
        "author": "Indiatimes.com",
        "title": "PM Narendra Modi bats for uniform civil code - Indiatimes.com",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMifGh0dHBzOi8vbS50aW1lc29maW5kaWEuY29tL2luZGlhL3BtLW1vZGktYmF0cy1mb3ItdW5pZm9ybS1jaXZpbC1jb2RlLXNheXMtaXRzLXRoZS1uZWVkLW9mLXRoZS1ob3VyL2FydGljbGVzaG93LzEwMTMwMzIzMi5jbXPSAYABaHR0cHM6Ly9tLnRpbWVzb2ZpbmRpYS5jb20vaW5kaWEvcG0tbW9kaS1iYXRzLWZvci11bmlmb3JtLWNpdmlsLWNvZGUtc2F5cy1pdHMtdGhlLW5lZWQtb2YtdGhlLWhvdXIvYW1wX2FydGljbGVzaG93LzEwMTMwMzIzMi5jbXM?oc=5",
        "urlToImage": null,
        "publishedAt": "2023-06-27T07:58:00+00:00",
        "content": null
        },
        {
        "source": {
        "id": "entertainment-weekly",
        "name": "Entertainment Weekly"
        },
        "author": "Gerrad Hall",
        "title": "What to Watch this week: Henry Cavill's final season of <em>The Witcher</em>, Harrison Ford's<em> Indiana Jones</em> farewell",
        "description": "What to watch this week (June 26-July 2): Plus, the final season of <em>Tom Clancy's Jack Ryan</em> premieres, <em>The Other Two</em> season finale, and more.",
        "url": "https://ew.com/what-to-watch/what-to-watch-schedule-the-witcher-indiana-jones-dial-of-destiny/",
        "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=1%2C0%2C1999%2C999&poi=%5B1040%2C430%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F06%2F22%2FSOC-WTW-JUNE-27-2000.jpg",
        "publishedAt": "2023-06-26T16:00:00Z",
        "content": "Harrison Ford is putting on his iconic fedora and cracking his trademark whip one last time for Indiana Jones and the Dial of Destiny. \r\nThere are also two new animated movies this weekend: Netflix's… [+6238 chars]"
        },
        {
        "source": {
        "id": "le-monde",
        "name": "Le Monde"
        },
        "author": "Brieuc Beckers, Marceau Bretonnier, Elisa Bellanger et Adrien Sahli",
        "title": "Vidéo. De « Star Wars » à « Indiana Jones », la technique qui rend ces musiques de film inoubliables",
        "description": "Vidéo - A 91 ans, le compositeur John Williams signe la bande-son du dernier « Indiana Jones », en salles le 28 juin. Le service vidéo du « Monde » a tenté de percer ses secrets de fabrication, avec l’aide d’un jeune orchestre symphonique.",
        "url": "https://www.lemonde.fr/culture/video/2023/06/26/de-star-wars-a-indiana-jones-la-technique-qui-rend-ces-musiques-de-film-inoubliables_6179298_3246.html",
        "urlToImage": "https://img.lemde.fr/2023/06/21/0/131/1620/1080/1440/960/60/0/5eba91f_1687333721261-thumbnail-john-williams-site.png",
        "publishedAt": "2023-06-26T15:00:08Z",
        "content": "Êtes-vous capable de fredonner la musique des films Star Wars,Indiana Jones, Jurassic Park ou Harry Potter ? Derrière leur célébrité quasi universelle, ces thèmes musicaux partagent un point commun :… [+678 chars]"
        },
        {
        "source": {
        "id": "fortune",
        "name": "Fortune"
        },
        "author": "Emma Hinchliffe, Paige McGlauflin",
        "title": "Why a former SoftBank partner is tackling mid-career drop-off for working mothers",
        "description": "Former SoftBank partner and Facebook India director Kirthiga Reddy is the cofounder of Laddrr, a resource hub for working mothers aiming to prevent mid-career drop-off.",
        "url": "https://fortune.com/2022/06/01/former-softbank-partner-tackling-mid-career-drop-off-for-working-mothers/",
        "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/05/Kirthiga1.jpg?resize=1200,600",
        "publishedAt": "2022-06-01T13:22:34Z",
        "content": "Skip to Content"
        },
        {
        "source": {
        "id": "the-hindu",
        "name": "The Hindu"
        },
        "author": "Ananth Krishnan",
        "title": "Dalai Lama’s close aides targeted on Pegasus spyware list",
        "description": "‘Analysis indicates that the Indian govt. was selecting the potential targets’",
        "url": "https://www.thehindu.com/news/international/dalai-lamas-close-aides-targeted-on-pegasus-spyware-list/article35474285.ece",
        "urlToImage": "https://www.thehindu.com/news/international/dvshb0/article35474284.ece/ALTERNATES/LANDSCAPE_615/thjc-DalaiLama",
        "publishedAt": "2021-07-22T15:47:01Z",
        "content": "Several of the top India-based aides to the Tibetan spiritual leader, the Dalai Lama, figure on the list of potential targets for spying using the Pegasus spyware, according to a report on Thursday. … [+2399 chars]"
        },
        {
        "source": {
        "id": "rte",
        "name": "RTE"
        },
        "author": "RTÉ News",
        "title": "UK continues with reopening plan despite concerns",
        "description": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.",
        "url": "https://www.rte.ie/news/uk/2021/0515/1221764-uk-indian-variant/",
        "urlToImage": "https://img.rasset.ie/0016cb40-1600.jpg",
        "publishedAt": "2021-05-15T09:33:48Z",
        "content": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.\r\nPrim… [+5066 chars]"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "Rajat Pandit",
        "title": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China",
        "description": "India News:  The Army is now exploring the possibility of procuring 350 light tanks, which can also be transported by air, to augment its firepower in high-altitu",
        "url": "http://timesofindia.indiatimes.com/india/army-explores-procurement-of-350-light-tanks-for-mountainous-terrain-after-border-standoff-with-china/articleshow/82217825.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-82217908,width-1070,height-580,imgsize-264639,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2021-04-23T08:29:00Z",
        "content": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Army explores procurement of 350 light tanks for mou… [+58 chars]"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "Times Of India",
        "title": "PBKS vs MI Live Score, IPL 2021: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways",
        "description": "IPL Live Score: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways. Stay with TOI to get IPL live score, playing 11, scorecard, highlights and ball by ball score updates of the 17th IPL match between Punjab Kings and Mumbai Indians.",
        "url": "http://timesofindia.indiatimes.com/sports/cricket/ipl/live-blog/punjab-kings-vs-mumbai-indians-pbks-vs-mi-live-score-ipl-2021-17th-match-chennai/liveblog/82214950.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-82214950,width-1070,height-580,imgsize-157009,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2021-04-23T05:44:49Z",
        "content": "Ravi Bishnoi return on the cards?\r\nDeepak Hooda showed what he is capable of, but greater consistency would be needed from him if the team has to prosper. They bet on Australian pace imports Jhye Ric… [+3131 chars]"
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "PTI",
        "title": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment",
        "description": "India News: Drug firm Zydus Cadila on Friday said it has received restricted emergency use approval from the Indian drug regulator for the use of Pegylated Interf",
        "url": "http://timesofindia.indiatimes.com/india/zydus-cadila-gets-dcgi-nod-for-hepatitis-drug-for-covid-19-treatment/articleshow/82214909.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-82214921,width-1070,height-580,imgsize-98052,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2021-04-23T05:43:00Z",
        "content": null
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "Bloomberg",
        "title": "Even record death toll may hide extent of India’s Covid crisis",
        "description": "India News: Bodies piling up at crematoriums and burial grounds across India are sparking concerns that the death toll from a ferocious new Covid-19 wave may be m.",
        "url": "http://timesofindia.indiatimes.com/india/even-record-death-toll-may-hide-extent-of-indias-covid-crisis/articleshow/82213444.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-82213819,width-1070,height-580,imgsize-232887,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2021-04-23T04:41:00Z",
        "content": null
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "Dipak K Dash",
        "title": "Government to provide 5 kg free food grains to poor for May & June",
        "description": "India News: The government on Friday announced to provide 5 kg free food grains to the poor for May and June 2021. This will cover nearly 80 crore beneficiaries u",
        "url": "http://timesofindia.indiatimes.com/india/government-to-provide-5-kg-free-food-grains-to-poor-for-may-june/articleshow/82213582.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2021-04-23T04:23:00Z",
        "content": null
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "TIMESOFINDIA.COM",
        "title": "'Inappropriate': PM Modi objects to 'protocol break' during meeting; Delhi CM expresses regret",
        "description": "India News: Delhi chief minister Arvind Kejriwal on Friday faced flak for sharing a live telecast of an \"in-house\" meeting with Prime Minister Narendra Modi where",
        "url": "http://timesofindia.indiatimes.com/india/delhi-cmo-expresses-regret-over-televised-address-during-meeting-with-pm-modi/articleshow/82213159.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-82213159,width-1070,height-580,imgsize-134672,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2021-04-23T03:54:00Z",
        "content": null
        },
        {
        "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
        },
        "author": "Times Of India",
        "title": "Coronavirus in India live updates: Zydus' Virafin gets DCGI nod for Covid treatment",
        "description": "In yet another grim milestone, India recorded 3.3 lakh new Covid-19 cases, and 2,263 deaths in a day. Meanwhile, active cases crossed the 24-lakh mar",
        "url": "http://timesofindia.indiatimes.com/india/coronavirus-in-india-covid-19-vaccine-cases-lockdown-live-updates-23-april-2021/liveblog/82205841.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-82205841,width-1070,height-580,imgsize-148788,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2021-04-22T16:20:06Z",
        "content": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment\r\nMake Covid-19 vaccination affordable, accessible through Jan Aushadi scheme: IMA\r\nThe IMA has demanded that the Covid-19 vaccine … [+4487 chars]"
        },
        {
        "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "I'm fighting my own benchmarks - R Ashwin | ESPNcricinfo.com",
        "description": "India's No. 1 offspinner talks to Manjrekar on his form abroad, injuries and more | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29102228/fighting-my-own-benchmarks-r-ashwin",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219773_1296x729.jpg",
        "publishedAt": "2020-04-25T03:00:09Z",
        "content": "R Ashwin has said that he is \"fighting my own benchmarks\" because his Test performances overseas are being measured against his heroics in India. Despite being the country's best long-form spinner in… [+3347 chars]"
        }
        ]

    constructor() {
        super();
        console.log("This is a constructor from News component");
        this.state = {
            articles : this.articles,
            loading : false
        }
      }

    render() {
        return(
            <div className='container my-3'>
                <h2>M News - Top Headlines</h2>
                <div className='row'>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc" imageUrl="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/yash_0-sixteen_nine_0.jpg?VersionId=F2ptLRoVFmT6a4CSfPSn0.ZMKDkYYX6K&size=690:388" newsUrl="TODO"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title="myTitle" description="mydesc"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default News