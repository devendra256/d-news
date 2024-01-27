export const NewsItem = (props) => {
    return (
        <>
            <div className="card bg-dark text-light d-inline-block mb-3 my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
                <img src={props.imgUrl ? props.imgUrl :"https://placehold.co/327x200"} style={{height: "200px"}} className="card-img-top" alt="card image url" />
                <div className="card-body">
                    <h5 className="card-title">{props.title.slice(0,50)}</h5>
                    <p className="card-text">{props.description ? props.description.slice(0, 90) :"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}</p>
                    <a href={props.url} className="btn btn-primary" target="_blank">Read more</a>
                </div>
            </div>
        </>
    )
}
