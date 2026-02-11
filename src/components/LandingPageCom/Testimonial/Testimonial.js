import React from "react";
import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-10 md:px-0 px-5">
      <TestimonialItem
        title="Secure Notes with Spring AI"
        text="This application really stands out in terms of security and user experience. Spring Security, JWT, OAuth, and multi-factor authentication are implemented in a very clean way. The AI-assisted features make note management smarter and faster, while keeping everything secure."
        name="Soham Dutta"
        status="User"
        imgurl="https://media.licdn.com/dms/image/v2/D4D03AQEBVro8tfZ19w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714196011303?e=1771459200&v=beta&t=b9Tg1YwXfwQd89zbq3G0-nJQaTcBnPJomfCjQ7feC80"
      />

      <TestimonialItem
        title="Intelligent & Secure by Design"
        text="Secure Notes is an exceptional application that blends top-tier security with user-friendly design. With encrypted storage, JWT, OAuth, multi-factor authentication, and AI-powered note management, it makes creating, organizing, and tracking notes smarter and completely secure."
        name="Aniket Thakur"
        status="User"
        imgurl="https://media.licdn.com/dms/image/v2/D4E03AQGu69XMVFIn1A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713972763860?e=1771459200&v=beta&t=m3cwfySHMc-uQnOjMF5Xsu_rUdI2Fg6UNFEted2q2L4"
      />

      <TestimonialItem
        title="Smart & Secure Note Management"
        text="This is not just a note-taking app, it’s a complete secure ecosystem. Features like audit logs, encrypted passwords, OAuth login, and 2-factor authentication are well thought out. Spring AI enhances the experience by making the app more responsive and intelligent."
        name="Sibananda Sahu"
        status="User"
        imgurl="https://media.licdn.com/dms/image/v2/D5603AQFTk8DvTVfTJw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727680031728?e=1771459200&v=beta&t=Op0HLwBY2bmDy3bsjDyxX02WKYEBUF7n6ljlD3iZu90"
      />
    </div>
  );
};

export default Testimonial;
