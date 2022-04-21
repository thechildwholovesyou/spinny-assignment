import React from "react";

const Anime = () => {
  let image_url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC_VLG_6tljR88l3Un86Jujjf7JT314korYA&usqp=CAU";
  let title = "Phone";
  return (
    <div className="anime-card">
      <img src={image_url} alt={title} className="anime-img" />
      <h4 className="anime-title">{title}</h4>
    </div>
  );
};

export default Anime;
