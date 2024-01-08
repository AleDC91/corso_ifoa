import "../styles/ImageComponent.css"

const ImageComponent = ({ imageData }) => {
  const { src, alt, title } = imageData;

  return (
    <div className="image-container">
      <img src={src} alt={alt} title={title}/>
    </div>
  );
};

export default ImageComponent;
