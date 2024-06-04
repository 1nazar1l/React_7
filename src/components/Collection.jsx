const Collection = ({name, images}) => {
return(
<div className="collection">
    <img src={images[0]} alt="" className="collection__big" />
    <div className="collection__bottom">
        {images.map((image,i) => (
            (i != 0 ? 
                <img src={image} alt="" className="collection__mini" />
                : <></>
            )
        ))}
    </div>
    <h4>{name}</h4>
</div>
)
}

export default Collection