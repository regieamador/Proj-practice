

export default function FruitsCol (props) {
    return(
        props.fruit.quantity != 0 && (
        <div className="col-lg-4 col-md-6">
            <div className="card">
                <div className="card-body bg-dark text-light p-5">
                <h1>{props.fruit.name}</h1>
                <h3>{props.fruit.origin}</h3>
                <h5>{props.fruit.price}</h5>
                <h5>{props.fruit.quantity}</h5>
                <p>{props.fruit.description}</p>
                </div>
            </div>
        </div>
        )
    )
}