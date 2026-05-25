import { FadeIn } from "./Home";
import { useLanguage } from "../context/LanguageContext";

const posts ={
  "vi":[
  { id: 21, title: 'Tập 21: Để Hộ cá thể trở thành "Super Hộ cá thể"? [Sondoong Labs weekend coffee]', tag: "Growth", date: "Oct 16, 2025", img: "https://substackcdn.com/image/fetch/$s_!3yuI!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3db28ff8-9be9-493d-adda-88049c350e0e_1920x1080.png", link: "https://substack.com/@sondoonglabs/note/p-176303005?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 20, title: 'Tập 20: Chiến lược "Wallet Share" trong chặng bay Côn Đảo của Vietjet [Sondoong Labs weekend coffee]', tag: "Strategy", date: "Apr 16, 2025", img: "https://substackcdn.com/image/fetch/$s_!G9fi!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb6ea999c-a13b-4789-b2e7-2acc30b58777_1920x1080.png", link: "https://open.substack.com/pub/sondoonglabs/p/tap-20-chien-luoc-wallet-share-trong?r=1iio5n&utm_campaign=post&utm_medium=web" },
  { id: 19, title: 'Tập 19: Đừng dùng "Giá rẻ" làm lợi thế cạnh tranh [Sondoong Labs weekend coffee]', tag: "Strategy", date: "Apr 1, 2025", img: "https://substackcdn.com/image/fetch/$s_!kVJT!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa5a04296-0f32-4dd1-94ac-afa30193dd82_1920x1080.png", link: "https://substack.com/@sondoonglabs/note/p-160328564?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 18, title: 'Tập 18: Cách "Click & Collect" tối ưu hóa hoạt động cho các BRAND companies [Sondoong Labs weekend coffee]', tag: "Strategy", date: "Mar 1, 2025", img: "https://substackcdn.com/image/fetch/$s_!seAD!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F15893f99-8394-45e8-8883-732ce00406b7_1920x1080.png", link: "https://substack.com/@sondoonglabs/note/p-158021934?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 17, title: 'Tập 17: Venture Builder rút ra điều gì từ những khó khăn của startup như Telio [Sondoong Labs weekend coffee]', tag: "Strategy", date: "Feb 9, 2025", img: "https://substackcdn.com/image/fetch/$s_!Adp7!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2acbf4db-1b4f-45f6-a179-ad76e0845bd0_1920x1080.png", link: "https://substack.com/@sondoonglabs/note/p-156773237?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 16, title: "Tập 16: SMEs có thể cải thiện BRAND với Step 1 như thế nào [Sondoong Labs weekend coffee]", tag: "Brand Strategy", date: "Feb 2, 2025", img: "https://substackcdn.com/image/fetch/$s_!iuY_!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F582c95fc-41f0-4e3e-b135-34135f8f9828_1920x1080.png", link: "https://substack.com/@sondoonglabs/note/p-156281474?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 15, title: "Tập 15: Những Bài Học Đúc Kết Từ Case DeepSeek 'Đánh Úp' Big Tech Mỹ [Sondoong Labs weekend coffee]", tag: "Global Tech", date: "Jan 29, 2025", img: "https://substackcdn.com/image/fetch/$s_!GH0c!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6b3eda6a-5b59-4d6a-a4e3-fe05be5e4909_1920x1080.png", link: "https://substack.com/@sondoonglabs/note/p-156004915?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 14, title: "Tập 14: Bolt app - New player in Vietnam [Sondoong Labs weekend coffee]", tag: "SONDOONG LABS", date: "Jan 04, 2025", img: "https://substackcdn.com/image/fetch/$s_!BaRA!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F412fda45-a8d0-4307-bfb2-d2f29f1fe86c_1920x1080.png", link: "https://substack.com/@sondoonglabs/note/p-154123879?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 13, title: "Tập 13: Thị trường EV tại Indonesia [Sondoong Labs weekend coffee]", tag: "SONDOONG LABS", date: "Dec 20, 2024", img: "https://substackcdn.com/image/fetch/$s_!1Doj!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff7db82e3-c9fc-4762-bd89-90e8f5204d0f_1920x1080.png", link: "https://substack.com/@sondoonglabs/note/p-153400441?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 12, title: "Tập 12: Định hướng cho doanh nghiệp công nghệ trở nên tiềm năng và giảm thiểu rủi ro [Sondoong Labs weekend coffee]", tag: "SONDOONG LABS", date: "Dec 15, 2024", img: "https://substackcdn.com/image/fetch/$s_!iQvA!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc41cfe10-78ad-40de-bd37-69685afb7a63_1920x1080.png", link: "https://substack.com/@sondoonglabs/note/p-153155643?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 11, title: "Tập 11: Các Doanh Nghiệp Vừa Và Nhỏ Có Thể Làm Gì Để \"Tránh Ngày Chia Tay\" [Sondoong Labs weekend coffee]", tag: "SONDOONG LABS", date: "Nov 16, 2024", img: "https://substackcdn.com/image/fetch/$s_!dI8l!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe16c5021-caed-4e4f-924b-1f23174aa30f_1920x1080.png", link: "https://substack.com/@sondoonglabs/note/p-151733276?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 10, title: "Tập 10: Do Something Small, But Do It Really Well [Sondoong Labs weekend coffee]", tag: "SONDOONG LABS", date: "Nov 7, 2024", img: "https://substackcdn.com/image/fetch/$s_!fa5_!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8721f584-c0c3-4bb5-b54c-3b87c94da666_1920x1080.png", link: "https://substack.com/@sondoonglabs/note/p-151311419?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 9, title: "Tập 9: Từ Boring Business đến Công ty niêm yết [Sondoong Labs weekend coffee]", tag: "SONDOONG LABS", date: "Oct 31, 2024", img: "https://substackcdn.com/image/fetch/$s_!McTz!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Feba50ff6-52c6-479b-b46e-0efd55f52674_1920x1080.png", link: "https://substack.com/@sondoonglabs/note/p-150972765?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 8, title: "Tập 8: SMEs nên làm gì? [Sondoong Labs weekend coffee]", tag: "SONDOONG LABS", date: "Oct 13, 2024", img: "https://substackcdn.com/image/fetch/$s_!yGap!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdd8c6bd3-6392-4925-8da2-c47d13f6035a_940x788.png", link: "https://substack.com/@sondoonglabs/note/p-150164579?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 7, title: "Tập 7: Product - Channel Fit trong ngành thịt tươi sống (Licious - 1.5Bils unicorn) [Sondoong Labs weekend coffee]", tag: "SONDOONG LABS", date: "Sep 29, 2024", img: "https://substackcdn.com/image/fetch/$s_!I-6C!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1fa081ae-c6d3-484c-94fa-6b10e3791a30_2640x1485.png", link: "https://substack.com/@sondoonglabs/note/p-149533891?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 6, title: "Tập 6: Startup ở Việt Nam không thiếu tiền [Sondoong Labs weekend coffee]", tag: "SONDOONG LABS", date: "Sep 20, 2024", img: "https://substackcdn.com/image/fetch/$s_!V__f!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe7e087d1-29e6-43e7-850f-9d7470afcccf_1920x1080.png", link: "https://substack.com/@sondoonglabs/note/p-149135024?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 5, title: "Tập 5: SME cần gì để trở mình thành BRAND [Sondoong Labs weekend coffee]", tag: "SONDOONG LABS", date: "Sep 20, 2024", img: "https://substackcdn.com/image/fetch/$s_!udn2!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd90a65f8-a65e-4880-b789-3a53aed5818a_1333x1000.jpeg", link: "https://substack.com/@sondoonglabs/note/p-149134898?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 4, title: "Tập 4: LOSER hay là UNICORN [Sondoong Labs weekend coffee]", tag: "SONDOONG LABS", date: "Sep 20, 2024", img: "https://substackcdn.com/image/fetch/$s_!9lJG!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F647830b1-4f42-4ea3-99df-8ebab6415223_1920x1080.png", link: "https://substack.com/@sondoonglabs/note/p-149105592?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 3, title: "Tập 3: Kì lân bỏ cuộc - ảnh hưởng như thế nào đến gọi vốn cho Startup tại Việt Nam [Sondoong Labs weekend coffee]", tag: "SONDOONG LABS", date: "Sep 19, 2024", img: "https://substackcdn.com/image/fetch/$s_!w5ba!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a13ec7e-a26a-4223-bc68-ac1f15c9ec02_1920x1080.png", link: "https://substack.com/@sondoonglabs/note/p-149105188?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 2, title: "Tập 2: Xây dựng SME company trở thành \"brand\" company [Sondoong Labs weekend coffee]", tag: "SONDOONG LABS", date: "Sep 20, 2024", img: "https://substackcdn.com/image/fetch/$s_!H17L!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F99093815-cda8-4796-aa4a-bb003c072e9b_1920x1080.png", link: "https://substack.com/@sondoonglabs/note/p-149095416?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
  { id: 1, title: "Tập 1: Tại sao lại là M Village [Sondoong Labs weekend coffee]", tag: "SONDOONG LABS", date: "Sep 19, 2024", img: "https://substackcdn.com/image/fetch/$s_!twJ2!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F661d653c-b413-4779-ae5f-bc3f51d5b657_1920x1080.png", link: "https://substack.com/@sondoonglabs/note/p-149094058?r=1iio5n&utm_source=notes-share-action&utm_medium=web" },
],
  "en":[
  { 
    id: 21, 
    title: 'Episode 21: Can Sole Proprietorships become "Super Businesses"? [Sondoong Labs weekend coffee]', 
    tag: "Growth", 
    date: "Oct 16, 2025", 
    img: "https://substackcdn.com/image/fetch/$s_!3yuI!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3db28ff8-9be9-493d-adda-88049c350e0e_1920x1080.png", 
    link: "https://substack.com/@sondoonglabs/note/p-176303005?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 20, 
    title: 'Episode 20: Vietjet\'s "Wallet Share" strategy on the Con Dao route [Sondoong Labs weekend coffee]', 
    tag: "Strategy", 
    date: "Apr 16, 2025", 
    img: "https://substackcdn.com/image/fetch/$s_!G9fi!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb6ea999c-a13b-4789-b2e7-2acc30b58777_1920x1080.png", 
    link: "https://open.substack.com/pub/sondoonglabs/p/tap-20-chien-luoc-wallet-share-trong?r=1iio5n&utm_campaign=post&utm_medium=web" 
  },
  { 
    id: 19, 
    title: 'Episode 19: Don\'t use "Low Price" as a competitive advantage [Sondoong Labs weekend coffee]', 
    tag: "Strategy", 
    date: "Apr 1, 2025", 
    img: "https://substackcdn.com/image/fetch/$s_!kVJT!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa5a04296-0f32-4dd1-94ac-afa30193dd82_1920x1080.png", 
    link: "https://substack.com/@sondoonglabs/note/p-160328564?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 18, 
    title: 'Episode 18: How "Click & Collect" optimizes operations for BRAND companies [Sondoong Labs weekend coffee]', 
    tag: "Strategy", 
    date: "Mar 1, 2025", 
    img: "https://substackcdn.com/image/fetch/$s_!seAD!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F15893f99-8394-45e8-8883-732ce00406b7_1920x1080.png", 
    link: "https://substack.com/@sondoonglabs/note/p-158021934?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 17, 
    title: 'Episode 17: What Venture Builders learn from the challenges of startups like Telio [Sondoong Labs weekend coffee]', 
    tag: "Strategy", 
    date: "Feb 9, 2025", 
    img: "https://substackcdn.com/image/fetch/$s_!Adp7!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2acbf4db-1b4f-45f6-a179-ad76e0845bd0_1920x1080.png", 
    link: "https://substack.com/@sondoonglabs/note/p-156773237?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 16, 
    title: "Episode 16: How SMEs can improve their BRAND with Step 1 [Sondoong Labs weekend coffee]", 
    tag: "Brand Strategy", 
    date: "Feb 2, 2025", 
    img: "https://substackcdn.com/image/fetch/$s_!iuY_!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F582c95fc-41f0-4e3e-b135-34135f8f9828_1920x1080.png", 
    link: "https://substack.com/@sondoonglabs/note/p-156281474?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 15, 
    title: "Episode 15: Lessons from the DeepSeek case 'shocking' US Big Tech [Sondoong Labs weekend coffee]", 
    tag: "Global Tech", 
    date: "Jan 29, 2025", 
    img: "https://substackcdn.com/image/fetch/$s_!GH0c!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6b3eda6a-5b59-4d6a-a4e3-fe05be5e4909_1920x1080.png", 
    link: "https://substack.com/@sondoonglabs/note/p-156004915?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 14, 
    title: "Episode 14: Bolt app - New player in Vietnam [Sondoong Labs weekend coffee]", 
    tag: "SONDOONG LABS", 
    date: "Jan 04, 2025", 
    img: "https://substackcdn.com/image/fetch/$s_!BaRA!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F412fda45-a8d0-4307-bfb2-d2f29f1fe86c_1920x1080.png", 
    link: "https://substack.com/@sondoonglabs/note/p-154123879?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 13, 
    title: "Episode 13: The EV market in Indonesia[Sondoong Labs weekend coffee]", 
    tag: "SONDOONG LABS", 
    date: "Dec 20, 2024", 
    img: "https://substackcdn.com/image/fetch/$s_!1Doj!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff7db82e3-c9fc-4762-bd89-90e8f5204d0f_1920x1080.png", 
    link: "https://substack.com/@sondoonglabs/note/p-153400441?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 12, 
    title: "Episode 12: Guidance for tech startups to be more potential and reduce risk [Sondoong Labs weekend coffee]", 
    tag: "SONDOONG LABS", 
    date: "Dec 15, 2024", 
    img: "https://substackcdn.com/image/fetch/$s_!iQvA!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc41cfe10-78ad-40de-bd37-69685afb7a63_1920x1080.png", 
    link: "https://substack.com/@sondoonglabs/note/p-153155643?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 11, 
    title: "Episode 11: What can SMEs do to 'avoid the breakup day'? [Sondoong Labs weekend coffee]", 
    tag: "SONDOONG LABS", 
    date: "Nov 16, 2024", 
    img: "https://substackcdn.com/image/fetch/$s_!dI8l!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe16c5021-caed-4e4f-924b-1f23174aa30f_1920x1080.png", 
    link: "https://substack.com/@sondoonglabs/note/p-151733276?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 10, 
    title: "Episode 10: Do Something Small, But Do It Really Well [Sondoong Labs weekend coffee]", 
    tag: "SONDOONG LABS", 
    date: "Nov 7, 2024", 
    img: "https://substackcdn.com/image/fetch/$s_!fa5_!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8721f584-c0c3-4bb5-b54c-3b87c94da666_1920x1080.png", 
    link: "https://substack.com/@sondoonglabs/note/p-151311419?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 9, 
    title: "Episode 9: From Boring Business to Listed Company [Sondoong Labs weekend coffee]", 
    tag: "SONDOONG LABS", 
    date: "Oct 31, 2024", 
    img: "https://substackcdn.com/image/fetch/$s_!McTz!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Feba50ff6-52c6-479b-b46e-0efd55f52674_1920x1080.png", 
    link: "https://substack.com/@sondoonglabs/note/p-150972765?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 8, 
    title: "Episode 8: What should SMEs do? [Sondoong Labs weekend coffee]", 
    tag: "SONDOONG LABS", 
    date: "Oct 13, 2024", 
    img: "https://substackcdn.com/image/fetch/$s_!yGap!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdd8c6bd3-6392-4925-8da2-c47d13f6035a_940x788.png", 
    link: "https://substack.com/@sondoonglabs/note/p-150164579?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 7, 
    title: "Episode 7: Product-Channel Fit in the fresh meat industry[Sondoong Labs weekend coffee]", 
    tag: "SONDOONG LABS", 
    date: "Sep 29, 2024", 
    img: "https://substackcdn.com/image/fetch/$s_!I-6C!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1fa081ae-c6d3-484c-94fa-6b10e3791a30_2640x1485.png", 
    link: "https://substack.com/@sondoonglabs/note/p-149533891?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 6, 
    title: "Episode 6: Startups in Vietnam are not short of capital[Sondoong Labs weekend coffee]", 
    tag: "SONDOONG LABS", 
    date: "Sep 20, 2024", 
    img: "https://substackcdn.com/image/fetch/$s_!V__f!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe7e087d1-29e6-43e7-850f-9d7470afcccf_1920x1080.png", 
    link: "https://substack.com/@sondoonglabs/note/p-149135024?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 5, 
    title: "Episode 5: What SMEs need to transform into a BRAND [Sondoong Labs weekend coffee]", 
    tag: "SONDOONG LABS", 
    date: "Sep 20, 2024", 
    img: "https://substackcdn.com/image/fetch/$s_!udn2!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd90a65f8-a65e-4880-b789-3a53aed5818a_1333x1000.jpeg", 
    link: "https://substack.com/@sondoonglabs/note/p-149134898?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 4, 
    title: "Episode 4: LOSER or UNICORN[Sondoong Labs weekend coffee]", 
    tag: "SONDOONG LABS", 
    date: "Sep 20, 2024", 
    img: "https://substackcdn.com/image/fetch/$s_!9lJG!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F647830b1-4f42-4ea3-99df-8ebab6415223_1920x1080.png", 
    link: "https://substack.com/@sondoonglabs/note/p-149105592?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 3, 
    title: "Episode 3: The unicorn that gave up - how it affects startup funding in Vietnam [Sondoong Labs weekend coffee]", 
    tag: "SONDOONG LABS", 
    date: "Sep 19, 2024", 
    img: "https://substackcdn.com/image/fetch/$s_!w5ba!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1a13ec7e-a26a-4223-bc68-ac1f15c9ec02_1920x1080.png", 
    link: "https://substack.com/@sondoonglabs/note/p-149105188?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 2, 
    title: "Episode 2: Building an SME company into a \"brand\" company[Sondoong Labs weekend coffee]", 
    tag: "SONDOONG LABS", 
    date: "Sep 20, 2024", 
    img: "https://substackcdn.com/image/fetch/$s_!H17L!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F99093815-cda8-4796-aa4a-bb003c072e9b_1920x1080.png", 
    link: "https://substack.com/@sondoonglabs/note/p-149095416?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  },
  { 
    id: 1, 
    title: "Episode 1: Why M Village? [Sondoong Labs weekend coffee]", 
    tag: "SONDOONG LABS", 
    date: "Sep 19, 2024", 
    img: "https://substackcdn.com/image/fetch/$s_!twJ2!,w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F661d653c-b413-4779-ae5f-bc3f51d5b657_1920x1080.png", 
    link: "https://substack.com/@sondoonglabs/note/p-149094058?r=1iio5n&utm_source=notes-share-action&utm_medium=web" 
  }
]};

export default function Blog() {
  const {lang} = useLanguage();
  return (
    <main className="max-w-[1280px] mx-auto px-6">
      {/* Magazine Header */}
      <section className="pt-20 pb-16 border-b border-outline-variant/30">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-3xl">
            <span className="font-label-caps text-[#006493] uppercase tracking-widest mb-4 block">Series Spotlight</span>
            <h1 className="font-display-lg text-6xl leading-none mb-6 text-[#04044A]">Weekend Coffee</h1>
            <p className="font-body-lg text-on-surface-variant max-w-xl">A collection of weekly observations, business strategies, and regional insights from the frontlines of venture building in Vietnam.</p>
          </div>
          <div className="w-full md:w-80">
            <input className="w-full bg-transparent border-b border-outline-variant py-3 focus:outline-none focus:border-[#04044A]" placeholder="Search episodes..." type="text" />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-16">
          {posts[lang].map((post, i) => (
            <FadeIn key={post.id} delay={i * 50} className={i < 2 ? "md:col-span-2" : "md:col-span-1"}>
              <a href={post.link} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                {/* Image Wrapper */}
                <div className={`overflow-hidden rounded-xl mb-6 bg-surface-container ${i < 2 ? "aspect-[16/10]" : "aspect-square"}`}>
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                
                {/* Meta */}
                <p className="font-label-caps text-[10px] text-on-surface-variant mb-2">
                  {post.date} • SONDOONG LABS
                </p>
                
                {/* Title */}
                <h3 className={`font-headline-sm leading-snug text-[#04044A] group-hover:text-secondary transition-colors ${i < 2 ? "text-2xl" : "text-[18px] line-clamp-2"}`}>
                  {post.title}
                </h3>
                
                <span className="inline-block mt-4 text-[12px] font-bold uppercase tracking-widest text-[#04044A] border-b border-[#04044A] group-hover:text-secondary group-hover:border-secondary transition-colors">
                  {lang === "en" ? "Read Full Article" : "Đọc Bài Viết Đầy Đủ"}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>


      {/* Newsletter Subscription */}
      <section className="mb-24">
        <div className="bg-surface-container-low rounded-xl p-12 md:p-20 border border-outline-variant/10 text-center max-w-4xl mx-auto shadow-sm">
          <span className="font-label-caps text-secondary uppercase mb-4 block">{lang === "en" ? "THE WEEKEND BRIEF" : "TIN TỨC TUẦN"}</span>
          <h2 className="text-4xl font-display-lg text-[#04044A] mb-6">{lang === "en" ? "Stay ahead with the architecture of growth." : "Cập nhật xu hướng phát triển cùng Sondong Labs."}</h2>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
            <input className="flex-grow bg-white border border-outline-variant rounded-lg px-6 py-3 focus:outline-none focus:border-[#04044A]" placeholder="email@business.com" type="email" />
            <button className="bg-[#04044A] text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-all">{lang === "en" ? "Subscribe" : "Đăng Ký"} </button>
          </form>
        </div>
      </section>
    </main>
  );
}