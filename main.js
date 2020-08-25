$(document).ready(function() {
  $(window).resize(function() {
    if(window.innerWidth > 575) {
      $(".menu").removeClass('menu-active')
    }
  })

  $('.nav-links').click(function() {
    $(".menu").toggleClass('menu-active');
  })
  
  $('.menu-btn').click(function() {
    $(".menu").toggleClass('menu-active');
  })

  $(".project-background").click(function(){
    $(".project-specifications").fadeOut(300);
  })

  $(".close-project").click(function(){
    $(".project-specifications").fadeOut(300);
  })
})



function showProject(project) {
  switch (project) {
      case 1:
          $("#project-1").fadeIn(300)
          break;
      case 2:
          $("#project-2").fadeIn(300)
          break;
      case 3: 
          $("#project-3").fadeIn(300)
          break;
      case 4: 
          $("#project-4").fadeIn(300)
          break;
  }
}

function changeImage(project_img) {
  var image = document.getElementById("project-1-background")
  if (project_img > 20 && project_img < 25) {
    image = document.getElementById("project-2-background")
  } else if (project_img > 30 && project_img < 35) {
    image = document.getElementById("project-3-background")
  } else if (project_img > 40 && project_img < 45) {
    image = document.getElementById("project-4-background")
  }

  switch (project_img) {
      case 11:
          image.style.backgroundImage = "url('https://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg')";
          imageBorder("image-11", "image-12", "image-13")
          break;
      case 12:
          image.style.backgroundImage = "url('https://pbs.twimg.com/media/DoQGxT6W0AAPred.png')";
          imageBorder("image-12", "image-11", "image-13")
          break;
      case 13:
          image.style.backgroundImage = "url('https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg')";
          imageBorder("image-13", "image-11", "image-12")
          break;
      case 21: 
          image.style.backgroundImage = "url('https://c8.alamy.com/compes/epf1yw/monja-con-pistola-aislado-en-blanco-epf1yw.jpg')";
          imageBorder("image-21", "image-22", "image-23")
          break;
      case 22: 
          image.style.backgroundImage = "url('https://c8.alamy.com/compes/axbexr/fotografia-de-stock-de-un-adolescente-asiatico-con-una-trompeta-a-su-oido-axbexr.jpg')";
          imageBorder("image-22", "image-21", "image-23")
          break;
      case 23: 
          image.style.backgroundImage = "url('https://nexter.org/wp-content/uploads/sites/2/2019/08/weird-stock-images-photos-funny-pic46.jpg')";
          imageBorder("image-23", "image-21", "image-22")
          break;
      case 31: 
          image.style.backgroundImage = "url('https://media.istockphoto.com/photos/indian-engineer-boy-stock-images-picture-id1077336802')";
          imageBorder("image-31", "image-32", "image-33")
          break;
      case 32: 
          image.style.backgroundImage = "url('https://i.kym-cdn.com/photos/images/original/001/316/888/f81.jpeg')";
          imageBorder("image-32", "image-31", "image-33")
          break;
      case 33: 
          image.style.backgroundImage = "url('https://img3.stockfresh.com/files/p/palangsi/m/45/894367_stock-photo-vietnamese-man-meditating-pose.jpg')";
          imageBorder("image-33", "image-31", "image-32")
          break;
      case 41: 
          image.style.backgroundImage = "url('https://www.brandinginasia.com/wp-content/uploads/2017/03/Japanese-Nurse-Stock-Photos-Branding-in-Asia-1-2.jpg')";
          imageBorder("image-41", "image-42", "image-43")
          break;
      case 42:
          image.style.backgroundImage = "url('https://i2.wp.com/www.plethorist.com/wp-content/uploads/2017/07/The-Worst-Stock-Photos-On-The-Internet-2.jpg?ssl=1')";
          imageBorder("image-42", "image-41", "image-43")
          break;
      case 43: 
          image.style.backgroundImage = "url('https://img.buzzfeed.com/buzzfeed-static/static/2017-08/2/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-5511-1501688542-1.jpg?resize=990:611?output-quality=auto&output-format=auto&downsize=640:*')";
          imageBorder("image-43", "image-41", "image-42")
          break;
  }
}

function imageBorder(img_1, img_2, img_3) {
  document.getElementById(img_1).style.border = "3px solid #4456FB";
  document.getElementById(img_2).style.border = "none";
  document.getElementById(img_3).style.border = "none"; 
}