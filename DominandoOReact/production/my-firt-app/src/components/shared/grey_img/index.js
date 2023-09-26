import './style.css';

const GreyImg = (props) => {
    return(
        <div>
             <img className={props.grey? "greyImg":"colorImg"} src={props.img_url} alt='planet'></img>
        </div>
    )
}

export default GreyImg;