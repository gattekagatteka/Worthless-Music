import React, { useState } from "react";
import artist1Image from "../assets/w0rthL3SS.JPEG";
import artist2Image from "../assets/obizhaesh.jpg";
import cover1 from "../assets/nh-cover.jpg";
import cover2 from "../assets/dcover.jpg";

const ArtistBlock = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="about-container">
      <div className="artists-container">
        <div className="artist-block">
          <img src={artist1Image} alt="w0rthL3SS" className="artist-image" />
          <h3 className="artist-name">w0rthL3SS</h3>
          <p className="artist-info">
            Исполнитель в жанрах рока и экспериментального хип-хопа (трэп-метал,
            некротрэп)
          </p>
        </div>

        <div className="artist-block">
          <img src={artist2Image} alt="obizhaesh" className="artist-image" />
          <h3 className="artist-name">obizhaesh</h3>
          <p className="artist-info">
            Продюсер и исполнитель в жанре некротрэп
          </p>
        </div>
      </div>

      <div
        className="release-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "80px",
        }}
      >
        <h1>НАШИ ПОПУЛЯРНЫЕ РЕЛИЗЫ</h1>

        <div className="release-block" style={{ marginTop: "80px" }}>
          <img src={cover1} alt="NECROHORROR cover" className="track-cover" />
          <p className="p-info">
            w0rthL3SS — NECROHORROR (prod. by obizhaesh) - EP
          </p>
          <a
            href="https://band.link/NECROHORROR"
            style={{
              fontSize: "20px",
              color: isHovered ? "rgb(192, 192, 192)" : "white",
              textDecoration: "none",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Слушать
          </a>
        </div>

        <div className="release-block" style={{ marginTop: "80px" }}>
          <img
            src="https://sun5-8.userapi.com/impg/D08v2cXf-b5A2OJh9WN0n4Xy_cXsurS_Q1Jd2Q/fdIzxYlV6Y0.jpg?size=2160x2160&quality=96&sign=59f07723d8b2a2aa7091957db041d6ed&type=album"
            alt="НА ГРАНИ cover"
            className="track-cover"
          />
          <p className="p-info">obizhaesh — НА ГРАНИ - EP</p>
          <a
            href="https://musicalligator.link/na_grani"
            style={{
              fontSize: "20px",
              color: isHovered ? "rgb(192, 192, 192)" : "white",
              textDecoration: "none",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Слушать
          </a>
        </div>

        <div className="release-block" style={{ marginTop: "80px" }}>
          <img src={cover2} alt="DON'T CRY cover" className="track-cover" />
          <p className="p-info">
            w0rthL3SS — DON'T CRY (prod. by obizhaesh) - SINGLE
          </p>
          <a
            href="https://band.link/d0ntcryton1ght"
            style={{
              fontSize: "20px",
              color: isHovered ? "rgb(192, 192, 192)" : "white",
              textDecoration: "none",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Слушать
          </a>
        </div>

        <div className="release-block" style={{ marginTop: "80px" }}>
          <img
            src="https://sun9-51.userapi.com/impg/R2ojZ5zDe8DM61-Siuca-KwIGOon0LU5UBUK8w/TBxM2Sv-Rzk.jpg?size=2560x2560&quality=95&sign=2264e8c98e7587b74e8d9cc7b0782ef2&type=album"
            alt="ПОДСЫ cover"
            className="track-cover"
          />
          <p className="p-info">obizhaesh — ПОДСЫ - SINGLE</p>
          <a
            href="https://musicalligator.link/podsy"
            style={{
              fontSize: "20px",
              color: isHovered ? "rgb(192, 192, 192)" : "white",
              textDecoration: "none",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Слушать
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArtistBlock;
