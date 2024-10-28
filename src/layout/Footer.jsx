import React from "react";

function Footer() {
  return (
    <footer className="page-footer #000000 black" style={{ marginTop: "90px" }}>
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <img
              src="./wm-logo.png"
              alt="logo"
              style={{ width: "200px", height: "200px" }}
            />
            <p className="grey-text text-lighten-4">будь достойным</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Полезные ссылки</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://vk.me/w0rthl3ssmusic"
                >
                  Написать нам
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://vk.com/w0rthl3ssmusic"
                >
                  w0rthL3SS
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://vk.com/obizhaesh"
                >
                  obizhaesh
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright #000000 black">
        <div className="container">© 2024 Worthless Music</div>
      </div>
    </footer>
  );
}

export { Footer };
