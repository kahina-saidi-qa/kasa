import "./banner.scss";

function Banner({src,title}) {
  return (
    <div className="banner-img">
      <img src={src} alt="image-source" />
      <div className="banner-text">{title}</div>
    </div>
  );
}
export default Banner;
