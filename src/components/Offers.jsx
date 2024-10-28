import React, { useEffect, useState } from "react";
import "./styles/style.css";

function Offers() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOffers = async () => {
    try {
      const response = await fetch(
        "https://671ca6ad09103098807abc55.mockapi.io/music_api/offers"
      );
      if (!response.ok) {
        throw new Error("Ошибка");
      }
      const data = await response.json();
      setOffers(data);
    } catch (error) {
      console.error("Ошибка:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <div className="block">
      <div
        className="contract"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h1>УСЛУГИ</h1>
      </div>

      <div
        className="contract-info"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {loading ? (
          <div class="progress">
            <div class="indeterminate"></div>
          </div>
        ) : (
          offers.map((offer) => (
            <div key={offer.id} className="card">
              <img
                src={offer.img}
                alt={offer.name}
                style={{ width: "100%", height: "383.8px" }}
              />
              <h2 style={{ fontSize: "40px" }}>{offer.name}</h2>
              <p className="price">Цена: {offer.price}</p>
              <p style={{ fontSize: "20px", marginTop: "5px" }}>
                {offer.description}
              </p>
              <a
                className="buyLink"
                href="https://vk.me/w0rthl3ssmusic"
                style={{ fontSize: "20px" }}
              >
                Купить
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export { Offers };
