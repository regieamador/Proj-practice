import 'boxicons/css/boxicons.css';

export default function Stars(props){
    return(
        <span className="star" onClick={props.clickFunction}>
            {props.isFilled ? <i class='bx bxs-star' ></i> : <i class='bx bx-star' ></i>}
        </span>
    )
}