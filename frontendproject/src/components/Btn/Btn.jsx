import './Btn.scss'

function Btn(props){
    
    return(
        <button className={props.color}>{props.value}</button>
    );
}

export default Btn;