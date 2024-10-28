// VkWidgets.js
import React, { useEffect } from "react";
import "./styles/style.css";

const VkWidgets = () => {
  useEffect(() => {
    const scriptId = "vk-api-script";
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://vk.com/js/api/openapi.js?169";
      script.id = scriptId;
      script.async = true;

      script.onload = () => {
        if (window.VK) {
          window.VK.Widgets.Group(
            "vk_group_1",
            {
              mode: 2,
              wide: 1,
              width: 500,
              height: 600,
              color1: "020202",
              color2: "ffffff",
              color3: "ffffff",
            },
            218781480
          );
          window.VK.Widgets.Group(
            "vk_group_2",
            {
              mode: 2,
              wide: 1,
              width: 500,
              height: 600,
              color1: "020202",
              color2: "ffffff",
              color3: "ffffff",
            },
            216091354
          );
        }
      };

      document.body.appendChild(script);
    } else {
      if (window.VK) {
        window.VK.Widgets.Group(
          "vk_group_1",
          {
            mode: 2,
            wide: 1,
            width: 500,
            height: 600,
            color1: "020202",
            color2: "ffffff",
            color3: "ffffff",
          },
          218781480
        );
        window.VK.Widgets.Group(
          "vk_group_2",
          {
            mode: 2,
            wide: 1,
            width: 500,
            height: 600,
            color1: "020202",
            color2: "ffffff",
            color3: "ffffff",
          },
          216091354
        );
      }
    }

    return () => {
      // Очистка контейнеров при размонтировании компонента
      const group1 = document.getElementById("vk_group_1");
      const group2 = document.getElementById("vk_group_2");

      if (group1) group1.innerHTML = "";
      if (group2) group2.innerHTML = "";
    };
  }, []);

  return (
    <div className="vk-widgets-container">
      <div id="vk_group_1"></div>
      <div id="vk_group_2"></div>
    </div>
  );
};

export default VkWidgets;
