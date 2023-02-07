fetch("https://api.opensea.io/api/v1/collection/vv-checks/stats")
  .then(response => response.json())
  .then(({ stats }) => {
    const { one_day_change } = stats;
    const image = one_day_change > 0 ? "Image1.png" : "Image2.png";
    window.location.href = `images.html?image=${image}`;
  });
