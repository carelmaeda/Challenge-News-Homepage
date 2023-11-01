console.log("Hello");

      // Get references to the elements
      const openBtn = document.getElementById("icon-open");
      const closeBtn = document.getElementById("icon-close");
      const menuLinks = document.getElementById("menu-links");
      const nav = document.getElementById("nav");
      const body = document.body;



      // Add a click event listener to the open button
        openBtn.addEventListener("click", function() {
          nav.style.backgroundColor = 'grey';
          body.style.backgroundColor = 'grey';
        openBtn.style.display = "none";
        closeBtn.style.display = "block";
          menuLinks.style.display = "flex";
      });

      // Add a click event listener to the close button
      closeBtn.addEventListener("click", function() {
        nav.style.backgroundColor = 'white';
        body.style.backgroundColor = 'white';
        closeBtn.style.display = "none";
        openBtn.style.display = "block";
          menuLinks.style.display = "none";
      });