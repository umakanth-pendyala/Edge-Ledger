let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 14,
//   });

//   var marker = new google.maps.Marker({
//     position: { lat: -34.397, lng: 150.644 },
//     map: map,
//   });
// }

$("#navbar a, .btn").on("click", function (event) {
  if (this.hash != "") {
    // alert("i am in loop");
    event.preventDefault();
    const hash = this.hash;
    console.log(hash);

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
